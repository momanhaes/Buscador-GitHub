import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  animations: [APPEARD],
})
export class ServicesPageComponent implements OnInit {
  public state = 'ready';

  constructor() {}

  ngOnInit() {}
}
