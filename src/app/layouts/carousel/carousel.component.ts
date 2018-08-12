import { Component, OnInit } from '@angular/core';
import { CarouselModel } from './carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  itensCarousel: CarouselModel[] = [];
  constructor() { }

  ngOnInit() {
    this.itensCarousel = [
      {nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/carousel/cocorico1.jpg'},
      {nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/carousel/cocorico2.jpg'},
      {nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/carousel/cocorico3.jpg'},
      {nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/carousel/cocorico4.jpg'}
    ]
  }

}
