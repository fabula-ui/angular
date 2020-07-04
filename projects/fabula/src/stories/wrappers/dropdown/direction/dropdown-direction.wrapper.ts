import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-direction',
    templateUrl: './dropdown-direction.wrapper.html'
})
export class DropdownDirectionWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

}
