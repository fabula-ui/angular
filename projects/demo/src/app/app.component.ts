import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownItems = [
    {
      subtitle: 'This is an example of subtitle',
      title: 'Dropdown Item 1'
    },
    {
      subtitle: 'This is an example of subtitle',
      title: 'Dropdown Item 2'
    },
    {
      subtitle: 'This is an example of subtitle',
      title: 'Dropdown Item 3'
    }
  ];
  title = 'demo';

  constructor() {
  }
}
