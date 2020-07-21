import {
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { css } from 'emotion';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';

@Component({
  selector: 'fab-button',
  styleUrls: ['button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements AfterViewInit {
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
  @Input() icon: string;
  @Input() invert: boolean;
  @Input() lighten: boolean;
  @Input() loading: string;
  @Input() label: string;
  @Input() outline: boolean;
  @Input() props: any;
  @Input() rounded: boolean;
  @Input() size: string;
  @Input() wide: boolean;

  host;

  constructor(public elRef: ElementRef) { }

  ngAfterViewInit() {
    const styles = css(ButtonStyles({
      framework: 'angular', props: {
        ...this,
        ...this.props
      }
    }));
    const host = this.elRef.nativeElement;
    host.classList.add(styles);

    if (this.props && this.props.icon) { this.icon = this.props.icon; }
    if (!this.props) { this.props = this; }

    this.host = host;
  }
}
