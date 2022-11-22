import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
  animations: [APPEARD],
})
export class InputPageComponent implements OnInit {
  public state = 'ready';

  constructor() {}

  ngOnInit() {}
}
