import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceEntryComponent } from './components/experience/experience-entry/experience-entry.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingComponent, ExperienceComponent, ExperienceEntryComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
