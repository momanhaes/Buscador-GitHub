import { Component, HostListener, OnInit } from '@angular/core';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { KeyType, LocalStorageService } from 'src/app/services/local-storage.service';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { WindowService } from 'src/app/services/window.service';
import { ETema, IContent, SIDEBAR_CONTENT } from './sidebar.content';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class SidebarComponent implements OnInit {
  @HostListener('window:scroll') onScrollEvent() {
    this.scrolled = true;

    if (window.innerHeight + window.scrollY <= document.body.offsetHeight) {
      this.scrolled = false;
    }
  }

  public subscribeMobile!: Subscription;
  public themeIcon!: { icon: string; label: string };
  public scrolled: boolean = false;
  public isMobile!: boolean;
  public state = 'ready';

  constructor(
    private windowService: WindowService,
    private localStorageService: LocalStorageService
  ) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
    this.themeIcon = { icon: 'fa fa-sun-o fa-2x', label: ETema.LIGHT };
  }

  public get content(): IContent[] {
    return SIDEBAR_CONTENT;
  }

  ngOnInit() {
    this.subscribeMobile = this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
    
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
