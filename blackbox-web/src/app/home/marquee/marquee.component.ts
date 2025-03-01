import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements AfterViewInit {
  @ViewChild('marqueeContent', { static: false }) marqueeContent!: ElementRef;

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

  starSrc = 'assets/home/images/star-marquee.svg';

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
