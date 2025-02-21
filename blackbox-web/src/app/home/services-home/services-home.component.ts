import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';
import { generateServiceId } from '@shared/utils';



@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent {


  arrowIcon = `
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.942879 8.90287C0.410406 8.97617 0 9.43937 0 9.99985C0 10.6113
               0.488417 11.1069 1.09091 11.1069H20.2666L13.3396 18.1085L13.2337
               18.2324C12.9159 18.6651 12.9499 19.2803 13.3364 19.6741C13.7615 20.1074
               14.4523 20.1088 14.8792 19.6774L23.6636 10.7994C23.7159 10.7486 23.7633
               10.6925 23.8048 10.632C24.1022 10.1997 24.0603 9.59992 23.6791 9.21475L14.8791
               0.322575L14.7565 0.215649C14.3288 -0.104998 13.7228 -0.0679398 13.3363
               0.325947C12.9112 0.759224 12.9127 1.46019 13.3397 1.89161L20.2683
               8.89276H1.09091L0.942879 8.90287Z"
            fill="currentColor"></path>
    </svg>
  `;
  arrowIconSafe: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {

    this.arrowIconSafe = this.sanitizer.bypassSecurityTrustHtml(this.arrowIcon);
  }

  // Liste des services
  services = [
    { name: 'Refinement of Existing Systems', slug: 'refinement-of-existing-systems' },
    { name: 'System Design and Architecture', slug: 'system-design-and-architecture' },
    { name: 'Software Performance Optimization', slug: 'software-performance-optimization' },
    { name: 'Cloud Migration & Infrastructure Scaling', slug: 'cloud-migration-infrastructure-scaling' }
  ];


  getServiceId(service: any): string {
    return generateServiceId(service);
  }

  protected readonly generateServiceId = generateServiceId;
}
