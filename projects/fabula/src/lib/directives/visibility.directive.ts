import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Directives
import { CommonDirective } from './common.directive';

@Directive({
    selector: '[hidden],[visible]'
})
export class VisibilityDirective extends CommonDirective implements AfterViewInit {
    @Input() hidden: boolean;
    @Input() visible: boolean;

    constructor(public elRef: ElementRef) { super(elRef); }
}