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
  @Input() color = '';
  @Input() compact = false;
  @Input() clear = false;
  @Input() disabled = false;
  @Input() expand = false;
  @Input() faded = false;
  @Input() glow = true;
  @Input() gradient = false;
  @Input() invert = false;
  @Input() loading: string;
  @Input() outline = false;
  @Input() rounded = false;
  @Input() size = 'md';
  @Input() wide = false;

  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {
      color: this.color,
      clear: this.clear,
      expand: this.expand,
      faded: this.faded,
      glow: this.glow,
      gradient: this.gradient,
      invert: this.invert,
      loading: this.loading,
      rounded: this.rounded,
      size: this.size
    };

    this.themeService.attachClasses(el, 'button', props);
  }

}
