import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scroll-test',
  templateUrl: './scroll-test.component.html',
  styleUrls: ['./scroll-test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollTestComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

   
  }
}
