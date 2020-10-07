import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu-example',
    templateUrl: './dropdown-menu.example.html'
})
export class DropdownMenuExample {
    @Input() color: string;
    @Input() expand = false;
    constructor() { }
}
