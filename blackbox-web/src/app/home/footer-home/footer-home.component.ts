import { Component } from '@angular/core';
import {GetStartedButtonComponent} from '../get-started-button/get-started-button.component';

@Component({
  selector: 'app-footer-home',
  imports: [
    GetStartedButtonComponent
  ],
  templateUrl: './footer-home.component.html',
  styleUrl: './footer-home.component.scss'
})
export class FooterHomeComponent {

}
