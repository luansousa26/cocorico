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
      {nomePersonagem: 'Alípio ', descricaoPersonagem: 'Cavalo Alípio', imagemPersonagem: './assets/personagens/alipio2.jpg'},
      {nomePersonagem: 'Júlio ', descricaoPersonagem: 'Júlio', imagemPersonagem: './assets/personagens/julio2.jpg'},
      {nomePersonagem: 'Caco ', descricaoPersonagem: 'Caco', imagemPersonagem: './assets/personagens/caco.jpg'},
      {nomePersonagem: 'Lilíca ', descricaoPersonagem: 'Lilíca', imagemPersonagem: './assets/personagens/lilica.jpg'},
      {nomePersonagem: 'Zazá ', descricaoPersonagem: 'Zazá', imagemPersonagem: './assets/personagens/zaza.jpg'},
      {nomePersonagem: 'Lola ', descricaoPersonagem: 'Lola', imagemPersonagem: './assets/personagens/lola.jpg'},
      {nomePersonagem: 'Mimosa ', descricaoPersonagem: 'Vaca Mimosa', imagemPersonagem: './assets/personagens/mimosa.jpg'},
      {nomePersonagem: 'Astolfo ', descricaoPersonagem: 'Porquinho Astolfo', imagemPersonagem: './assets/personagens/astolfo.jpg'},
      {nomePersonagem: 'Toquinho ', descricaoPersonagem: 'Morcego Toquinho', imagemPersonagem: './assets/personagens/toquinho.jpg'},
      {nomePersonagem: 'Oriba ', descricaoPersonagem: 'India Oriba', imagemPersonagem: './assets/personagens/oriba.jpg'},
      {nomePersonagem: 'Dito e Feito ', descricaoPersonagem: 'Dito e Feito', imagemPersonagem: './assets/personagens/ditoefeito.jpg'},
      {nomePersonagem: 'Avô e Avó ', descricaoPersonagem: 'Avô e Avó', imagemPersonagem: './assets/personagens/avoeavo.jpg'},
      {nomePersonagem: 'João', descricaoPersonagem: 'João', imagemPersonagem: './assets/personagens/joao.jpg'},
      {nomePersonagem: 'Pata Vina', descricaoPersonagem: 'Pata Vina', imagemPersonagem: './assets/personagens/pata-vina.jpg'},
      {nomePersonagem: 'Pato Torquato', descricaoPersonagem: 'Pato Torquato', imagemPersonagem: './assets/personagens/pato-torquato.jpg'},
      {nomePersonagem: 'Rodolfo', descricaoPersonagem: 'Rodolfo', imagemPersonagem: './assets/personagens/rodolfo.jpg'},
      {nomePersonagem: 'Sapo Martelo', descricaoPersonagem: 'Sapo Martelo', imagemPersonagem: './assets/personagens/sapo-martelo.jpg'}
    ]
  }

}
