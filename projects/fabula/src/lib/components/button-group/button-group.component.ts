import {
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';

@Component({
  selector: 'fab-button-group',
  styleUrls: ['./button-group.component.scss'],
  templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent extends CommonComponent implements OnInit {
  @Input() color: string;
  @Input() divider = true;
  @Input() dividerColor = '';
  @Input() layout = 'h';

  inline = true;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = ButtonGroupStyles;
    this.initStyles();
  }
}
