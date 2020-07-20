import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fab-list-example',
    templateUrl: './list-example.wrapper.html'
})
export class ListExampleWrapper implements OnInit {
    @Input() buttons = false;
    @Input() color: string;
    @Input() divider = true;
    @Input() link: string;
    @Input() props: any;
    @Input() striped = false;
    @Input() target: string;

    constructor() { }

    ngOnInit() {}

    // Methods
    handleClick() {
        if (this.buttons) { console.log('Component click'); }
    }

    handleParentClick() {
        if (this.buttons) { console.log('Parent click'); }
    }

}
