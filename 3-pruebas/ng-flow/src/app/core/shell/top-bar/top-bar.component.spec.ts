import { TestingTools } from './../../../shared/testing-tools.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { DebugElement } from "@angular/core/core";

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let testingTools: TestingTools;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule
      ],
      declarations: [TopBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    testingTools = new TestingTools(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render routerLinks', () => {
    const aTags: DebugElement[] = testingTools.queryAllByCss('a');
    expect(aTags[0].nativeElement.getAttribute('routerLink')).toBe('');
    expect(aTags[1].nativeElement.getAttribute('routerLink')).toBe('cash');
    expect(aTags[2].nativeElement.getAttribute('routerLink')).toBe('about');
  });
});
