import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { imagesAPI } from '../Services/Image_Service';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements OnInit {
   constructor(private http:HttpClient){

 }
  ngOnInit(): void {
  //  this.fetchData();
  }

  httpClient = inject(HttpClient);
  data: any[] = [];

  // fetchData() {
  //   this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data:any)=>{
  //     console.log(data);
  //     this.data=data;
      
  //   });
  // }


}
