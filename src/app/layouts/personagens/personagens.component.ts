import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '../../../../node_modules/@angular/material';
import { DetalhadoComponent } from './detalhado/detalhado.component';
import { Personagens } from './personagens.model';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  personagens: Personagens[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.personagens = [
      {
        // tslint:disable-next-line:max-line-length
        id: 1, nomePersonagem: 'Alípio ', descricaoPersonagem: ' Um cavalo caipira que é o melhor amigo de Júlio. Ele trabalha na fazenda puxando carroça junto do Vô, embora já tenha sido mencionado haver um suposto vaqueiro Leonardo na fazenda. É comilão, preguiçoso, desajeitado e adora comer milho. Sempre visita Júlio a noite quando ele está escrevendo em seu diário, muitas vezes batendo a cabeça na janela do quarto. Já foi revelado que ele possui uma namorada chamada Fifi de uma fazenda vizinha e um primo chamado Palito que mora na cidade, mas ambos também nunca foram mostrados. Embora ele constantemente seja visto brincando com as crianças da fazenda, a idade dele nunca foi revelada.', imagemPersonagem: './assets/personagens/alipio2.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 2, nomePersonagem: 'Júlio ', descricaoPersonagem: 'É o principal protagonista da série. Ele é um menino de 8 anos que mora com seus avós na Fazenda Cocoricó e está sempre disposto a brincar com seus amigos da fazenda. Adora tocar gaita e seu principal bordão é "Puxa, puxa que puxa!". Ele é um menino bom, e sempre ajuda seus amigos e avós na fazenda. Tem como melhores amigos Alípio, Lilica e Caco, até a temporada de 2007 quando passou a interagir mais com seu primo João. Seus pais nunca foram revelados ou mencionados no programa fazendo ele parecer ser órfão, embora sua mãe se chame Yuni. Ainda no começo da fase de 2003, ele era visto frequentando a escola e escrevendo suas aventuras no diário a noite antes de dormir. Na fase da Cidade ele demonstra um amor pela Vitória, apesar da Oriba também gostar dele.', imagemPersonagem: './assets/personagens/julio2.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 3, nomePersonagem: 'Caco ', descricaoPersonagem: 'Um pequeno papagaio, melhor amigo de Lilica. Caco é um papagaio muito brincalhão, mas muito teimoso que vive implicando com Lilica, mas mesmo assim gosta dela. Muitas vezes, chega a incomodar seus amigos com suas piadinhas, mas nunca faz por mal. Assim como Lilica, ele tem 6 anos.', imagemPersonagem: './assets/personagens/caco.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 4, nomePersonagem: 'Lilíca ', descricaoPersonagem: 'É a galinha mais nova da fazenda amiga de Júlio. Muito curiosa, ingênua e brincalhona sempre tenta fazer as coisas sem pensar e muitas vezes acaba se metendo em confusões. Lilica é cuidada por Lola e Zazá, as duas galinhas mais velhas da fazenda que muitas vezes tem de aturar suas travessuras. Seu melhor amigo no paiol é o Caco, embora muitas vezes os dois briguem por motivos bobos. Sempre é vista com um lacinho azul na crista e um colar no pescoço. Ela tem 6 anos. Na primeira versão ela era originalmente chamada de Doralice.', imagemPersonagem: './assets/personagens/lilica.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 5, nomePersonagem: 'Zazá ', descricaoPersonagem: ' A mais velha das galinhas. Meio nervosa e rabugenta ela é a principal responsável por Lilica. Zazá muitas vezes perde a paciência e se irrita facilmente com o pessoal da fazenda (principalmente com Lilica), mas mesmo assim tem um bom coração. É a melhor amiga da Lola, da qual a conhece desde que eram mais novas. É sempre vista com um par de óculos', imagemPersonagem: './assets/personagens/zaza.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 6, nomePersonagem: 'Lola ', descricaoPersonagem: 'Uma galinha da fazenda bastante sábia e esperta. Por sua esperteza, ela sempre ensina coisas novas pro pessoal da fazenda. No passado Lola já foi uma artista de circo e chegou a viajar pelo mundo todo. Ela também se destaca por ser a que melhor canta na fazenda. Sua melhor amiga é a Zazá, conhecendo ela desde a juventude. Ela sempre anda com um chapéu rosa.', imagemPersonagem: './assets/personagens/lola.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 7, nomePersonagem: 'Mimosa ', descricaoPersonagem: '- É uma vaca azul gentil e doce, que está sempre correndo para ajudar alguém e resolver os problemas. Mimosa gosta muito de contar histórias para entreter Caco e Lilica.', imagemPersonagem: './assets/personagens/mimosa.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 8, nomePersonagem: 'Astolfo ', descricaoPersonagem: 'Porquinho Astolfo', imagemPersonagem: './assets/personagens/astolfo.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 9, nomePersonagem: 'Toquinho ', descricaoPersonagem: 'Morcego Toquinho',
        imagemPersonagem: './assets/personagens/toquinho.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 10, nomePersonagem: 'Oriba ', descricaoPersonagem: 'India Oriba',
        imagemPersonagem: './assets/personagens/oriba.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 11, nomePersonagem: 'Dito e Feito ', descricaoPersonagem: 'Dito e Feito',
        imagemPersonagem: './assets/personagens/ditoefeito.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 12, nomePersonagem: 'Avô e Avó ', descricaoPersonagem: 'Avô e Avó', imagemPersonagem: './assets/personagens/avoeavo.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 13, nomePersonagem: 'João', descricaoPersonagem: 'João', imagemPersonagem: './assets/personagens/joao.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 14, nomePersonagem: 'Pata Vina', descricaoPersonagem: 'Pata Vina', imagemPersonagem: './assets/personagens/pata-vina.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 15, nomePersonagem: 'Pato Torquato', descricaoPersonagem: 'Pato Torquato',
        imagemPersonagem: './assets/personagens/pato-torquato.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 16, nomePersonagem: 'Rodolfo', descricaoPersonagem: 'Rodolfo', imagemPersonagem: './assets/personagens/rodolfo.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 17, nomePersonagem: 'Sapo Martelo', descricaoPersonagem: 'Sapo Martelo',
        imagemPersonagem: './assets/personagens/sapo-martelo.jpg'
      }
    ];
  }
  selecionarPersonagem(personagem: Object) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dados: personagem
    };
    this.dialog.open(DetalhadoComponent, dialogConfig);
  }
}
