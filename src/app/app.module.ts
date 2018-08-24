import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './layouts/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { PersonagensComponent } from './layouts/personagens/personagens.component';
import { NoticiasComponent } from './layouts/noticias/noticias.component';
import { DetalhadoComponent } from './layouts/personagens/detalhado/detalhado.component';
import { VideosComponent } from './telas/videos/videos.component';
import { AppRoutingModule } from './rotas/app-routing.module';
import { HomeComponent } from './telas/home/home.component';
import { FormsModule } from '@angular/forms';
import { MusicasComponent } from './telas/musicas/musicas.component';
import { SobreComponent } from './telas/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    PersonagensComponent,
    NoticiasComponent,
    DetalhadoComponent,
    VideosComponent,
    HomeComponent,
    MusicasComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [
    DetalhadoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
