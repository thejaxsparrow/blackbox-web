import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HeroComponent } from './home/hero/hero.component';

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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
