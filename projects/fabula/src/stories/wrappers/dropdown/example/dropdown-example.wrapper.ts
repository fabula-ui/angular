import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-example',
    templateUrl: './dropdown-example.wrapper.html'
})
export class DropdownExampleWrapper implements OnInit {
    items = [
        {
            clickToClose: true,
            label: 'Dropdown Item 1'
        },
        {
            label: 'Dropdown Item 2'
        },
        {
            label: 'Dropdown Item 3'
        }
    ]

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
