import {
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

// Component base
import { GeneralComponent } from '../general-component/general-component.component';

import { ThemeService } from '../../services/theme.service';

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
    private themeService: ThemeService,
  ) { 
    super(elRef);
  }

  ngOnInit() {
    super.ngOnInit();

    let props;
    this.host = this.elRef.nativeElement;

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

    this.themeService.attachClasses(this.host, 'buttonGroup', props);
  }

}
