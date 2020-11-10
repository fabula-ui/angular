import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';

@Component({
  selector: 'fab-button',
  styleUrls: ['button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent extends CommonComponent implements AfterViewInit {
  @Input() border = false;
  @Input() circle: boolean;
  @Input() clear: boolean;
  @Input() color: string;
  @Input() compact = false;
  @Input() darken: boolean;
  @Input() disabled: boolean;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() glow = false;
  @Input() gradient: boolean;
  @Input() href: string;
  @Input() invert: boolean;
  @Input() lighten: boolean;
  @Input() loading: string;
  @Input() label: string;
  @Input() outline: boolean;
  @Input() rel: string;
  @Input() rounded: boolean;
  @Input() size: string;
  @Input() target: string;
  @Input() wide: boolean;

  inline = true;

  constructor(public elRef: ElementRef) { super(elRef); }

  ngAfterViewInit() {
    this.styles = ButtonStyles;
    this.initStyles();
  }
}
