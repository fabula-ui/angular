import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tabs-example',
    templateUrl: './tabs.example.html'
})
export class TabsExample {
    @Input() alignment: string;
    @Input() color: string;
    @Input() expand: any;
    @Input() faded = false;
    @Input() grow: any;
    @Input() invert = false;
    @Input() layout = 'h';
    @Input() stacked = false;
    @Input() type: string;
}
