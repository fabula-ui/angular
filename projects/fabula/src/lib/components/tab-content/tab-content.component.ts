import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fab-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
  @Input() id: string;
  @Input() scope: string;

  constructor() { }

  ngOnInit() {
  }

}
