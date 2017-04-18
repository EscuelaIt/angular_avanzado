import { EmailComponent } from './email/email.component';
import { SocialComponent } from './social/social.component';
import { ReactiveFormsModule } from '@angular/forms/';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { TestingTools } from './../shared/testing-tools.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let testingTools: TestingTools;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      declarations: [
        AboutComponent,
        EmailComponent,
        SocialComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    testingTools = new TestingTools(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show contact-form on user click', () => {
    const emailButton = testingTools.queryElementByCss('button[name="contact-by-email"]');
    emailButton.click();
    fixture.detectChanges();
    const contactForm = testingTools.queryElementByCss('form');
    expect(contactForm).toBeTruthy();
  });
});
