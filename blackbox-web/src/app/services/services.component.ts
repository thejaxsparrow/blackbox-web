import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesService, Service } from '../services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule], // Standalone + routing
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.servicesService.getServices().subscribe((data: Service[]) => {
      this.services = data;
    });
  }
}
