import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TwoButtonComponent } from './components/two-button/two-button.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { QualityComponent } from './components/quality/quality.component';
import { BestSallerComponent } from './components/best-saller/best-saller.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clothcraft';
}
