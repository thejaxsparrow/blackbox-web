import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-our-mission-home-title',
  templateUrl: './our-mission-home-title.component.html',
  styleUrls: ['./our-mission-home-title.component.scss']
})
export class OurMissionHomeTitleComponent implements AfterViewInit {
  @ViewChild('missionTitle', { static: true }) missionTitle!: ElementRef<HTMLDivElement>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.setupStickyAnimation();
  }

  setupStickyAnimation(): void {
    gsap.to(this.missionTitle.nativeElement, {
      backgroundColor: "#E4E4E4",
      scrollTrigger: {
        trigger: this.missionTitle.nativeElement,
        start: "top top",
        end: "200px",
        pin: true,
        pinSpacing: false,
        scrub: 1
      }
    });

    gsap.to(this.missionTitle.nativeElement, {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: this.missionTitle.nativeElement,
        start: "top 10%",
        end: "top top",
        scrub: 1
      }
    });
  }
}
