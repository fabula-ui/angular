import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-expand',
    templateUrl: './dropdown-expand.wrapper.html'
})
export class DropdownExpandWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

}
