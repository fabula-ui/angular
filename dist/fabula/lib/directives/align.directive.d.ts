import { AfterViewInit, ElementRef } from '@angular/core';
import { CommonDirective } from './common.directive';
export declare class AlignDirective extends CommonDirective implements AfterViewInit {
    elRef: ElementRef;
    al: any;
    alH: any;
    alV: any;
    align: any;
    alignH: any;
    alignV: any;
    constructor(elRef: ElementRef);
}
