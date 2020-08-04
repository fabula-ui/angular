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
  @Input() color: string;
  @Input() divider = true;
  @Input() dividerColor = '';
  @Input() glued = false;
  @Input() layout = 'horizontal';
  @Input() spacing: string;
  @Input() wrap = true;

  constructor(public elRef: ElementRef) {}

  ngOnInit() {
    const styles = css(ButtonGroupStyles({ framework: 'angular', props: this }));
    const host = this.elRef.nativeElement;
    host.classList.add(css(styles));
  }

}
