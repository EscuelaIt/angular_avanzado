import { FormGroup } from '@angular/forms/';

export class FormTools {
  constructor(public form: FormGroup) { }


  hasErrorsToShow(field: string) {
    const control = this.getControl(field);
    return control && control.invalid && this.shouldBeValid(control);
  }

  getErrors(field: string) {
    const control = this.getControl(field);
    return control && control.errors;
  }

  getControl(field: string) {
    return this.form && this.form.get(field);
  }

  shouldBeValid(control) {
    return (control.touched || control.dirty);
  }
}