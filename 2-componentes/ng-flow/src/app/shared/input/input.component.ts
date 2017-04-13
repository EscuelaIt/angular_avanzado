import { FormGroup } from '@angular/forms/';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-input',
  template: `
    <section [formGroup]="form">
      <label [for]="field">{{ label }}</label>
      <input [formControlName]="field"
             [type]="type">
      <ab-control-errors [field]="field"
                         [form]="form"></ab-control-errors>
    </section>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() field: string;
  @Input() type: string;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
