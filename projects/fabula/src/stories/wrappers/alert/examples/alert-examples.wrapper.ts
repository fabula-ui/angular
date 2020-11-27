import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-examples',
  templateUrl: './alert-examples.wrapper.html',
})
export class AlertExamplesWrapper implements OnInit {
  downProps = { 'xl': { 'color': 'primary' } };
  constructor() { }

  ngOnInit() {
  }

}
