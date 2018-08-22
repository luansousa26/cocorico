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
        id: 1, titulo: 'Já falei mais de mil vezes', descricao: 'teste.',
        youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      }
    ];
  }
  corrigirUrlYoutube(video) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.youtube}?ecver=2`);
  }
}
