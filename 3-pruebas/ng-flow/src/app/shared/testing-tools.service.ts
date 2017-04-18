import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ResponseOptions } from '@angular/http';

export class TestingTools {
  constructor(private fixture) { }

  queryElementByCss(css: string): HTMLElement {
    return this.queryDebugElementByCss(css).nativeElement;
  }

  queryDebugElementByCss(css: string): DebugElement {
    return this.fixture.debugElement.query(By.css(css));
  }

  queryAllByCss(css: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(css));
  }

  // importe.getAttribute('ng-reflect-model')

  getModelValue(element: HTMLElement) {
    return element.getAttribute('ng-reflect-model');
  }

  getMockResponse(mockBackend, fakeData) {
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: fakeData
      })));
    });
  }
}
