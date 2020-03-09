import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { InscritEtudiantComponent } from './inscrit-etudiant/inscrit-etudiant.component';
import { SectionComponent } from './section/section.component';
import {VideosComponent} from './videos/videos.component';
import { CoursVideoComponent } from './cours-video/cours-video.component';
import { AppGuideComponent } from './app-guide/app-guide.component';


const routes: Routes = [{ path: '', redirectTo: 'App', pathMatch: 'full' },
{ path: 'Login', component: InscritEtudiantComponent },
{ path:'Cours', component: ListCoursComponent },
{ path:'Vidéos', component: VideosComponent },
{ path:'CoursVidéos', component: CoursVideoComponent },
{ path:'AppGuid', component: AppGuideComponent },
{ path:'sections', component: SectionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
