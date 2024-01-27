import { Component } from '@angular/core';

// declare function testimonial(): any;

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  querySelector: any;
  // querySelector: any;
  ngOnInit() {
    // testimonial();
  }
  constructor() {
    const myCarousel: HTMLElement | null = document.getElementById('myCarousel');
    myCarousel?.addEventListener('slid.bs.carousel',  () => {
      const activeItem: HTMLElement = this.querySelector(".active");
      (document.querySelector(".testi-img img") as HTMLImageElement).src = activeItem.getAttribute("data-img") || "";
      (document.querySelector(".testi-img .circle") as HTMLElement).style.backgroundColor = activeItem.getAttribute("data-color") || "";
      console.log(activeItem);
    });
  }
}
