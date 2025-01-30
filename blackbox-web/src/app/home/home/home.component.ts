import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {MarqueeComponent} from '../marquee/marquee.component';
import {WhiteComponent} from '../../white/white.component';
import {WhyUsComponent} from '../why-us/why-us.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    MarqueeComponent,
    WhiteComponent,
    WhyUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
