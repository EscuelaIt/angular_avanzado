import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-email',
  template: `
    <form>
      <fieldset>
        <div>
          <label for="email">Email</label>
          <input type="email">
        </div>
        <div>
          <label for="subject">Subject</label>
          <input type="text">
        </div>
      </fieldset>
      <button>Send!!</button>
    </form>
  `,
  styles: []
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
