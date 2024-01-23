import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";
import { AboutUsComponent } from "./about-us/about-us.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent, CarouselComponent, AboutUsComponent]
})
export class AppComponent {
  title = 'SRKP_Path_Lab';
}
