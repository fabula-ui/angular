import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkbox-example',
    templateUrl: './checkbox-example.wrapper.html'
})
export class CheckboxExampleWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleEvent(text) {
        alert(text);
    }

}
