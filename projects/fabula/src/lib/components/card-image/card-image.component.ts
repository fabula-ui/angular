import { Component, ElementRef, OnInit, Input } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Models
import type { Icon } from '../../models/icon.model';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';

@Component({
  selector: 'fab-card-image',
  templateUrl: './card-image.component.html'
})
export class CardImageComponent extends CommonComponent implements OnInit {
  @Input() adaptColor = false;
  @Input() color: string;
  @Input() cover = false;
  @Input() darken = false;
  @Input() faded = false;
  @Input() height: any;
  @Input() icon: Icon = {
    name: 'image'
  };
  @Input() layout: string;
  @Input() lighten = false;
  @Input() src: string;
  @Input() width: any;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = CardImageStyles;
    this.initStyles();
  }
}
