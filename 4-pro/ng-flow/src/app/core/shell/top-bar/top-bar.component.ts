import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-top-bar',
  template: `
    <nav>
      <a routerLink=""  class="button button-clear" translate>Home</a>
      <a routerLink="cash"  class="button button-clear" translate>Cash</a>
      <a routerLink="about"  class="button button-clear" translate>About</a>
    </nav>
  `,
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
