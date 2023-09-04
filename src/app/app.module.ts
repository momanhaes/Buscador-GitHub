// ANGULAR IMPORTS
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// MODULES
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// PAGES
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubSearchComponent } from './gh-search/gh-search.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { AwardsComponent } from './awards/awards.component';

// COMPONENTS
import { AppComponent } from './app.component';

// LOCALE DEFINITIONS
registerLocaleData(localePt, 'pt');

const ANGULAR_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule
];

const INTERNAL_MODULES = [
  AppRoutingModule,
  SharedModule
];

const PAGES = [
  HomeComponent,
  NotFoundComponent,
  GitHubSearchComponent,
  CalculatorComponent,
  AwardsComponent,
  EducationComponent,
  ExperienceComponent
];

const COMPONENTS = [
  AppComponent
];

const SERVICES = [
  { provide: LOCALE_ID, useValue: 'pt' }
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...INTERNAL_MODULES
  ],
  declarations: [
    ...COMPONENTS,
    ...PAGES
  ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
