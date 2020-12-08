import { AfterViewInit, ElementRef } from '@angular/core';
export declare class CommonDirective implements AfterViewInit {
    elRef: ElementRef;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
