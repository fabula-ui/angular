import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-alert-example',
    templateUrl: './alert.example.html'
})
export class AlertExample {
    @Input() p: any;
    @Input() pb: any;
    @Input() pl: any;
    @Input() pr: any;
    @Input() pt: any;
    @Input() px: any;
    @Input() py: any;
}
