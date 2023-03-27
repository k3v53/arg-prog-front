import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { EducationEntryComponent } from './components/education/education-entry/education-entry.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceEntryComponent } from './components/experience/experience-entry/experience-entry.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectEntryComponent } from './components/projects/project-entry/project-entry.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LanguageEntryComponent } from './components/skills/language-entry/language-entry.component';
import { SkillsEntryComponent } from './components/skills/skills-entry/skills-entry.component';
import { SkillsComponent } from './components/skills/skills.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    ExperienceComponent,
    ExperienceEntryComponent,
    EducationComponent,
    EducationEntryComponent,
    SkillsComponent,
    SkillsEntryComponent,
    LanguageEntryComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectEntryComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
