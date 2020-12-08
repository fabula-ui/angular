import { AfterViewInit, ElementRef } from '@angular/core';
export declare class FlowDirective implements AfterViewInit {
    private elRef;
    flow: any;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
