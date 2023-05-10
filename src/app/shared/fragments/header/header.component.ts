import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { KeyType, LocalStorageService } from '../../services/local-storage.service';
import { ETema } from './header.content';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class HeaderComponent implements OnInit {
  public subscribeMobile!: Subscription;
  public themeIcon: { icon: string; label: string };
  public isMobile: boolean;
  public state = 'ready';

  constructor(
    private windowService: WindowService,
    private localStorageService: LocalStorageService
  ) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
    this.themeIcon = { icon: 'fa fa-sun-o fa-2x', label: ETema.LIGHT };
  }

  ngOnInit() {
    this.subscribeMobile = this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
    this.verifyTheme();
  }

  public verifyTheme() {
    if (this.localStorageService.get(KeyType.TEMA)) {
      this.themeIcon = this.localStorageService.get(KeyType.TEMA);

      if (this.themeIcon.label === ETema.DARK) {
        document.body.classList.add('dark-theme');
      }
    }
  }

  public toggle() {
    document.body.classList.toggle('dark-theme');
    this.themeIcon = this.themeIcon.label === ETema.LIGHT ? { icon: 'fa fa-moon-o fa-2x', label: ETema.DARK } : { icon: 'fa fa-sun-o fa-2x', label: ETema.LIGHT };
    this.localStorageService.set(KeyType.TEMA, this.themeIcon);
  }
}
