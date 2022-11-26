import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LIST_ANIMATION_LATERAL } from 'src/app/animations/list.animation';
import { APPEARD } from 'src/app/animations/appeard.animation';
import { IInput, INPUTS } from './inputs-page.content';
import { EMAIL_PATTERN } from 'src/app/utils/patterns';

@Component({
  selector: 'app-inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class InputsPageComponent implements OnInit {
  public form!: FormGroup;
  public state = 'ready';
  public show!: boolean;

  constructor() {}

  public get inputs(): IInput[] {
    return INPUTS;
  }

  public get searchText(): string {
    return this.form.get('search')?.value;
  }

  ngOnInit() {
    this.form = new FormGroup({
      input: new FormControl(''),
      search: new FormControl(''),
      password: new FormControl(''),
      disabled: new FormControl(''),
      required: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern(EMAIL_PATTERN)]),
    });

    setTimeout(() => {
      this.show = true;
    }, 0);
  }
}
