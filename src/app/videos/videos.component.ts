import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  ourTeam = [
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
