import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-red-button',
  template: `
    <button class="red-button">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .red-button {
      background: red;
      color: white;
    }
  `]
})
export class RedButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
