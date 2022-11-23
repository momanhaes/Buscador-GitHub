import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { ITypography, TYPOGRAPHY } from './typograph-page.content';

@Component({
  selector: 'app-typography-page',
  templateUrl: './typography-page.component.html',
  styleUrls: ['./typography-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class TypographyPageComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get typograph(): ITypography[] {
    return TYPOGRAPHY;
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }
}
