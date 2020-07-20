import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-alignment',
    templateUrl: './dropdown-alignment.wrapper.html'
})
export class DropdownAlignmentWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

}
