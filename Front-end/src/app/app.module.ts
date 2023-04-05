import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    HeroHomeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,NgCircleProgressModule.forRoot({})


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
