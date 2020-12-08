import { AfterViewInit, ElementRef } from '@angular/core';
export declare class SizeDirective implements AfterViewInit {
    private elRef;
    expand: boolean;
    height: any;
    width: any;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
