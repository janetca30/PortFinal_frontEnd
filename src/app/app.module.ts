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
import { Error404Component } from './error404/error404.component';
import { PersonaService } from '../app/service/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditAcercadeComponent } from './components/acercade/edit-acercade/edit-acercade.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NewRedComponent } from './components/navbar/new-red/new-red.component';
import { EditRedComponent } from './components/navbar/edit-red/edit-red.component';
import { EditBannerComponent } from './components/banner/edit-banner/edit-banner.component';
import {AngularFireModule}  from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    Error404Component,
    NewExperienciaComponent,
    NewEducacionComponent,
    EditExperienciaComponent,
    EditAcercadeComponent,
    EditEducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditProyectoComponent,
    NewProyectoComponent,
    NewRedComponent,
    EditRedComponent,
    EditBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [PersonaService, 
  interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
