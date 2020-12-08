import { AfterViewInit, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
export declare class ColumnDirective implements AfterViewInit {
    private componentFactoryResolver;
    private elRef;
    private renderer;
    private target;
    col: any;
    colDown: any;
    colNotOn: any;
    colOn: any;
    colUp: any;
    constructor(componentFactoryResolver: ComponentFactoryResolver, elRef: ElementRef, renderer: Renderer2, target: ViewContainerRef);
    ngAfterViewInit(): void;
}
