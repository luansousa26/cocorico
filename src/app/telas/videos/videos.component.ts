import { Component, OnInit } from '@angular/core';
import { Videos } from './videos.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Videos[] = [];
  constructor(private sanitazer: DomSanitizer) { }

  ngOnInit() {
    this.videos = [
      {
        // tslint:disable-next-line:max-line-length
        id: 1, titulo: 'Já falei mais de mil vezes', descricao: 'Zazá está sempre mal-humorada e fica implicandocom todo mundo. Cada vez que alguém faz uma coisa errada, ela diz: "já falei mais de mil vezes que não é para fazer isso!". Lilica, que quer sempre brincar, começa a brincar com isso e Zazá leva a sério.',
        youtube: 'IbnedIp7jPc'
      }];
  }

  corrigirUrlYoutube(video) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.youtube}?ecver=2`);
  }
}
