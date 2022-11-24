import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { IItems, ITEMS } from './items-page.content';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class ItemsPageComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get items(): IItems[] {
    return ITEMS;
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }
}
