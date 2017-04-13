import { FormGroup } from '@angular/forms/';
import { FormTools } from './../form-tools.service';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'ab-control-errors',
  template: `
    <span *ngIf="formTools.hasErrorsToShow(field)"><em>{{ formTools.getErrors(field) | json }}</em></span>
  `,
  styles: []
})
export class ControlErrorsComponent implements OnInit, OnChanges {
  @Input() form: FormGroup;
  @Input() field: string;
  formTools: FormTools;

  constructor() { }

  ngOnInit() {
    this.formTools = new FormTools(this.form);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['form']) {
      this.formTools = new FormTools(this.form);
    }
  }

}
