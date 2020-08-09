import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-examples',
    templateUrl: './dropdown-examples.wrapper.html'
})
export class DropdownExamplesWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

    handleClose() {
        alert('close');
    }

    handleOpen() {
        alert('open');
    }

    handleToggle() {
        alert('toggle');
    }

}
