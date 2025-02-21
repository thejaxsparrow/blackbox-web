import { Component } from '@angular/core';
import {HeroExpertiseComponent} from '../hero-expertise/hero-expertise.component';
import {SpacerComponent} from '../../home/spacer/spacer.component';
import {FooterHomeComponent} from '../../home/footer-home/footer-home.component';
import {DriveSystemsSectionComponent} from '../../services/drive-systems-section/drive-systems-section.component';

@Component({
  selector: 'app-our-expertise',
  imports: [
    HeroExpertiseComponent,
    SpacerComponent,
    FooterHomeComponent,
    DriveSystemsSectionComponent
  ],
  templateUrl: './our-expertise.component.html',
  styleUrl: './our-expertise.component.scss'
})
export class OurExpertiseComponent {

}
