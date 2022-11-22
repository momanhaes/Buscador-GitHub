import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InputPageComponent } from './pages/input-page/input-page.component';
import { GitHubSearchComponent } from './pages/gh-search/gh-search.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { TablesPageComponent } from './pages/tables-page/tables-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Página Inicial' },
  },
  {
    path: 'inputs',
    component: InputPageComponent,
    data: { title: 'Inputs' },
  },
  {
    path: 'buttons',
    component: ButtonsPageComponent,
    data: { title: 'Botões' },
  },
  {
    path: 'tables',
    component: TablesPageComponent,
    data: { title: 'Tabelas' },
  },
  {
    path: 'items',
    component: ItemsPageComponent,
    data: { title: 'Itens' },
  },
  {
    path: 'icons',
    component: IconsPageComponent,
    data: { title: 'Ícones' },
  },
  {
    path: 'directives',
    component: DirectivesPageComponent,
    data: { title: 'Diretivas' },
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    data: { title: 'Serviços' },
  },
  {
    path: 'gh-search',
    component: GitHubSearchComponent,
    data: { title: 'Buscador de Repositório' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Não Encontrado' },
  },
];
