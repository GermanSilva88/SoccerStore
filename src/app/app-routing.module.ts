import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerstoreSoccerwearComponent } from './soccerstore-soccerwear/soccerstore-soccerwear.component';
import { SoccerstoreAboutComponent } from './soccerstore-about/soccerstore-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'soccerwear',
    pathMatch: 'full'
  },
  {
    path: 'soccerwear',
    component: SoccerstoreSoccerwearComponent
  },
  {
    path: 'about',
    component: SoccerstoreAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
