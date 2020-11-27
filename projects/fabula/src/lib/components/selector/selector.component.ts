import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

// Component
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
    selector: 'fab-selector',
    template: '<div></div>'
})
export class SelectorComponent extends CommonComponent {
    @Input() active = false;
    @Input() activeColor: string;
    @Input() activeTextColor: string;
    @Input() clear: boolean;
    @Input() color: string;
    @Input() expand: boolean;
    @Input() faded: boolean;
    @Input() href: string;
    @Input() inactiveColor: string;
    @Input() inactiveTextColor: string;
    @Input() invert: boolean;
    @Input() layout: string;
    @Input() name: string;
    @Input() outline: boolean;
    @Input() rel: string;
    @Input() rounded: boolean;
    @Input() scope: string;
    @Input() stacked: boolean;
    @Input() target: string;
    @Input() type: string;

    @Output() selectedSegment = new EventEmitter();

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    handleClick() {
        if (this.name) { this.selectedSegment.emit(this.name); }
    }

    listen(events) {
        events.onChangeSelector.subscribe(segment => {
            this.active = segment === this.name;
        });
    }
}