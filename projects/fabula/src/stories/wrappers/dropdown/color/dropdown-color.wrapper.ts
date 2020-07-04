import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-color',
    templateUrl: './dropdown-color.wrapper.html'
})
export class DropdownColorWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

}
