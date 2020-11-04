import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tag-example',
    templateUrl: './tag.example.html'
})
export class TagExample {
    @Input() clear = false;
    @Input() faded = false;
    @Input() glow = false;
    @Input() invert = false;
    @Input() outline = false;
    @Input() rounded = false;
    @Input() size = 'md';
}
