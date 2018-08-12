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
      {nomeItem: 'Cocoricó ', descricaoItem: 'Todos os dias ás 10:40 AM', 
      imagemItem: './assets/carousel/cocorico1.jpg'},
      {nomeItem: 'Venha conheçer nossos personagens ', descricaoItem: 'Descrição', 
      imagemItem: './assets/carousel/cocorico2.jpg'},
      {nomeItem: 'Cocoricó na Tv Cultura ', descricaoItem: 'Descrição', 
      imagemItem: './assets/carousel/cocorico3.jpg'},
      {nomeItem: 'Imagem ', descricaoItem: 'Descrição', 
      imagemItem: './assets/carousel/cocorico4.jpg'}
    ]
  }

}
