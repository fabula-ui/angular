import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fab-selector',
    template: '<div></div>'
})
export class SelectorComponent {
    @Input() active = false;
    @Input() activeColor: string;
    @Input() activeFillColor: string;
    @Input() activeTextColor: string;
    @Input() clear: boolean;
    @Input() color: string;
    @Input() expand: boolean;
    @Input() faded: boolean;
    @Input() href: string;
    @Input() inactiveFillColor: string;
    @Input() inactiveTextColor: string;
    @Input() invert: boolean;
    @Input() link: string;
    @Input() name: string;
    @Input() outline: boolean;
    @Input() rounded: boolean;
    @Input() scope: string;
    @Input() stacked: boolean;
    @Input() target: string;

    @Output() selectedSegment = new EventEmitter();

    constructor(
        public elRef: ElementRef,
    ) { }

    handleClick() {
        if (this.name) { this.selectedSegment.emit(this.name); }
    }

    listen(events) {
        events.onChangeSegment.subscribe(segment => {
            this.active = segment === this.name;
        });
    }
}