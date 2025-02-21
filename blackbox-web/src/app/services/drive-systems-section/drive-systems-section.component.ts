import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-drive-systems-section',
  templateUrl: './drive-systems-section.component.html',
  styleUrls: ['./drive-systems-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DriveSystemsSectionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    // Appel de la fonction d'animation dès l'initialisation
    this.setupScrollElementTestTrigger();
  }

  // Fonction d'animation pour .scroll-element
  setupScrollElementTestTrigger(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true
      }
    });

    tl.fromTo(".scroll-element",
      { x: "-50vw" },
      { x: "0", ease: "power2.out" },
      0
    );
  }
}
