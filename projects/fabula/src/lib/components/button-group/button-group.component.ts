import {
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';
import { css } from 'emotion';

// Component base
import { GeneralComponent } from '../general-component/general-component.component';

// Styles
import ButtonGroupStyles from '@fabula/core/theme/styles/ButtonGroup';

@Component({
  selector: 'fab-button-group',
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent extends GeneralComponent implements OnInit {
  @Input() divider = true;
  @Input() flow = 'horizontal';
  @Input() glued = false;
  @Input() spacing: string;
  @Input() wrap = true;

  host;

  constructor(
    public elRef: ElementRef,
  ) { 
    super(elRef);
  }

  ngOnInit() {
    super.ngOnInit();
    let props;
    let styles;

    props = {
      al: this.al,
      alH: this.alH,
      alV: this.alV,
      align: this.align,
      alignH: this.alignH,
      alignV: this.alignV,
      divider: this.divider,
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
