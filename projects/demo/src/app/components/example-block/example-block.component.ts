import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-block',
  templateUrl: './example-block.component.html',
  styleUrls: ['./example-block.component.css']
})
export class ExampleBlockComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}
