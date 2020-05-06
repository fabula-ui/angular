import {
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';
import { FabulaService } from '../../services/fabula.service';

import { ButtonGroupStyles } from './button-group.styles';

@Component({
  providers: [ButtonGroupStyles],
  selector: 'fab-button-group',
  styles: [],
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent implements OnInit {
  @Input() flow = 'horizontal';
  @Input() spacing: string;
  @Input() wrap = true;
  constructor(
    private elRef: ElementRef,
    private styles: ButtonGroupStyles
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {
      flow: this.flow,
      spacing: this.spacing,
      wrap: this.wrap
    };
    const css = this.styles.css(props);

    el.classList.add(css);
  }

}
