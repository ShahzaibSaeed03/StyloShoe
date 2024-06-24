import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-two-button',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './two-button.component.html',
  styleUrl: './two-button.component.css'
})
export class TwoButtonComponent {

}
