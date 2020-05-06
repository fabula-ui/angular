import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import { CollapseStyles } from './collapse.styles';

@Component({
  providers: [CollapseStyles],
  selector: 'fab-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {
  @Input() color = '';
  constructor(
    private elRef: ElementRef,
    private fabulaService: FabulaService,
    private styles: CollapseStyles
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    const props = {
      color: this.color
    };

    this.fabulaService.setStyles(el, this.styles, props);
  }

}
