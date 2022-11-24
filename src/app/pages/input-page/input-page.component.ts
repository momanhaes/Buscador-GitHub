import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { IInput, INPUTS } from './input-page.content';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class InputPageComponent implements OnInit {
  public form!: FormGroup;
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get inputs(): IInput[] {
    return INPUTS;
  }

  ngOnInit() {
    this.form = new FormGroup({
      appInput: new FormControl(''),
    });

    setTimeout(() => {
      this.show = true;
    }, 0);
  }
}
