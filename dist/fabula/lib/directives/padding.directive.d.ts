import { AfterViewInit, ElementRef } from '@angular/core';
export declare class PaddingDirective implements AfterViewInit {
    private elRef;
    p: any;
    pb: any;
    pl: any;
    pr: any;
    pt: any;
    px: any;
    py: any;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
