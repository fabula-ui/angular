import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

// Directives
import { CommonDirective } from './common.directive'

@Directive({
    selector: '[block]'
})
export class BlockDirective extends CommonDirective {
    @Input() block: any;
    constructor(public elRef: ElementRef) { super(elRef) }
}
