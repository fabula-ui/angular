import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-item-example',
    templateUrl: './list-item.example.html'
})
export class ListItemExample implements OnInit {
    @Input() button = false;
    @Input() color: string;
    @Input() href: string;

    constructor() { }

    ngOnInit() {}
}
