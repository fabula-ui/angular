import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    componentRef;

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver
    ) { }

    createPortal() {
        const portal = document.createElement('div');
        portal.classList.add('fab-modal-portal');

        document.body.append(portal);
    }

    openModal(component, params) {
        let element;
        let portal;

        if (!document.querySelector('.fab-modal-portal')) {
            this.createPortal();
        }

        portal = document.querySelector('.fab-modal-portal');

        this.componentRef = this.resolver.resolveComponentFactory(component).create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);

        element = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        
        portal.appendChild(element);
    }
}
