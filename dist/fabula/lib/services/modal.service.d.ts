import { ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';
export declare class ModalService {
    private appRef;
    private injector;
    private resolver;
    componentRef: any;
    modalIsClosing: boolean;
    modalIsOpen: boolean;
    transitionDuration: any;
    constructor(appRef: ApplicationRef, injector: Injector, resolver: ComponentFactoryResolver);
    createPortal(): void;
    closeModal(): void;
    openModal(component: any, params?: any): void;
}
