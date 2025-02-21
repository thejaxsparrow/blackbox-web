import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-spacer',
  imports: [
    NgStyle
  ],
  template: `<div class="spacer" [ngStyle]="{'background-color': bgColor}"></div>`,
  styleUrl: './spacer.component.scss'
})
export class SpacerComponent {
  @Input() bgColor: string = 'white';
}
