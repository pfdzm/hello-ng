import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styles: [
    `
      h1 {
        color: palevioletred;
        font-family: 'Segoe UI', sans-serif;
        font-weight: 900;
        font-size: xx-large;
      }
    `
  ]
})
export class AppComponent {
  title = 'egghead-angular';
}
