import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-wrapper',
  templateUrl: './dropdown-wrapper.component.html',
  styleUrls: ['./dropdown-wrapper.component.css']
})
export class DropdownWrapperComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
