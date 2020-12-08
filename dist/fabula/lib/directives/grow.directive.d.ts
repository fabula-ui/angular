import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
export declare class GrowDirective implements AfterViewInit {
    private elRef;
    private renderer;
    grow: any;
    constructor(elRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
}
