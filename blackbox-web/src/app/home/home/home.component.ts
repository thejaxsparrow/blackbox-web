import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {MarqueeComponent} from '../marquee/marquee.component';
import {WhyUsComponent} from '../why-us/why-us.component';
import {ServicesHomeComponent} from '../services-home/services-home.component';
import {ProcessHomeComponent} from '../process-home/process-home.component';
import {FooterHomeComponent} from '../footer-home/footer-home.component';
import {OurMissionHomeComponent} from '../our-mission-home/our-mission-home.component';
import {MarqueeEndComponent} from '../marquee-end/marquee-end.component';
import {OurMissionHomeTitleComponent} from '../our-mission-home-title/our-mission-home-title.component';
import {SpacerComponent} from '../../spacer/spacer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    MarqueeComponent,
    WhyUsComponent,
    ServicesHomeComponent,
    ProcessHomeComponent,
    FooterHomeComponent,
    OurMissionHomeComponent,
    MarqueeEndComponent,
    OurMissionHomeTitleComponent,
    SpacerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
