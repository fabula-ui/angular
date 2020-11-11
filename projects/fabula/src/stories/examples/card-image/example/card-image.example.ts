import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-image-example',
    templateUrl: './card-image.example.html'
})
export class CardImageExample {
    @Input() color: string;
    @Input() darken = false;
    @Input() faded = false;
    @Input() height = '120';
    @Input() icon = {
        name: 'image'
    };
    @Input() lighten = false;
    @Input() src: string;
    constructor() { }
}
