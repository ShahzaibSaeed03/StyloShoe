import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TwoButtonComponent } from "../two-button/two-button.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { QualityComponent } from "../quality/quality.component";
import { BestSallerComponent } from "../best-saller/best-saller.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, TwoButtonComponent, AboutUsComponent, QualityComponent, BestSallerComponent]
})
export class HomeComponent {

}
