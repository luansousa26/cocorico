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
      },
      { // tslint:disable-next-line:max-line-length
        id: 2, titulo: 'Oras bolas!', descricao: 'Júlio ganha uma bola de seu avô. Fica feliz e vai brincar com o pessoal no quintal. Ele explica quais esportes podem ser praticados com os pés e quais podem ser praticados com as mãos.',
        youtube: 'Jpz6Um2Dme0'
      },

      { // tslint:disable-next-line:max-line-length
        id: 3, titulo: 'Altos e baixos', descricao: 'Júlio fica triste porque foi chamado de baixinho na escola. Por causa disso, quer ser mais alto do que os outros e acaba tratando mal os baixinhos da Fazenda.',
        youtube: '7UGa5I0ItJA'
      },

      {  // tslint:disable-next-line:max-line-length
        id: 4, titulo: 'A varinha de condão', descricao: 'Lilica encontra uma varinha de condão que pertencia a uma priminha do Júlio. Mas acha que a varinha é mágica mesmo, porque quando pede para o Júlio aparecer ele chega no Paiol. Dito e Feito ambicionam a varinha e chegam a roubá-la, mas depois ficam assustados com os possíveis poderes dela. E então, a devolvem e ela volta a cair na mão da turma do Paiol. Uma série de coincidências espantosas deixa na dúvida se o objeto é mesmo encantado ou não.',
        youtube: 'eWA3MnOxvQU'
      },

      { // tslint:disable-next-line:max-line-length
        id: 5, titulo: 'Palavras difíceis', descricao: 'Zazá vai contar uma história para Caco, Alípio e Lilica, mas é interrompida a todo momento porque eles querem saber o significado de algumas palavras difíceis.',
        youtube: '5_rRKqIz0Zc'
      },

      { // tslint:disable-next-line:max-line-length
        id: 6, titulo: 'Que conto é esse?', descricao: 'A galera do Paiol quer brincar de teatro, mas cada um quer ser o herói de uma história. Então, brigam, pois qual história farão? E resolvem fazer uma nova história que tenha o personagem de cada um. Assim é feito!',
        youtube: 'SM0GZadmTUc'
      },
      { // tslint:disable-next-line:max-line-length
        id: 7, titulo: 'Férias de verão', descricao: 'Férias de verão. Nada para fazer e o dia todo para brincar. Júlio e os amigos inventam várias brincadeiras e Júlio ensina um jogo que aprendeu na escola com músicas tradicionais do nosso folclore.',
        youtube: 'raW5KC97SbY'
      },
      { // tslint:disable-next-line:max-line-length
        id: 8, titulo: 'Sonhos', descricao: 'Júlio tem um sonho estranho e conta para a turma do paiol. Todos passam a conversar sobre seus sonhos e cada um conta os seus, que são dramatizados.',
        youtube: 'KKkZHWFe6LY'
      },
      { // tslint:disable-next-line:max-line-length
        id: 9, titulo: 'Sumiço do diário', descricao: 'Júlio perdeu seu diário e a turma da fazenda fez uma retrospectiva dos eventos a partir da última vez que viram o diário.',
        youtube: 'pXb2X9gDzII'
      },
      { // tslint:disable-next-line:max-line-length
        id: 10, titulo: 'Apareceu o Aparício', descricao: 'Júlio recebe a visita do amigo Aparício, que tem medo de andar a cavalo. Mas com ajuda do Alípio ele perde o medo, mas Alípio é que, por sua vez, fica com medo de sair da fazenda.',
        youtube: 'r5khCTgV55s'
      },
      { // tslint:disable-next-line:max-line-length
        id: 11, titulo: 'Cocoricócegas', descricao: 'Toquinho não ri de nenhuma piada. Por isso, Júlio e Lilica resolvem fazer cócegas para que ele dê risada, mas Toquinho fica muito bravo com as cócegas.',
        youtube: 'V_8OT7wewoA'
      },
      { // tslint:disable-next-line:max-line-length
        id: 12, titulo: 'Já pra cama', descricao: 'Júlio não gosta da ideia de ter hora para dormir. No paiol, Lilica também quer brincar até mais tarde. E aí um dia, os dois têm a chance de brincar até a hora que querem. No dia seguinte, ficam exaustos e entendem que precisam descansar bastante durante a noite para aguentar a correria do dia.',
        youtube: 'Y2YJw5_fW6w'
      },
      { // tslint:disable-next-line:max-line-length
        id: 13, titulo: 'Terra molhada', descricao: 'Chove lá fora e no paiol as galinhas tentam dormir. Quando amanhece Júlio e Lilica estão felizes, porque o dia está lindo. Lola e Zazá nem tanto, porque as roupas do varal estão com manchas.Júlio começa a investigação e dá uma solução para o caso.',
        youtube: 'vFZPysQo0zU'
      },
    ];
  }

  corrigirUrlYoutube(video) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.youtube}?ecver=2`);
  }
}
