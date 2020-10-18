import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-toast-example',
    templateUrl: './toast.example.html'
})
export class ToastExample {
    @Input() clear = false;
    @Input() color: string;
    @Input() iconColor: string;
    @Input() iconName: string;
}
