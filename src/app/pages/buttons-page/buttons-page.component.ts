import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { BUTTONS, IButton } from './buttons-page.content';

@Component({
  selector: 'app-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class ButtonsPageComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get buttons(): IButton[] {
    return BUTTONS;
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }
}
