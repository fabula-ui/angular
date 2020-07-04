import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-custom-content',
    templateUrl: './dropdown-custom-content.wrapper.html'
})
export class DropdownCustomContentWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

}
