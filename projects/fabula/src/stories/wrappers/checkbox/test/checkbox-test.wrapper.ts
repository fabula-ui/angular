import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkbox-test',
    templateUrl: './checkbox-test.wrapper.html'
})
export class CheckboxTestWrapper implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    handleEvent(text) {
        alert(text);
    }

}
