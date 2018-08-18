import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any[] = [];
  constructor() { }

  ngOnInit() {
    this.noticias = [
      { id: 1, titulo: 'Show do Cocoricó', descricao: 'Novo show do Cocoricó.', imagem: 'assets/noticias/noticia1.jpg' },
      { id: 2, titulo: 'Novos Episódios', descricao: 'Novos episódios saindo do forno.', imagem: 'assets/noticias/noticia1.jpg' }
    ];
  }

}
