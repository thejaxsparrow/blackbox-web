import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  services: any[] = [];
  isMenuOpen = false;
  showServices = false;

  constructor(private servicesService: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.servicesService.getServices().subscribe(data => {
      this.services = data;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleServices(): void {
    this.showServices = !this.showServices;
  }

  navigateToService(slug: string): void {
    this.router.navigate(['/services', slug]).then(() => {
      window.history.replaceState({}, '', `/services/${slug}`);
      window.location.reload();
    });
  }


}
