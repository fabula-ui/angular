import { AfterViewInit, ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[col],[col-down],[col-up],[col-on],[col-not-on]'
})
export class ColumnDirective implements AfterViewInit {
    @Input() col: any;
    @Input('col-down') colDown: any;
    @Input('col-not-on') colNotOn: any;
    @Input('col-on') colOn: any;
    @Input('col-up') colUp: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private elRef: ElementRef,
        private renderer: Renderer2,
        private target: ViewContainerRef,
    ) { }

    ngAfterViewInit() {
        
    }

}
