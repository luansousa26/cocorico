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
      { id: 1, titulo: 'Show do Cocoricó', descricao: 'Novo show do Cocoricó.', imagem: 'assets/noticias/tvcultura.png' }];
  }

}
