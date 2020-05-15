import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

// Styles
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-button',
  styleUrls: ['button.component.scss'],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() border = false;
  @Input() color: string;
  @Input() compact: boolean;
  @Input() clear: boolean;
  @Input() disabled: boolean;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() glow = true;
  @Input() gradient: boolean;
  @Input() invert: boolean;
  @Input() loading: string;
  @Input() outline: boolean;
  @Input() rounded: boolean;
  @Input() size: string;
  @Input() wide: boolean;

  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
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

    this.themeService.attachClasses(el, 'button', props);
  }

}
