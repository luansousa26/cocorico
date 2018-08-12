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
      { nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/cat.jpg' },
      { nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/cat2.jpg' },
      { nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/cat3.jpg' },
      { nomeItem: 'Imagem ', descricaoItem: 'Descrição', imagemItem: './assets/cat4.jpg' }
    ]
  }

}
