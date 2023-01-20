import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { RegistroCompComponent } from './registro-comp/registro-comp.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';

const routes: Routes = [
  {path:"", component:PortfolioComponent},
  {path:"login", component:LoginComponent },
  {path:"nuevaexp", component:NewExperienciaComponent},
  {path:"editexp/:id", component:EditExperienciaComponent},
  {path:"registro", component:RegistroCompComponent },
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
