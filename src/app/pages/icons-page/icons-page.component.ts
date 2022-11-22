import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
  animations: [APPEARD],
})
export class IconsPageComponent implements OnInit {
  public state = 'ready';

  constructor() {}

  ngOnInit() {}
}
