import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-get-started-button',
  imports: [
    NgStyle
  ],
  templateUrl: './get-started-button.component.html',
  styleUrl: './get-started-button.component.scss'
})
export class GetStartedButtonComponent {
  @Input() text: string = 'Click Me'; // Texte du bouton
  @Input() type: 'primary' | 'secondary' = 'primary'; // Style du bouton
  @Input() disabled: boolean = false; // Désactiver le bouton
  @Input() icon?: string; // Icône optionnelle
  @Input() padding: string = '0.75rem 2rem';
}

