import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'fab-parent',
  template: '<div>Dummy component</div>'
})
export class ParentComponent implements AfterViewInit {
  @Input() childComponent: Component;

  @ContentChildren(this.childComponent) childComponents: QueryList<Component>;

  constructor() { }

  ngAfterViewInit() {}

}
