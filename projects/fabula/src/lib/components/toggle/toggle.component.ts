import { Component, OnInit, Input, ElementRef } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import ToggleStyles from '@fabula/core/styles/components/toggle/toggle';

@Component({
  selector: 'fab-toggle',
  styleUrls: ['./toggle.component.scss'],
  templateUrl: './toggle.component.html'
})
export class ToggleComponent extends CommonComponent implements OnInit {
  @Input() active = false;
  @Input() activeColor: string;
  @Input() color: string;
  @Input() disabled = false;
  @Input() inactiveColor: string;
  @Input() label: string;
  @Input() rounded = false;
  @Input() size: string;

  constructor(public elRef: ElementRef) { super(elRef); }

  ngOnInit() {
    this.styles = ToggleStyles;
    this.initStyles();
  }

  handleClick() {
    if (!this.disabled) { this.active = !this.active; }
  }
}
