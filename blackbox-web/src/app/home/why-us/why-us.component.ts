import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
  standalone: true,
  imports: [NgForOf]
})
export class WhyUsComponent implements AfterViewInit {
  @ViewChild('whyUsWrapper', { static: true }) whyUsWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('whyUsContent', { static: true }) whyUsContent!: ElementRef<HTMLDivElement>;

  cards = [
    {
      icon: 'medal.png',
      title: 'Proven Expertise',
      description: 'With years of experience, we design and optimize systems to ensure top performance and security. Our solutions are tested, reliable, and built for modern challenges.'
    },
    {
      icon: 'puzzle-piece.png',
      title: 'Personalized Approach',
      description: 'Every project is unique. We analyze your specific needs and develop tailor-made solutions with a transparent, results-driven approach.'
    },
    {
      icon: 'bar-chart.png',
      title: 'Measurable Results',
      description: 'Our strategies help you reduce costs, enhance efficiency, and achieve a fast return on investment by optimizing every aspect of your business.'
    },
    {
      icon: 'telescope.png',
      title: 'Long-Term Vision',
      description: 'We build scalable, future-proof solutions that adapt to change, ensuring sustainable growth and long-term success.'
    },
    {
      icon: 'collaboration.png',
      title: 'Lasting Partnerships',
      description: 'Our commitment goes beyond delivery. We provide ongoing support and collaboration to ensure your continued success.'
    }
  ];



  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const wrapper = this.whyUsWrapper.nativeElement;
    const content = this.whyUsContent.nativeElement;

    // 20% de la largeur de la fenêtre pour avoir un padding à gauche et à droite
    const extraSpace = 0.2 * window.innerWidth;

    // Position finale pour avoir 'extraSpace' sur la droite également
    function getEndX(): number {
      const totalWidth = content.scrollWidth;
      const viewportWidth = window.innerWidth;
      // => ex: viewportWidth - totalWidth - extraSpace
      return -((totalWidth - viewportWidth) + extraSpace);
    }

    // Distance totale à parcourir (sert pour la durée du pin)
    function getTotalDistance(): number {
      const totalWidth = content.scrollWidth;
      const viewportWidth = window.innerWidth;
      return (totalWidth - viewportWidth) + 2 * extraSpace;
    }

    // On anime de x = extraSpace (départ) à x = getEndX() (fin)
    const tween = gsap.fromTo(
      content,
      { x: extraSpace },
      {
        x: getEndX,
        duration: 3,
        ease: 'none'
      }
    );

    ScrollTrigger.create({
      trigger: wrapper,
      start: 'top 20%', // Ajustez si besoin
      end: () => `+=${getTotalDistance()}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true // À désactiver en prod
    });
  }
}
