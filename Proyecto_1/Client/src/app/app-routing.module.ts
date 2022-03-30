import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component'
import { AdministradoresComponent } from './components/administradores/administradores.component'
import { DesarrolladoresComponent } from './components/desarrolladores/desarrolladores.component'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'administradores',
    component: AdministradoresComponent
  },
  {
    path: 'desarrolladores',
    component: DesarrolladoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
