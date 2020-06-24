import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert-close-button',
    templateUrl: './alert-close-button.wrapper.html'
})
export class AlertCloseButtonWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClose() {
        alert('Closing alert');
    }

}
