import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-avatar-external-badge-example',
    templateUrl: './avatar-external-badge.example.html'
})
export class AvatarExternalBadgeExample implements OnInit {
    @Input() color: string;
    @Input() mb: any;

    constructor() { }

    ngOnInit() {
    }

}
