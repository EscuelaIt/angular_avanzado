import { TranslateService } from 'ng2-translate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-shell',
  template: `
<section name="app-root" class="container">
  <ab-top-bar></ab-top-bar>
  <ab-main-content></ab-main-content>
</section>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.setDefaultLang('es');
  }

  ngOnInit() {
  }

}
