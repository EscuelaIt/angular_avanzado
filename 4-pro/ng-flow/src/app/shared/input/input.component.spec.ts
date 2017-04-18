import { ControlErrorsComponent } from './../control-errors/control-errors.component';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms/';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      declarations: [
        ControlErrorsComponent,
        InputComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.label = 'test field';
    component.field = 'test';
    component.type = "text";
    component.form = new FormBuilder().group({ test: '' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
