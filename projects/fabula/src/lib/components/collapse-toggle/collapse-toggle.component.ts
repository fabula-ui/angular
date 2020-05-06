import { Component, ElementRef, OnInit } from '@angular/core';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import { CollapseToggleStyles } from './collapse-toggle.styles';

@Component({
  providers: [CollapseToggleStyles],
  selector: 'fab-collapse-toggle',
  templateUrl: './collapse-toggle.component.html',
})
export class CollapseToggleComponent implements OnInit {

  constructor(
    private elRef: ElementRef,
    private fabulaService: FabulaService,
    private styles: CollapseToggleStyles
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;

    this.fabulaService.setStyles(el, this.styles);
  }

}
