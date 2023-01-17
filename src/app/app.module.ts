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
import { LoginComponent } from './login/login.component';
import { RegistroCompComponent } from './registro-comp/registro-comp.component';
import { Error404Component } from './error404/error404.component';
import { PersonaService } from '../app/service/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';





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
    LoginComponent,
    RegistroCompComponent,
    Error404Component,
    NewExperienciaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [PersonaService, 
  interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
