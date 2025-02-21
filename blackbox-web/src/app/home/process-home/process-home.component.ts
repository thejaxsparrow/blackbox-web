import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {GetStartedButtonComponent} from "../get-started-button/get-started-button.component";
import gsap from "gsap";

@Component({
  selector: 'app-process-home',
  templateUrl: './process-home.component.html',
    imports: [

        NgForOf,
        GetStartedButtonComponent
    ],
  styleUrls: ['./process-home.component.scss']
})
export class ProcessHomeComponent {
  steps = [
    { number: '01', title: 'Understand Your Needs', description: 'We start by listening to your challenges and goals to fully understand your business needs.' },
    { number: '02', title: 'Analyze Your Systems', description: 'We conduct an in-depth audit of your existing systems to identify bottlenecks and opportunities for improvement.' },
    { number: '03', title: 'Design Tailored Solutions', description: 'Based on your unique requirements, we create scalable, robust, and efficient system architectures.' },
    { number: '04', title: 'Implement with Precision', description: 'Our team develops and integrates solutions seamlessly, ensuring minimal disruption to your operations.' },
    { number: '05', title: 'Optimize and Evolve', description: 'We continuously monitor and optimize your systems, providing ongoing support to keep you ahead of the competition.' }
  ];

  activeIndex: number | null = null;

  toggleStep(index: number) {
    this.activeIndex = (this.activeIndex === index) ? null : index;
    setTimeout(() => {
      const stepContents = document.querySelectorAll<HTMLElement>('.step-content');
      if (!stepContents[index]) return;
      const contentEl = stepContents[index];

      if (this.activeIndex === index) {
        // OUVERTURE
        gsap.fromTo(
          contentEl,
          { maxHeight: 0, opacity: 0 },
          {
            maxHeight: contentEl.scrollHeight,
            opacity: 1,
            duration: 0.01,
            ease: 'power2.out'
          }
        );
      } else {
        // FERMETURE
        gsap.fromTo(
          contentEl,
          { maxHeight: contentEl.scrollHeight, opacity: 1 },
          {
            maxHeight: 0,
            opacity: 0,
            duration: 0.01,
            ease: 'power2.in'
          }
        );
      }
    });
  }

}
