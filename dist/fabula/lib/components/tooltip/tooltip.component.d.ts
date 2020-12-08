import { AfterViewInit, ElementRef } from '@angular/core';
export declare class TooltipComponent implements AfterViewInit {
    elRef: ElementRef;
    color: string;
    label: string;
    offset: any;
    placement: string;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
