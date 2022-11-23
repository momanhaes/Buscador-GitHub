import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { IPipeUsage, PIPES } from './pipes-page.content';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class PipesPageComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get pipes(): IPipeUsage[] {
    return PIPES;
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }
}
