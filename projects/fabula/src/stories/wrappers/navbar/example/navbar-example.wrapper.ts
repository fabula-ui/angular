import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-navbar-example',
    templateUrl: './navbar-example.wrapper.html'
})
export class NavbarExampleWrapper implements AfterViewInit {
    @Input() color: string;
    @Input() height: any;
    @Input() logo = 'fabula-logo.svg';
    @Input() signInProps = {};
    @Input() signUpProps = {};
    @Input() socialProps = {};
    @Input() tabsProps = {};

    init = false;
    logoSrc;

    constructor() {}

    ngAfterViewInit() {
        this.init = true;
        this.logoSrc = require(`../../../../public/${this.logo}`);
    }
}
