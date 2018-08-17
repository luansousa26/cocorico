import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  personagens: any[] = [];
  constructor() { }

  ngOnInit() {
    this.personagens = [
      { id: 1, nomePersonagem: 'Alípio ', descricaoPersonagem: 'Cavalo Alípio', imagemPersonagem: './assets/personagens/alipio2.jpg'},
      {id: 2, nomePersonagem: 'Júlio ', descricaoPersonagem: 'Júlio', imagemPersonagem: './assets/personagens/julio2.jpg'},
      {id: 3, nomePersonagem: 'Caco ', descricaoPersonagem: 'Caco', imagemPersonagem: './assets/personagens/caco.jpg'},
      {id: 4, nomePersonagem: 'Lilíca ', descricaoPersonagem: 'Lilíca', imagemPersonagem: './assets/personagens/lilica.jpg'},
      {id: 5, nomePersonagem: 'Zazá ', descricaoPersonagem: 'Zazá', imagemPersonagem: './assets/personagens/zaza.jpg'},
      {id: 6, nomePersonagem: 'Lola ', descricaoPersonagem: 'Lola', imagemPersonagem: './assets/personagens/lola.jpg'},
      {id: 7, nomePersonagem: 'Mimosa ', descricaoPersonagem: 'Vaca Mimosa', imagemPersonagem: './assets/personagens/mimosa.jpg'},
      {id: 8, nomePersonagem: 'Astolfo ', descricaoPersonagem: 'Porquinho Astolfo', imagemPersonagem: './assets/personagens/astolfo.jpg'},
      {id: 9, nomePersonagem: 'Toquinho ', descricaoPersonagem: 'Morcego Toquinho', imagemPersonagem: './assets/personagens/toquinho.jpg'},
      {id: 10, nomePersonagem: 'Oriba ', descricaoPersonagem: 'India Oriba', imagemPersonagem: './assets/personagens/oriba.jpg'},
      {id: 11, nomePersonagem: 'Dito e Feito ', descricaoPersonagem: 'Dito e Feito', imagemPersonagem: './assets/personagens/ditoefeito.jpg'},
      {id: 12, nomePersonagem: 'Avô e Avó ', descricaoPersonagem: 'Avô e Avó', imagemPersonagem: './assets/personagens/avoeavo.jpg'},
      {id: 13, nomePersonagem: 'João', descricaoPersonagem: 'João', imagemPersonagem: './assets/personagens/joao.jpg'},
      {id: 14, nomePersonagem: 'Pata Vina', descricaoPersonagem: 'Pata Vina', imagemPersonagem: './assets/personagens/pata-vina.jpg'},
      {id: 15, nomePersonagem: 'Pato Torquato', descricaoPersonagem: 'Pato Torquato', imagemPersonagem: './assets/personagens/pato-torquato.jpg'},
      {id: 16, nomePersonagem: 'Rodolfo', descricaoPersonagem: 'Rodolfo', imagemPersonagem: './assets/personagens/rodolfo.jpg'},
      {id: 17, nomePersonagem: 'Sapo Martelo', descricaoPersonagem: 'Sapo Martelo', imagemPersonagem: './assets/personagens/sapo-martelo.jpg'}
    ]
  }

}
