import { Component, OnInit } from '@angular/core';
import { Videos } from './videos.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Videos[] = [];
  videosFiltrados: Videos[] = [];
  episodioAtual: String = '';
  controlador = 10;
  paginaAnterior = 0;
  constructor(private sanitazer: DomSanitizer) { }

  ngOnInit() {
    this.videos = [
      {
        // tslint:disable-next-line:max-line-length
        id: 1, titulo: 'Já falei mais de mil vezes', descricao: 'Zazá está sempre mal-humorada e fica implicandocom todo mundo. Cada vez que alguém faz uma coisa errada, ela diz: "já falei mais de mil vezes que não é para fazer isso!". Lilica, que quer sempre brincar, começa a brincar com isso e Zazá leva a sério.',
        youtube: 'IbnedIp7jPc', icone: './assets/personagens/zaza.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 2, titulo: 'Oras bolas!', descricao: 'Júlio ganha uma bola de seu avô. Fica feliz e vai brincar com o pessoal no quintal. Ele explica quais esportes podem ser praticados com os pés e quais podem ser praticados com as mãos.',
        youtube: 'Jpz6Um2Dme0', icone: './assets/personagens/julio2.jpg'
      },

      { // tslint:disable-next-line:max-line-length
        id: 3, titulo: 'Altos e baixos', descricao: 'Júlio fica triste porque foi chamado de baixinho na escola. Por causa disso, quer ser mais alto do que os outros e acaba tratando mal os baixinhos da Fazenda.',
        youtube: '7UGa5I0ItJA', icone: './assets/personagens/julio2.jpg'
      },

      {  // tslint:disable-next-line:max-line-length
        id: 4, titulo: 'A varinha de condão', descricao: 'Lilica encontra uma varinha de condão que pertencia a uma priminha do Júlio. Mas acha que a varinha é mágica mesmo, porque quando pede para o Júlio aparecer ele chega no Paiol. Dito e Feito ambicionam a varinha e chegam a roubá-la, mas depois ficam assustados com os possíveis poderes dela. E então, a devolvem e ela volta a cair na mão da turma do Paiol. Uma série de coincidências espantosas deixa na dúvida se o objeto é mesmo encantado ou não.',
        youtube: 'eWA3MnOxvQU', icone: './assets/personagens/lilica.jpg'
      },

      { // tslint:disable-next-line:max-line-length
        id: 5, titulo: 'Palavras difíceis', descricao: 'Zazá vai contar uma história para Caco, Alípio e Lilica, mas é interrompida a todo momento porque eles querem saber o significado de algumas palavras difíceis.',
        youtube: '5_rRKqIz0Zc', icone: './assets/personagens/zaza.jpg'
      },

      { // tslint:disable-next-line:max-line-length
        id: 6, titulo: 'Que conto é esse?', descricao: 'A galera do Paiol quer brincar de teatro, mas cada um quer ser o herói de uma história. Então, brigam, pois qual história farão? E resolvem fazer uma nova história que tenha o personagem de cada um. Assim é feito!',
        youtube: 'SM0GZadmTUc', icone: 'assets/icones/tv-cultura.gif'
      },
      { // tslint:disable-next-line:max-line-length
        id: 7, titulo: 'Férias de verão', descricao: 'Férias de verão. Nada para fazer e o dia todo para brincar. Júlio e os amigos inventam várias brincadeiras e Júlio ensina um jogo que aprendeu na escola com músicas tradicionais do nosso folclore.',
        youtube: 'raW5KC97SbY', icone: './assets/personagens/julio2.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 8, titulo: 'Sonhos', descricao: 'Júlio tem um sonho estranho e conta para a turma do paiol. Todos passam a conversar sobre seus sonhos e cada um conta os seus, que são dramatizados.',
        youtube: 'KKkZHWFe6LY', icone: './assets/personagens/julio2.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 9, titulo: 'Sumiço do diário', descricao: 'Júlio perdeu seu diário e a turma da fazenda fez uma retrospectiva dos eventos a partir da última vez que viram o diário.',
        youtube: 'pXb2X9gDzII', icone: './assets/personagens/julio2.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 10, titulo: 'Apareceu o Aparício', descricao: 'Júlio recebe a visita do amigo Aparício, que tem medo de andar a cavalo. Mas com ajuda do Alípio ele perde o medo, mas Alípio é que, por sua vez, fica com medo de sair da fazenda.',
        youtube: 'r5khCTgV55s', icone: './assets/personagens/julio2.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 11, titulo: 'Cocoricócegas', descricao: 'Toquinho não ri de nenhuma piada. Por isso, Júlio e Lilica resolvem fazer cócegas para que ele dê risada, mas Toquinho fica muito bravo com as cócegas.',
        youtube: 'V_8OT7wewoA', icone: './assets/personagens/toquinho.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 12, titulo: 'Já pra cama', descricao: 'Júlio não gosta da ideia de ter hora para dormir. No paiol, Lilica também quer brincar até mais tarde. E aí um dia, os dois têm a chance de brincar até a hora que querem. No dia seguinte, ficam exaustos e entendem que precisam descansar bastante durante a noite para aguentar a correria do dia.',
        youtube: 'Y2YJw5_fW6w', icone: './assets/personagens/julio2.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 13, titulo: 'Terra molhada', descricao: 'Chove lá fora e no paiol as galinhas tentam dormir. Quando amanhece Júlio e Lilica estão felizes, porque o dia está lindo. Lola e Zazá nem tanto, porque as roupas do varal estão com manchas.Júlio começa a investigação e dá uma solução para o caso.',
        youtube: 'vFZPysQo0zU', icone: './assets/personagens/lola.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 14, titulo: 'O acampamento', descricao: 'Júlio e Oriba acampam no quintal. Oriba conta uma história e Dito e Feito resolvem pregar um susto neles, e acabam entrando para a história.',
        youtube: 'oMElNCpr2sk', icone: './assets/personagens/oriba.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 15, titulo: 'Doença e vacina', descricao: 'Júlio fica sabendo que Astolfinho está feliz porque vai tomar vacina. Ele fica admirado porque aprendeu com o porquinho que dia de vacinação é dia de festa! Pois é ,todos os dias a turminha aprende muitas coisas novas no paiol. Por exemplo, Lilica e Tuquinho aprenderam brincar de "quente ou frio".',
        youtube: 'dF5XBTawwIo', icone: './assets/personagens/astolfo.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 16, titulo: 'Visão', descricao: 'Quando Júlio chega no paiol, ele pergunta se a Zazá viu os seus amigos. Ela disse que não viu ninguém porque perdeu os óculos. Logo hoje que o nosso amigo Júlio quer mostrar o auto-retrato que ele acaba de fazer! Aliás, parece que todos estão com problemas de visão no paiol. O pior é que ninguém dá atenção para o desenho do Júlio. Mas felizmente a pequena Lilica chega e tudo se resolve.',
        youtube: '9KmqUK7Ru5Y', icone: './assets/personagens/zaza.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 17, titulo: 'Vaca', descricao: 'Enquanto brincam de caminhãozinho, Júlio e Oriba pensam ser caminhoneiros de verdade. Oriba encontrou o caminhãozinho no paiol, mas ele é do Caco. Depois da escola, o Júlio brinca um pouco de adivinhar com seus amiguinhos e sai bem rápido para não perder seu programa favorito na TV.',
        youtube: 'YWhNfscegU8', icone: './assets/personagens/oriba.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 18, titulo: 'Diferenças', descricao: 'Hoje a bicharada vai conhecer um amigão do Júlio. O nome dele é Mauro e ele também vai se divertir muito com os bichos da fazenda Cocoricó. Durante as brincadeiras, nossa turminha fica sabendo porque Mauro usa uma bengala para caminhar e porque ele escreve com uma caneta diferente num caderno também diferente.',
        youtube: 'Q8JDIzkc5hQ', icone: './assets/personagens/alipio.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 19, titulo: 'E se...', descricao: 'Caco chega no paiol logo cedo e não encontra ninguém. O estranho é que algumas vozes começam a desafiar o pequeno papagaio. Felizmente, o Júlio chega e juntos eles descobrem que está acontecendo uma revolta de frutas. Lola preparou bolinhos cheirosos para as crianças. Ela e Zazá pensam que o cheiro vai atrair as crianças para o paiol, mas quem aparece é o Dito e Feito... Adivinhe só o que acontece!',
        youtube: 'dMGLS996e70', icone: './assets/personagens/caco.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 20, titulo: 'Medo do escuro', descricao: 'Lilica, Caco e Lola resolvem ficar acampados no quintal. Quando a noite chega eles percebem que acamparam numa noite sem lua. Com tanta escuridão eles têm medo e nem conseguem curtir o acampamento, mas Lola encontra a solução...',
        youtube: 'F5pNWvTgFlI', icone: './assets/personagens/lilica.jpg'
      },
    ];
    this.paginarVideos(this.controlador);
  }

  corrigirUrlYoutube(video) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.youtube}?ecver=2`);
  }
  filtro() {
    this.videosFiltrados = JSON.parse(JSON.stringify(this.videos));
    this.videosFiltrados = this.filtrar(this.videos);
    if (this.episodioAtual === '') {
      this.paginarVideos(10);
    }
  }
  filtrar(values) {
    return values.filter(episodio => episodio.titulo.toLowerCase().includes(this.episodioAtual));
  }
  opcaoSelecionada(videoSelecionado) {
    for (const video in this.videos) {
      if (this.videos[video].titulo === videoSelecionado.option.value) {
        this.videosFiltrados = [this.videos[video]];
        break;
      }
    }
  }
  paginar(event: MatPaginator) {
    if (event !== undefined) {
      if (event.pageIndex < this.paginaAnterior) {
        this.controlador -= 10;
      } else {
        this.controlador += 10;
      }
      this.paginaAnterior = event.pageIndex;
    }
    this.paginarVideos(this.controlador);
  }

  paginarVideos(controlador: number) {
    let inicial = controlador - 10;
    let num = 0;
    this.videosFiltrados = [];
    for (inicial; inicial < controlador; inicial++ , num++) {
      this.videosFiltrados[num] = this.videos[inicial];
    }
  }
}
