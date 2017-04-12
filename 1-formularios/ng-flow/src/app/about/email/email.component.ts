import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms/';
import { message } from './../models/message.class';

@Component({
  selector: 'ab-email',
  templateUrl: './email.component.html',
  styles: []
})
export class EmailComponent implements OnInit {
  public message: message
  public messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.messageForm = this.formBuilder.group({
      sender: [[], Validators.required],
      subject: [[], Validators.required],
      body: [[]],
    });
  }

  onSubmit() {
    this.message = this.messageForm.value;
    console.log(this.message);
  }
}
