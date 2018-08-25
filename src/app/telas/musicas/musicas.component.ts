import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Musicas } from './musicas.model';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.scss']
})
export class MusicasComponent implements OnInit {

  panelOpenState: boolean;
  musicas: Musicas[] = [];
  musicaAtual: String = '';
  musicasFiltradas: Musicas[] = [];
  paginaAnterior = 0;
  controlador = 7;
  musicasParaFiltro: Musicas[] = [];
  constructor(private sanitazer: DomSanitizer) { }

  ngOnInit() {
    this.musicas = [
      {
        // tslint:disable-next-line:max-line-length
        id: 1, titulo: 'A Avó a Bordar', descricao: 'A turma do paiol canta a música "A Avó a Bordar".', youtube: 'lLg8ClXv-Vs', icone: './assets/personagens/zaza.jpg', safeUrl: '', selected: false,
        // tslint:disable-next-line:max-line-length
        musica: '<p>Estava a Avó no seu lugar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p>'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 2, titulo: 'Sapo Martelo', descricao: 'A turma do paiol canta a música "Sapo Martelo".', youtube: 'XHn2x6-U_n8', icone: './assets/personagens/zaza.jpg', selected: false,
        // tslint:disable-next-line:max-line-length
        musica: '<p>Estava a Avó no seu lugar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p>'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 3, titulo: 'Vitamina Tutti-Frutti', descricao: 'A turma do paiol canta a música "Vitamina Tutti-Frutti".', youtube: 'pBcRClDj76w', icone: './assets/personagens/julio2.jpg', selected: false,
        // tslint:disable-next-line:max-line-length
        musica: '<p>Estava a Avó no seu lugar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p>'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 4, titulo: 'Tatu Bolinha', descricao: 'A turma do paiol canta a música "Tatu Bolinha".', youtube: 'ObVoirL1g2Y', icone: './assets/personagens/astolfo.jpg', selected: false,
        // tslint:disable-next-line:max-line-length
      musica: '<p>Estava a Avó no seu lugar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p>'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 5, titulo: 'Piquenique no Quintal', descricao: 'A turma do paiol canta a música "Piquenique no Quintal".', youtube: '3gnz4XkqmWI', icone: './assets/personagens/lola.jpg', selected: false,
      // tslint:disable-next-line:max-line-length
      musica: '<p>Estava a Avó no seu lugar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p>'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 6, titulo: 'Tu Tu Tu Tupi', descricao: 'A turma do paiol canta a música "Tu Tu Tu Tupi".', youtube: '1EMo-MeIKzQ', icone: './assets/personagens/oriba.jpg', selected: false,
        // tslint:disable-next-line:max-line-length
        musica: '<p>Estava a Avó no seu lugar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p>'
      }
    ];
    this.paginarMusicas(this.controlador);
    this.getSafeUrls();
  }

  getSafeUrls() {
    for (let i = 0 ; i < this.musicas.length; i++) {
      this.musicas[i].safeUrl = this.corrigirUrlYoutube(this.musicas[i]);
    }
  }
  corrigirUrlYoutube(musica) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${musica.youtube}?ecver=2`);
  }

  filtro() {
    this.musicasParaFiltro = JSON.parse(JSON.stringify(this.musicas));
    if (this.musicaAtual === '') {
        this.paginarMusicas(7);
    }
    if (this.musicaAtual.length > 1) {
      this.musicasFiltradas = this.filtrar(this.musicas);
      this.musicasParaFiltro = this.filtrar(this.musicas);
    }
  }
  filtrar(values) {
    return values.filter(musica => musica.titulo.toLowerCase().includes(this.musicaAtual));
  }
  opcaoSelecionada(musicaSelecionada) {
    for (const musica in this.musicas) {
      if (this.musicas[musica].titulo === musicaSelecionada.option.value) {
        this.musicasFiltradas = [this.musicas[musica]];
        break;
      }
    }
  }

  paginar(event: MatPaginator) {
    if (event !== undefined) {
      if (event.pageIndex < this.paginaAnterior) {
        this.controlador -= 7;
      } else {
        this.controlador += 7;
      }
      this.paginaAnterior = event.pageIndex;
    }
    this.paginarMusicas(this.controlador);
  }

  paginarMusicas(controlador: number) {
    let inicial = controlador - 7;
    let num = 0;
    this.musicasFiltradas = [];
    for (inicial; inicial < controlador; inicial++ , num++) {
      if (this.musicas[inicial] === undefined) {
        break;
      }
      this.musicasFiltradas[num] = this.musicas[inicial];
    }
  }

  selecionarMusica(musica: Musicas) {
    musica.selected = true;
  }

  desmarcarMusica(musica: Musicas) {
    musica.selected = false;
  }
}
