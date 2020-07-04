import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-glow',
    templateUrl: './dropdown-glow.wrapper.html'
})
export class DropdownGlowWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        console.log('Clicked');
    }

}
