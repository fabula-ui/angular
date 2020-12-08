import { AfterViewInit, ElementRef } from '@angular/core';
import { CommonDirective } from './common.directive';
export declare class VisibilityDirective extends CommonDirective implements AfterViewInit {
    elRef: ElementRef;
    hidden: boolean;
    visible: boolean;
    constructor(elRef: ElementRef);
}
