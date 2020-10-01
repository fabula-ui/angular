import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-example',
    templateUrl: './card.example.html'
})
export class CardExample {
    @Input() color: string;
    constructor() { }
}
