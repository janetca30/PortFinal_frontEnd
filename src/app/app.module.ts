import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { EdicomponentComponent } from './edicomponent/edicomponent.component';
import { AgregarcomComponent } from './edicomponent/agregarcom/agregarcom.component';
import { BorrarcomComponent } from './edicomponent/borrarcom/borrarcom.component';
import { LimpiarComponent } from './edicomponent/limpiar/limpiar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    AcercadeComponent,
    SkillsComponent,
    FooterComponent,
    PortfolioComponent,
    FondoComponent,
    EdicomponentComponent,
    AgregarcomComponent,
    BorrarcomComponent,
    LimpiarComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
