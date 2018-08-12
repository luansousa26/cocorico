import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  images: String[] = [];
  constructor() { }
  
  ngOnInit() {
    this.images = [
      './assets/cat.jpg',
      './assets/cat2.jpg',
      './assets/cat3.jpg',
      './assets/cat4.jpg'
    ]
  }

}
