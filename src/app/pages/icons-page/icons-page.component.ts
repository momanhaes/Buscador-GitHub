import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { COUNTRIES, ICONS, ICountry, IIcon } from './icons.page.content';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class IconsPageComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get icons(): IIcon[] {
    return ICONS;
  }

  public get countries(): ICountry[] {
    return COUNTRIES;
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }
}
