import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './input-example.wrapper.html'
})
export class InputExampleWrapper implements OnInit {
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
