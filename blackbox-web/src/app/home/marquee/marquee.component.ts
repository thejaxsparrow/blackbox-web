import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent {
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

  starSrc = 'assets/home/images/star-marquee.svg'; // Chemin vers votre image
}
