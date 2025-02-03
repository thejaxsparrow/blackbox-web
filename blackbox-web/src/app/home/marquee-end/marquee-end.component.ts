import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-marquee-end',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './marquee-end.component.html',
  styleUrl: './marquee-end.component.scss'
})
export class MarqueeEndComponent implements AfterViewInit {
  @ViewChild('marqueeEndContent', { static: false }) marqueeEndContent!: ElementRef;

  keywords = [
    'Performance',
    'Solutions',
    'Optimisation',
    'Cost-Effective',
    'Future-Proof',
    'Development',
    'Design',
    'Modernization',
    'Improvement'
  ];

  dynamicKeywords: string[] = [];

  starSrc = 'assets/home/images/star-marquee-end.svg';

  ngAfterViewInit() {
    this.generateInfiniteMarquee();
  }

  generateInfiniteMarquee() {
    const minItems = 40;
    this.dynamicKeywords = [];

    while (this.dynamicKeywords.length < minItems) {
      this.dynamicKeywords.push(...this.keywords);
    }
  }
}
