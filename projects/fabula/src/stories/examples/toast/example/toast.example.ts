import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-toast-example',
    templateUrl: './toast.example.html'
})
export class ToastExample implements OnInit {
    @Input() clear = false;
    @Input() color: string;
    @Input() faded = false;
    @Input() glow = false;
    @Input() hideButton: any;
    @Input() iconColor: string;
    @Input() iconName: string;
    @Input() link: any;
    @Input() mb: any;
    @Input() outline = false;

    ngOnInit() {
        if (!this.hideButton) { this.hideButton = { border: !this.color, color: this.color, invert: !!this.color, label: 'Hide' }; }
    }
}
