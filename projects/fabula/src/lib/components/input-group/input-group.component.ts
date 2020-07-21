import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import InputGroupStyles from '@fabula/core/styles/components/input-group/input-group';

@Component({
  selector: 'fab-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {
  @Input() flow = 'horizontal';
  @Input() glued = false;
  @Input() spacing: any;

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(InputGroupStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }
}
