// ANGLAR IMPORTS
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// DECLARATIONS
import { AppComponent } from './app.component';
import { ResizeDirective } from './directives/resize.directive';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// PAGES
import { InputPageComponent } from './pages/input-page/input-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { TablesPageComponent } from './pages/tables-page/tables-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GitHubSearchComponent } from './pages/gh-search/gh-search.component';
import { HomeComponent } from './pages/home/home.component';

// MATERIAL IMPORTS
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// PROVIDERS
import { WindowService } from './services/window.service';
import { GithubService } from './services/github.service';
import { NotificationService } from './services/notification.service';
import { ProfileComponent } from './components/profile/profile.component';

// INTERNAL IMPORTS
import { ROUTES } from './app.routes';

const PROVIDERS = [
  NotificationService,
  WindowService,
  GithubService
];

const DECLARATIONS = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  ButtonComponent,
  InputComponent,
  SpinnerComponent,
  ProfileComponent,
  TableComponent,
  ListComponent,
  ItemComponent,
  ResizeDirective
];

const PAGES = [
  GitHubSearchComponent,
  NotFoundComponent,
  HomeComponent,
  InputPageComponent,
  ButtonsPageComponent,
  TablesPageComponent,
  ItemsPageComponent,
  IconsPageComponent,
  DirectivesPageComponent,
  ServicesPageComponent
];

const ANGULAR_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forRoot(ROUTES),
];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
];

@NgModule({
  declarations: [...DECLARATIONS, ...PAGES],
  imports: [...ANGULAR_MODULES, ...MATERIAL_MODULES],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
