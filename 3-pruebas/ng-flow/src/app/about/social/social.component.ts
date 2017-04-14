import { AboutComponent } from '../about.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-social',
  template: `
<ul>
  <li *ngFor="let  link of links"> 
    <a [href]="link.ref" target="_blank">{{link.name}}</a>
  </li>
</ul>
  `,
  styles: []
})
export class SocialComponent implements OnInit {

  links: any[];
  constructor() { }

  ngOnInit() {
    this.links = [
      {
        ref: 'https://twitter.com/albertobasalo',
        name: '@albertobasalo'
      },
      {
        ref: 'https://www.linkedin.com/in/albertobasalo/',
        name: 'Linked In Profile'
      },
      {
        ref: 'https://github.com/AcademiaBinaria',
        name: 'Git Hub'
      }
    ]
  }

}
