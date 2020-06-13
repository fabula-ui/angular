import {
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';
import { css } from 'emotion';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

@Component({
  selector: 'fab-button-group',
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent implements OnInit {
  @Input() divider = true;
  @Input() dividerColor = '';
  @Input() flow = 'horizontal';
  @Input() glued = false;
  @Input() spacing: string;
  @Input() wrap = true;

  host;

  constructor(
    public elRef: ElementRef,
  ) {}

  ngOnInit() {
    let props;
    let styles;

    props = {
      divider: this.divider,
      dividerColor: this.dividerColor,
      flow: this.flow,
      glued: this.glued,
      spacing: this.spacing,
      wrap: this.wrap
    };

    styles = css(ButtonGroupStyles({ framework: 'angular', props }));

    this.host = this.elRef.nativeElement;
    this.host.classList.add(css(styles));
  }

}
