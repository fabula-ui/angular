import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Directives
import { CommonDirective } from './common.directive';

@Directive({
    selector: '[ov],[ovX],[ovY]'
})
export class OverflowDirective extends CommonDirective implements AfterViewInit {
    @Input('ov') ov: any;
    @Input('ovX') ovX: any;
    @Input('ovY') ovY: any;

    constructor(public elRef: ElementRef) { super(elRef); }
}
