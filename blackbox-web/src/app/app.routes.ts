import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import {ServiceDetailComponent} from './services/service-detail/service-detail.component';
import {OurExpertiseComponent} from './our-expertise/our-expertise/our-expertise.component';
import {ContactUsComponent} from './contact-us/contact-us.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'hero',
        component: HeroComponent,
      },
    ],
  },
  {
    path: 'services/:slug',
    component: ServiceDetailComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'our-expertise',
    component: OurExpertiseComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
