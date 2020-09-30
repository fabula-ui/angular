import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'fab-column, fab-col',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() col: any;
  @Input() grow: any;
  @Input() width: any;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    const props = {
      col: this.col,
      grow: this.grow,
      width: this.width
    };

    this.host = this.elRef.nativeElement;

    // Attach classes to host
  }

}
