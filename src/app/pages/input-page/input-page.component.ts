import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
  animations: [APPEARD],
})
export class InputPageComponent implements OnInit {
  public form!: FormGroup;
  public state = 'ready';

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({ default: new FormControl('') });
  }

  getCode(origin: string): string {
    switch (origin) {
      case 'input':
        return '<app-input [form]="form" label="Padrão" type="text" control="default" [required]="false" placeholder="Input padrão"></app-input>';

      default:
        return '';
    }
  }
}
