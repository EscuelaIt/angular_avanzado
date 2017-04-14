import { ReactiveFormsModule } from '@angular/forms/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsComponent } from './control-errors/control-errors.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ControlErrorsComponent, InputComponent],
  exports: [ControlErrorsComponent, InputComponent]
})
export class SharedModule { }
