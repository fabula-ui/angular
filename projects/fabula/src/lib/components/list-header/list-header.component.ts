import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import ListHeaderStyles from '@fabula/core/styles/components/list-header/list-header';

@Component({
    selector: 'fab-list-header',
    templateUrl: './list-header.component.html'
})
export class ListHeaderComponent extends CommonComponent implements OnInit {
    @Input() color: string;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
      ) { super(elRef, fabulaService); }

    ngOnInit() {
        this.styles = ListHeaderStyles;
        this.initStyles();
    }
}
