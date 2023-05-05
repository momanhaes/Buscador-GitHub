import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ISocialContent, SOCIAL_CONTENT } from './home.content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class HomeComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;
  public content: ISocialContent[] = SOCIAL_CONTENT;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public goTo(url: string): void {
    let URL: string = '';
    if (!/^http[s]?:\/\//.test(url)) { URL += 'http://'; }
    URL += url;
    window.open(URL, '_blank');
  }
}
