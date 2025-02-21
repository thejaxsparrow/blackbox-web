import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'blackbox-web';

  @ViewChild('smoothWrapper', { static: true }) smoothWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('smoothContent', { static: true }) smoothContent!: ElementRef<HTMLDivElement>;

  private lenis!: Lenis;


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }


  ngAfterViewInit(): void {
    // Initialisation de Lenis après que la vue soit chargée
    this.lenis = new Lenis({
      wrapper: this.smoothWrapper.nativeElement,
      content: this.smoothContent.nativeElement,
      smoothWheel: true,  // Scroll fluide à la molette
      duration: 1.2, // Durée du scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Effet d'accélération
    });

    // Boucle d’animation pour mettre à jour Lenis à chaque frame
    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
}

