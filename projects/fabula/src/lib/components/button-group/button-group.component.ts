import {
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'fab-button-group',
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent implements OnInit {
  @Input() divider = true;
  @Input() flow = 'horizontal';
  @Input() glued = false;
  @Input() spacing: string;
  @Input() wrap = true;

  constructor(
    private elRef: ElementRef,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {
      divider: this.divider,
      flow: this.flow,
      glued: this.glued,
      spacing: this.spacing,
      wrap: this.wrap
    };

    this.themeService.attachClasses(el, 'buttonGroup', props);
  }

}
