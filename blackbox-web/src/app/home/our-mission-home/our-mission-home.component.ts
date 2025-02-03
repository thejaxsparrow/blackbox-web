import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-our-mission-home',
  templateUrl: './our-mission-home.component.html',
  styleUrls: ['./our-mission-home.component.scss'],
  imports: [
    NgForOf
  ]
})
export class OurMissionHomeComponent implements AfterViewInit {
  @ViewChild('section1', { static: true }) section1!: ElementRef<HTMLDivElement>;
  @ViewChild('section2', { static: true }) section2!: ElementRef<HTMLDivElement>;

  // -- NOUVEAU : Contenu géré en TS --
  sections = [
    {
      number: '01',
      title: 'The Cost of Poor Software Quality',
      description: 'Poor software leads to systemic issues that compound over time. Below are some key points:',
      points: [
        'Businesses lose billions annually due to poor software.',
        'Inefficient systems lead to higher operational costs.',
        'Poor software affects scalability and customer satisfaction.'
      ]
    },
    {
      number: '02',
      title: 'Why It Matters',
      description: 'Understanding the broader impact of low-quality software is crucial. Here\'s why:',
      points: [
        'Low-quality software delays feature releases.',
        'Constant bug-fixing drains development resources.',
        'Bad software can damage brand reputation.'
      ]
    },
    {
      number: '03',
      title: 'Our Solution',
      description: 'We focus on delivering optimized, future-proof solutions. Key advantages include:',
      points: [
        'We develop high-performance, scalable software.',
        'Our solutions eliminate technical debt.',
        'Future-proof your business with optimized technology.'
      ]
    }
  ];

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    // On désactive complètement l'animation en dessous de 768px
    if (window.innerWidth < 768) {
      return;
    }

    this.setupScrollAnimations();
  }

  setupScrollAnimations(): void {
    // On ne modifie pas votre logique actuelle de pin
    const sections = [this.section1, this.section2];
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.nativeElement,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: true,
        onEnter: () =>
          gsap.to(section.nativeElement, {
            backgroundColor: '#E4E4E4',
            duration: 0.5,
          }),
        onLeaveBack: () =>
          gsap.to(section.nativeElement, {
            backgroundColor: 'white',
            duration: 0.01,
          }),
      });
    });
  }
}
