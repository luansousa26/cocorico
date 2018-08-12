import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  itensCarousel: any[] = [];
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
