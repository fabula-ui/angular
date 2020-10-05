import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-section-example',
    templateUrl: './card-section.example.html'
})
export class CardSectionExample {
    @Input() color: string;
    @Input() darken = false;
    @Input() divider: string;
    @Input() faded = false;
    @Input() lighten = false;
    @Input() width: any;
    constructor() { }
}
