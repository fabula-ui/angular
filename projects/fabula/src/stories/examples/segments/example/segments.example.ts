import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-segments-example',
    templateUrl: './segments.example.html'
})
export class SegmentsExample {
    @Input() activeColor: string;
    @Input() activeTextColor: string;
    @Input() border = true;
    @Input() clear = false;
    @Input() color: string;
    @Input() faded = false;
    @Input() inactiveColor: string;
    @Input() inactiveTextColor: string;
    @Input() invert = false;
    @Input() outline = false;
    @Input() rounded = false;
}
