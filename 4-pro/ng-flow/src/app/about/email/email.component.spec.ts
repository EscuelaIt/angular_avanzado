import { ReactiveFormsModule } from '@angular/forms/';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingTools } from './../../shared/testing-tools.service';
import { EmailComponent } from './email.component';
import { By } from '@angular/platform-browser';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;
  let testingTools: TestingTools;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      declarations: [
        EmailComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    testingTools = new TestingTools(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable submit when form is invalid', () => {
    const submitButton = testingTools.queryElementByCss('button');
    fixture.detectChanges();
    expect(submitButton.hasAttribute('disabled')).toBeTruthy();
  });

  it('should enable submit when form is valid', () => {
    const sender = testingTools.queryDebugElementByCss('input[formControlName="sender"]');
    sender.nativeElement.value = 'a@b.c';
    sender.nativeElement.dispatchEvent(new Event('input'));
    const subject = testingTools.queryDebugElementByCss('input[formControlName="subject"]');
    subject.nativeElement.value = 'testing';
    subject.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const submitButton = testingTools.queryElementByCss('button');
    expect(submitButton.hasAttribute('disabled')).toBeFalsy();
  });

  it('should call onSubmit', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

});
