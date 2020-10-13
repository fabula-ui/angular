import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-example',
    templateUrl: './list.example.html'
})
export class ListExample implements OnInit {
    @Input() button = false;
    @Input() color: string;
    @Input() divider = true;
    @Input() padding = true;
    @Input() striped = false;

    constructor() { }

    ngOnInit() {}

    // Methods
    handleClick() {
        if (this.button) { console.log('Component click'); }
    }

    handleParentClick() {
        if (this.button) { console.log('Parent click'); }
    }

}
