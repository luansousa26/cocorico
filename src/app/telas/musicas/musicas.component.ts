import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.scss']
})
export class MusicasComponent implements OnInit {

  panelOpenState: boolean;
  musicas: any;
  constructor(private sanitazer: DomSanitizer) { }

  ngOnInit() {
    this.musicas = [
      {
        // tslint:disable-next-line:max-line-length
        id: 1, titulo: 'A Avó a Bordar', descricao: 'A turma do paiol canta a música "A Avó a Bordar".', youtube: 'lLg8ClXv-Vs', icone: './assets/personagens/zaza.jpg', safeUrl: '',
        // tslint:disable-next-line:max-line-length
        musica: '<p>Estava a Avó no seu lugar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p><p>veio a mosca lhe cutucar.</p>'
      },
     /* {
        // tslint:disable-next-line:max-line-length
        id: 2, titulo: 'Já falei mais de mil vezes', descricao: 'teste.', youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 3, titulo: 'Já falei mais de mil vezes', descricao: 'teste.', youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 4, titulo: 'Já falei mais de mil vezes', descricao: 'teste.', youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 5, titulo: 'Já falei mais de mil vezes', descricao: 'teste.', youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 6, titulo: 'Já falei mais de mil vezes', descricao: 'teste.', youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      }*/
    ];
  }
  corrigirUrlYoutube(video) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.youtube}?ecver=2`);
  }
}
