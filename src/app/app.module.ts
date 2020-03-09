import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscritEtudiantComponent } from './inscrit-etudiant/inscrit-etudiant.component';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { SectionComponent } from './section/section.component';
import { VideosComponent } from './videos/videos.component';
import { CoursVideoComponent } from './cours-video/cours-video.component';
import { CommenttaireComponent } from './commenttaire/commenttaire.component';
import { AppGuideComponent } from './app-guide/app-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    InscritEtudiantComponent,
    ListCoursComponent,
    SectionComponent,
    VideosComponent,
    CoursVideoComponent,
    CommenttaireComponent,
    AppGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
