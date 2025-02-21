import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [
    FormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {

      console.log('Form values:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
