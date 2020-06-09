import {
    Component,
    ElementRef,
    Input,
    OnInit,
    QueryList,
    ContentChildren
} from '@angular/core';
import { css } from 'emotion';

// Styles
import ButtonStyles from '@fabula/core/theme/styles/Button';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'fab-button',
  styleUrls: ['button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @ContentChildren(IconComponent) iconComponents: QueryList<IconComponent>;
  
  @Input() border = false;
  @Input() color: string;
  @Input() compact: boolean;
  @Input() clear: boolean;
  @Input() disabled: boolean;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() glow = false;
  @Input() gradient: boolean;
  @Input() invert: boolean;
  @Input() loading: string;
  @Input() outline: boolean;
  @Input() rounded: boolean;
  @Input() size: string;
  @Input() wide: boolean;

  host;
  props;

  constructor(
    private elRef: ElementRef
  ) { }

  ngAfterViewInit() {}

  ngOnInit() {
    const props = {
      border: this.border,
      clear: this.clear,
      color: this.color,
      compact: this.compact,
      expand: this.expand,
      faded: this.faded,
      glow: this.glow,
      gradient: this.gradient,
      invert: this.invert,
      loading: this.loading,
      outline: this.outline,
      rounded: this.rounded,
      size: this.size,
      wide: this.wide
    };
    const styles = css(ButtonStyles({ framework: 'angular', props }));

    this.host = this.elRef.nativeElement;
    this.host.classList.add(styles);

    this.props = props;
  }

}
