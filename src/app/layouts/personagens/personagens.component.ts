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
        id: 7, nomePersonagem: 'Mimosa ', descricaoPersonagem: 'É uma vaca azul gentil e doce, que está sempre correndo para ajudar alguém e resolver os problemas. Mimosa gosta muito de contar histórias para entreter Caco e Lilica.', imagemPersonagem: './assets/personagens/mimosa.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 8, nomePersonagem: 'Astolfo ', descricaoPersonagem: 'É um porquinho bebê muito ingênuo e manhoso. Apesar de ser um bebê, é capaz de falar e se interagir com os demais personagens. Surgiu a partir da fase de 2003, desde então mostrando muita importância no programa. É frequentemente mimado pela mãe, a mesma cujo rosto nunca é mostrado, apenas as mãos e quase sempre fica em seu berço no chiqueiro da fazenda. Muitas vezes é visto chorando, na maioria das vezes por motivos desnecessários.', imagemPersonagem: './assets/personagens/astolfo.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 9, nomePersonagem: 'Toquinho ', descricaoPersonagem: 'É um morcego amigo do pessoal do Paiol. É muito nervoso e pessimista, sempre achando que as coisas vão dar errado e reclamando assustado com tudo o que acontece na fazenda. É banguela, tendo apenas uma presa saindo da boca. Depois da temporada de 2007 passou a aparecer com mais frequência e a ter um bordão: "Eu sabia que isso não vai dar certo", muitas vezes irritando seus amigos com seus exageros pessimistas. Ele é um morcego frutífero.',
        imagemPersonagem: './assets/personagens/toquinho.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 10, nomePersonagem: 'Oriba ', descricaoPersonagem: 'Uma índia amiga de Júlio e seus amigos. Ela conheceu a turma enquanto procurava encontrar um chocalho pertencente a sua tribo tendo a princípio brigado com Júlio, mas depois se tornado amiga dele. Mora numa aldeia próxima a fazenda, uma vez dita como a dos tupis-guaranis, porém nunca foi mostrada no programa, assim como seus pais e outros integrantes da tribo. Ela demonstra uma relação amistosa com Júlio embora frequentemente brigue com ele, mas no fundo possui uma leve paixão por ele, tanto que demonstra ciúmes em relação a Vitória na fase da Cidade. Ela estuda na mesma escola que o Júlio.',
        imagemPersonagem: './assets/personagens/oriba.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 11, nomePersonagem: 'Dito e Feito ', descricaoPersonagem: ' Uma dupla encrenqueira que sempre arma confusão na fazenda. Feito é o chefe por trás dos planos enquanto que Dito é o ajudante atrapalhado de Feito a quem ele sempre chama de "bobalhão", embora são raras as ocasiões que Feito chama de Dito. Na verdade, quem sempre tem as boas ideias é Dito, porém Feito sempre faz ele pensar que suas ideias são dele, mas no final é Feito quem sempre acaba se saindo mal. Os dois são os únicos da série que não são bichos definidos, embora Dito se aparente com um macaco e Feito com um roedor. Depois da temporada de 2007 eles passaram a ajudar Torquato em seus planos contra o paiol.',
        imagemPersonagem: './assets/personagens/ditoefeito.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 12, nomePersonagem: 'Avô e Avó ', descricaoPersonagem: 'São os avós de Júlio, João e Rodolfo. A Vó já trabalhou como professora, mas agora trabalha como doceira vendendo doces para a cidade, enquanto que o Vô trabalha como agricultor da fazenda e cuida dos animais. Eles nunca tiveram seus nomes mencionados no programa. São pais de Dora (e possivelmente de um dos pais de Júlio, mais precisamente da mãe de Júlio) e sogros de Noel.', imagemPersonagem: './assets/personagens/avoeavo.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 13, nomePersonagem: 'João', descricaoPersonagem: '- É o primo de Júlio todo moderninho e cheio de gírias. Ele mora na cidade grande junto de sua família, passando as férias na fazenda. É introduzido no final da segunda fase, desde então passando a ser o melhor amigo de Júlio fazendo tudo junto dele. No começo foi apresentado como um garoto obcecado pela cultura hip hop com pensamentos científicos, cantando rap e dançando break. Mais adiante ele também demonstra um fascínio por tecnologia. A partir da fase da Cidade, ele abandona essas características e passa a ser mostrado um garoto normal.', imagemPersonagem: './assets/personagens/joao.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 14, nomePersonagem: 'Pata Vina', descricaoPersonagem: ' É uma pata arrogante e mandona que adora dar ordens a seu marido, o Pato Torquato. Ela também é cozinheira e sempre gosta de ser o centro das atenções de tudo cabendo a forçar seu marido Torquato a armar planos contra o pessoal do Paiol por isso. Frequentemente fala com os Qs carregados assim como Torquato.', imagemPersonagem: './assets/personagens/pata-vina.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 15, nomePersonagem: 'Pato Torquato', descricaoPersonagem: 'Um pato muito encrenqueiro, é marido da Pata Vina. Antes de se casar já havia feito umas aparições antes incomodando o pessoal do Paiol. Após seu casamento com a Vina ele se torna um personagem fixo, passando a ser visto incomodando o pessoal da fazenda com maior frequência e manipulando Dito e Feito como seus cúmplices. Sempre se apresenta falando "Pato Torquato, o seu amigo de fato", além de falar os Qs sobrecarregados.',
        imagemPersonagem: './assets/personagens/pato-torquato.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 16, nomePersonagem: 'Rodolfo', descricaoPersonagem: 'O irmão caçula de João.', imagemPersonagem: './assets/personagens/rodolfo.jpg'
      },
      { // tslint:disable-next-line:max-line-length
        id: 17, nomePersonagem: 'Sapo Martelo', descricaoPersonagem: 'Um pequeno sapo que mora numa lagoa ao lado da casa de Torquato e Vina. Ele não come insetos preferindo comer doces, inclusive tendo uma mosca amiga chamada Zac Zac que conversa com ele. Ele se torna um grade amigo da Lilica. É introduzido no final da segunda fase em 2007.',
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
