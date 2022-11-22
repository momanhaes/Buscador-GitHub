import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss'],
  animations: [APPEARD],
})
export class TablesPageComponent implements OnInit {
  public state = 'ready';

  constructor() {}

  ngOnInit() {}
}
