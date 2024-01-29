import { Component } from '@angular/core';
import { ScrollTopButtonComponent } from "../scroll-top-button/scroll-top-button.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css',
    imports: [CommonModule]
})
export class AboutUsComponent {

    ourTeam=[
        {
            doctorImage: 'assets/Our_Team/Dr. SRKP.jpg',
            doctorName: 'Dr. Surendra Kumar',
            doctorAbout: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            doctorImage: 'assets/Our_Team/Dr. SRKP.jpg',
            doctorName: 'Dr. Surendra Kumar',
            doctorAbout: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            doctorImage: 'assets/Our_Team/Dr. SRKP.jpg',
            doctorName: 'Dr. Surendra Kumar',
            doctorAbout: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            doctorImage: 'assets/Our_Team/Dr. SRKP.jpg',
            doctorName: 'Dr. Surendra Kumar',
            doctorAbout: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
    ]
}
