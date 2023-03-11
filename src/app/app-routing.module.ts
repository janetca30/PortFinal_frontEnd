import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditAcercadeComponent } from './components/acercade/edit-acercade/edit-acercade.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewRedComponent } from './components/navbar/new-red/new-red.component';
import { EditRedComponent } from './components/navbar/edit-red/edit-red.component';
import { EditBannerComponent } from './components/banner/edit-banner/edit-banner.component';

const routes: Routes = [
  {path:"", component:PortfolioComponent},
  {path:"login", component:LoginComponent },
  {path:"editacercade/:id", component:EditAcercadeComponent},
  {path:"editbanner/:id", component:EditBannerComponent},
  {path:"nuevaexp", component:NewExperienciaComponent},
  {path:"editexp/:id", component:EditExperienciaComponent},
  {path:"nuevaedu", component:NewEducacionComponent},
  {path:"editedu/:id", component:EditEducacionComponent},
  {path:"nuevaskills", component:NewSkillsComponent},
  {path:"editskills/:id", component:EditSkillsComponent},
  {path:"nuevoproy", component:NewProyectoComponent},
  {path:"editproy/:id", component:EditProyectoComponent},
  {path:"nuevared", component:NewRedComponent},
  {path:"editred/:id", component:EditRedComponent},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
