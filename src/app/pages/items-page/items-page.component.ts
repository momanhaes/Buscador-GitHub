import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss'],
  animations: [APPEARD],
})
export class ItemsPageComponent implements OnInit {
  public state = 'ready';

  constructor() {}

  ngOnInit() {}
}
