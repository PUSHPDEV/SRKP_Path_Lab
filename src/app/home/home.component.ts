import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { CustomersSayComponent } from "../customers-say/customers-say.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AboutUsComponent, FooterComponent, CarouselComponent, CustomersSayComponent,RouterLink]
})
export class HomeComponent {

}
