import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

interface Service {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  image: string;
  detailedDescriptionTitle: string;
  detailedDescription: string;
  secondaryDescription: string;
  includedServices: { title: string; description: string }[];
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [NgClass, RouterLink, NgForOf, NgIf],
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isMenuOpen: boolean = false;
  dropdownOpen: boolean = false;
  services: Service[] = [];
  lastScrollTop: number = 0;
  showNavbar: boolean = true;
  scrolled: boolean = false;

  // 1. Injection du Router ici
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<Service[]>('assets/services.json').subscribe({
      next: (data) => (this.services = data),
      error: (error) => console.error('Tabernacle', error),
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.dropdownOpen = false;
    }
  }

  closeDropdown(): void {
    this.dropdownOpen = false;
    this.isMenuOpen = false;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // 2. Une seule méthode onWindowScroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = currentScroll > 50;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (window.innerWidth > 768 && this.dropdownOpen) {
      const targetElement = event.target as HTMLElement;
      if (!targetElement.closest('.dropdown')) {
        this.dropdownOpen = false;
      }
    }
  }

  // 3. Méthode pour aller à Home, puis scroller vers la section howitworks
  goToHowItWorks(): void {
    // Vérifie si on est déjà sur /home
    if (this.router.url === '/home') {
      this.scrollToSection('howitworks');
    } else {
      this.router.navigate(['/home']).then(() => {
        // Laisser un petit délai (ex. 100-300ms) pour que la section soit rendue
        setTimeout(() => {
          this.scrollToSection('howitworks');
        }, 200);
      });
    }
  }


  private scrollToSection(sectionId: string): void {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
}
