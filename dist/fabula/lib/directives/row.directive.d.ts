import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
export declare class RowDirective implements AfterViewInit {
    private elRef;
    private renderer;
    row: any;
    constructor(elRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
}
