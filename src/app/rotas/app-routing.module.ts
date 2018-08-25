import { SobreComponent } from './../telas/sobre/sobre.component';
import { VideosComponent } from './../telas/videos/videos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../telas/home/home.component';
import { MusicasComponent } from '../telas/musicas/musicas.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'episodios', component: VideosComponent },
  { path: 'musicas', component: MusicasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', component: HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
