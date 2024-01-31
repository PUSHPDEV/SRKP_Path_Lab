import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-test-details',
  standalone: true,
  imports: [],
  templateUrl: './view-test-details.component.html',
  styleUrl: './view-test-details.component.css'
})
export class ViewTestDetailsComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    let id=this.activeRoute.snapshot.paramMap.get('id');
    console.warn(id)
  }

}
