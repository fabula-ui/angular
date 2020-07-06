import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-size',
    templateUrl: './dropdown-size.wrapper.html'
})
export class DropdownSizeWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

}
