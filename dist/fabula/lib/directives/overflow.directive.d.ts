import { AfterViewInit, ElementRef } from '@angular/core';
import { CommonDirective } from './common.directive';
export declare class OverflowDirective extends CommonDirective implements AfterViewInit {
    elRef: ElementRef;
    ov: any;
    ovX: any;
    ovY: any;
    constructor(elRef: ElementRef);
}
