import { ElementRef } from '@angular/core';
import { CommonDirective } from './common.directive';
export declare class BlockDirective extends CommonDirective {
    elRef: ElementRef;
    block: any;
    constructor(elRef: ElementRef);
}
