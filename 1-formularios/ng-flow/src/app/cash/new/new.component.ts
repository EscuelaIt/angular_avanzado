import { Operation } from './../models/operation.class';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {
  operation: Operation;
  operationForm: FormGroup;

  currentDate = new Date(Date.now());
  oneDay = 1000 * 60 * 60 * 24;
  minDate = new Date(Date.now() - this.oneDay * 7);
  maxDate = new Date(Date.now() + this.oneDay * 7);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createNewOperation();
    this.buildForm();
  }

  createNewOperation() {
    this.operation = new Operation(this.currentDate, 0, 1);
    console.log(this.minDate);
  }

  buildForm() {
    this.operationForm = this.formBuilder.group({
      date: [
        this.operation.date.toISOString().substring(0, 10),
        [
          Validators.required,
          this.mustBeInDateRange(this.minDate, this.maxDate)
        ]
      ],
      amount: [
        this.operation.amount,
        [
          Validators.required,
          this.mustBePositiveNumber
        ]
      ],
      operationType: this.operation.operationType
    });
  }

  onSubmit() {
    this.operation = this.operationForm.value;
    console.log(this.operation);
  }

  mustBePositiveNumber(control: AbstractControl) {
    const isInvalid = control.value !== undefined && (isNaN(control.value) || control.value < 0);
    if (isInvalid)
      return { 'positive': true };
    else
      return null;
  }

  mustBeInDateRange(date1: Date, date2: Date): ValidatorFn {
    return function (control: AbstractControl) {
      const date = new Date(control.value);
      const isInvalid = date < date1 || date > date2;
      if (isInvalid)
        return { 'dateRange': true };
      else
        return null;

    };
  }
}
