import { AfterViewInit, ElementRef } from '@angular/core';
export declare class FlexDirective implements AfterViewInit {
    private elRef;
    basis: any;
    direction: string;
    flex: any;
    flow: string;
    grow: any;
    shrink: any;
    wrap: string;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
