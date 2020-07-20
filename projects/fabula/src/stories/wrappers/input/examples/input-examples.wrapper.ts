import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-examples',
    templateUrl: './input-examples.wrapper.html'
})
export class InputExamplesWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    // Methods
    handleChange(e) {
        console.log('Change', e);
    }

    handleInput(e) {
        console.log('Input', e);
    }

    handleKeyDown(e) {
        console.log('Keydown', e);
    }

    handleKeyUp(e) {
        console.log('Keyup', e);
    }

}
