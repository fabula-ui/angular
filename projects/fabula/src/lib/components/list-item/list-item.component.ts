import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fab-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() button = false;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;

    this.host = this.elRef.nativeElement;
  }

}
