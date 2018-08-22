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
        id: 1, titulo: 'Já falei mais de mil vezes', descricao: 'Zazá está sempre mal-humorada e fica implicandocom todo mundo. Cada vez que alguém faz uma coisa errada, ela diz: "já falei mais de mil vezes que não é para fazer isso!". Lilica, que quer sempre brincar, começa a brincar com isso e Zazá leva a sério.',
        youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      }
    ];
  }
  corrigirUrlYoutube(video) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.youtube}?ecver=2`);
  }
}
