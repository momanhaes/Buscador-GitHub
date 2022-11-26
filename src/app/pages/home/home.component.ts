import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { HOME, IHome } from './home.content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class HomeComponent implements OnInit {
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get home(): IHome[] {
    return HOME;
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public goTo(url: string): void {
    let URL: string = '';

    if (!/^http[s]?:\/\//.test(url)) {
      URL += 'http://';
    }

    URL += url;

    window.open(URL, '_blank');
  }
}
