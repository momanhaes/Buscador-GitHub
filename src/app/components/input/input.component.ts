import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { APPEARD } from 'src/app/animations/appeard.animation';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [APPEARD],
})
export class InputComponent implements OnInit, AfterViewInit {
  public isRequiredError: boolean;
  public hasError: boolean;
  public state = 'ready';

  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() control!: string;
  @Input() required: boolean;
  @Input() disabled: boolean;

  constructor(private cdr: ChangeDetectorRef) {
    this.isRequiredError = false;
    this.hasError = false;
    this.required = false;
    this.disabled = false;
  }

  ngOnInit(): void {
    if (this.disabled) { this.form.get(this.control)?.disable({ onlySelf: true, emitEvent: false }); }
  }

  ngAfterViewInit() {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.hasError = this.form.get(this.control)?.errors && (this.form.get(this.control)?.dirty || this.form.get(this.control)?.touched) ? true : false;
      this.isRequiredError = this.form.get(this.control)?.errors?.required;
      this.cdr.detectChanges();
    });
  }
}
