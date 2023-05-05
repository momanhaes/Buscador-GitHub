// ANGULAR IMPORTS
import { NgModule } from '@angular/core';

// MODULES
import { ComponentsModule } from './components/components.module';
import { FragmentsModule } from './fragments/fragments.module';

// SERVICES
import { WindowService } from './services/window.service';
import { GithubService } from './services/github.service';
import { CollapsibleService } from './services/collapsible.service';
import { NotificationService } from './services/notification.service';
import { LocalStorageService } from './services/local-storage.service';
import { SessionStorageService } from './services/session-storage.service';

const MODULES = [
  ComponentsModule,
  FragmentsModule,
];

const SERVICES = [
  LocalStorageService,
  SessionStorageService,
  NotificationService,
  CollapsibleService,
  WindowService,
  GithubService
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class SharedModule {}
