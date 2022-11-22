import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss'],
  animations: [APPEARD],
})
export class DirectivesPageComponent implements OnInit {
  public state = 'ready';

  constructor() {}

  ngOnInit() {}
}
