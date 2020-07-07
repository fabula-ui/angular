import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tag-anchor-and-button',
    templateUrl: './tag-anchor-and-button.wrapper.html'
})
export class TagAnchorAndButtonWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        alert('Hey! It works!');
    }

}
