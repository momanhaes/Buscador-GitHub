import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { KeyType, LocalStorageService } from '../../services/local-storage.service';
import { ETema, HEADER_CONTENT, IContent } from './header.content';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class HeaderComponent implements OnInit {
  public themeIcon: { icon: string; label: string };
  public content: IContent[] = HEADER_CONTENT;
  public subscribeMobile!: Subscription;
  public isMobile: boolean;
  public state = 'ready';

  constructor(
    private windowService: WindowService,
    private localStorageService: LocalStorageService
  ) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
    this.themeIcon = { icon: 'light_mode', label: ETema.LIGHT };
  }

  ngOnInit() {
    this.subscribeMobile = this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
    this.verifyTheme();
  }

  public hasTheme(): boolean {
    return this.localStorageService.has(KeyType.TEMA);
  }

  public verifyTheme() {
    if (!this.hasTheme()) { return; }

    const tema = this.localStorageService.get(KeyType.TEMA);
    this.themeIcon = tema;

    if (this.themeIcon.label === ETema.DARK) {
      document.body.classList.add('dark-theme');
    }
  }

  public themeTooltip(): string {
    return this.themeIcon.label === ETema.LIGHT ? 'Mudar para tema escuro' : 'Mudar para tema claro';
  }

  public toggle() {
    document.body.classList.toggle('dark-theme');
    this.themeIcon = this.themeIcon.label === ETema.LIGHT ? { icon: 'dark_mode', label: ETema.DARK } : { icon: 'light_mode', label: ETema.LIGHT };
    this.localStorageService.set(KeyType.TEMA, this.themeIcon);
  }
}
