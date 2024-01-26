import { Component } from '@angular/core';
import { ScrollTopButtonComponent } from "../scroll-top-button/scroll-top-button.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css',
    imports: [ScrollTopButtonComponent]
})
export class AboutUsComponent {

}
