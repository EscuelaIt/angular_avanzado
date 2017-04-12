import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-about',
  template: `
    <button (click)="byEmail=true">By Email</button>
    <button (click)="byEmail=false">By Social Network</button>
    <aside *ngIf="byEmail ; then emailContact; else socialContact"></aside>
    <ng-template #emailContact>
      <ab-email></ab-email>
    </ng-template>
    <ng-template #socialContact>
      <ab-social></ab-social>
    </ng-template>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  byEmail = false;

  constructor() { }

  ngOnInit() {
  }

}
