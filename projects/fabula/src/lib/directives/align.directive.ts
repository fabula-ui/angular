import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Directives
import { CommonDirective } from './common.directive';

@Directive({
    selector: '[al],[alH],[alV], [align], [alignH],[alignV]'
})
export class AlignDirective extends CommonDirective implements AfterViewInit {
    @Input('al') al: any;
    @Input('alH') alH: any;
    @Input('alV') alV: any;
    @Input() align: any;
    @Input('alignH') alignH: any;
    @Input('alignV') alignV: any;

    constructor(public elRef: ElementRef) { super(elRef); }
}
