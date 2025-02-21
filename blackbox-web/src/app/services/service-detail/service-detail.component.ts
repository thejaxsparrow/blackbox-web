import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services.service';
import { DecimalPipe, NgForOf, NgIf } from '@angular/common';
import { WhiteMarqueeComponent } from '../white-marquee/white-marquee.component';
import { SpacerComponent } from '../../home/spacer/spacer.component';
import { FooterHomeComponent } from '../../home/footer-home/footer-home.component';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DriveSystemsSectionComponent } from '../drive-systems-section/drive-systems-section.component';
import { ScrollTestComponent } from '../scroll-test/scroll-test.component';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  imports: [
    NgIf,
    NgForOf,
    WhiteMarqueeComponent,
    SpacerComponent,
    DecimalPipe,
    FooterHomeComponent,
    DriveSystemsSectionComponent,
    ScrollTestComponent,
    ScrollTestComponent,
  ],
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit, AfterViewInit {
  service: any;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.servicesService.getServiceBySlug(slug).subscribe(service => {
          this.service = service;

          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          setTimeout(() => {
            this.setupScrollTrigger();
            this.setupCardsScrollTrigger();
            this.setupScrollElementTestTrigger();
          }, 0);
        });
      }
    });
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  setupScrollTrigger(): void {
    ScrollTrigger.create({
      trigger: ".service-content",
      start: "top 0%",
      onEnter: () => {
        gsap.to(".service-content", {
          backgroundColor: "#ffffff",
          color: "black",
          duration: 0.5,
          ease: "power1.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(".service-content", {
          backgroundColor: "#161616",
          color: "white",
          duration: 0.5,
          ease: "power1.out"
        });
      },
      markers: false
    });
  }

  setupCardsScrollTrigger(): void {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".service-content",
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            markers: false
          }
        });

        const cards = gsap.utils.toArray<HTMLElement>(".service-card");

        cards.forEach((card, index) => {
          const colIndex = index % 4;
          let offset = 0;
          if (colIndex === 1) {
            offset = 30;
          } else if (colIndex === 2) {
            offset = 50;
          } else if (colIndex === 3) {
            offset = 15;
          }

          tl.fromTo(card,
            { y: offset + "vh" },
            { y: "0vh", ease: "none" },
            0
          );
        });
      }
    });
  }


  setupScrollElementTestTrigger(): void {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".scroll-container",
            start: "top 90%",
            end: "top 40%",
            scrub: true,
            markers: false
          }
        });

        tl.fromTo(".scroll-element",
          { x: "-50vw" },
          { x: "0", ease: "none" },
          0
        );
      }
    });
  }
}
