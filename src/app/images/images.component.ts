import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements OnInit {
  ngOnInit(): void {
    this.fetchImages();
  }

  httpClient = inject(HttpClient);
  images: any[] = [];

  fetchImages() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1').subscribe()
  }


}
