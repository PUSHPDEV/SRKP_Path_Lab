import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AboutUsComponent, FooterComponent, CarouselComponent]
})
export class HomeComponent {

}
