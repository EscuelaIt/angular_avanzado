import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-main-content',
  template: `
<main>
  <router-outlet></router-outlet>
</main>
  `,
  styles: []
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
