import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  animations: [APPEARD],
})
export class ButtonsPageComponent implements OnInit {
  public state = 'ready';

  constructor() {}

  ngOnInit() {}
}
