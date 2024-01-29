import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { CustomersSayComponent } from "../customers-say/customers-say.component";
import { RouterLink } from '@angular/router';
import { WhyChooseUsComponent } from "../why-choose-us/why-choose-us.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AboutUsComponent, FooterComponent, CarouselComponent, CustomersSayComponent, RouterLink, WhyChooseUsComponent]
})
export class HomeComponent {

}
