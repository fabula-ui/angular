import { AfterViewInit, ElementRef, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
export declare class TooltipDirective implements AfterViewInit {
    private appRef;
    private elRef;
    private injector;
    private resolver;
    tooltip: any;
    tooltipColor: string;
    tooltipLabel: string;
    tooltipOffset: any;
    tooltipPlacement: string;
    componentRef: any;
    left: any;
    top: any;
    constructor(appRef: ApplicationRef, elRef: ElementRef, injector: Injector, resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    createPortal(): void;
    createTooltip(host: any): void;
    destroyTooltip(): void;
    getCoords(host: any): {
        left: any;
        top: any;
    };
    handleTooltip(): void;
}
