import { Component } from '@angular/core';
import { ScrollTopButtonComponent } from "../scroll-top-button/scroll-top-button.component";

@Component({
    selector: 'app-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrl: './services.component.css',
    imports: [ScrollTopButtonComponent]
})
export class ServicesComponent {

}
