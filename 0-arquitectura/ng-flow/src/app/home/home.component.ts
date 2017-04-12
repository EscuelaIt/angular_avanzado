import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-home',
  template: `
  <blockquote>
    <p><em>Hello!! Angular is amazing.</em></p>
  </blockquote>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
