import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguideButton, IStyleguideCollapsibleSection } from 'src/app/shared/interfaces/styleguide.interface';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { BUTTONS, COLLAPSIBLES_SECTIONS, LOREM_IPSUM } from '../styleguide.content';

@Component({
  selector: 'app-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class ButtonsPageComponent implements OnInit {
  public buttons: IStyleguideButton[] = BUTTONS;
  public collapsiblesSections: IStyleguideCollapsibleSection[] = COLLAPSIBLES_SECTIONS;
  public loremIpsum: string = LOREM_IPSUM;
  public state = 'ready';
  public show!: boolean;

  constructor(private styleguideService: StyleguideService) { }
  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public clip(code: string): void {
    this.styleguideService.clip(code);
  }

  public getReadMoreCode(): string {
    return `<app-read-more [content]="loremIpsum" [limit]="300" [completeWords]="true"></app-read-more>`;
  }
}
