import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-top-bar',
  template: `
    <nav>
      <a [routerLink]="[ '' ]"  class="button button-clear">Home</a>
      <a [routerLink]="[ 'about' ]"  class="button button-clear">About</a>
    </nav>
  `,
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
