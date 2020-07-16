import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    componentRef;
    modalIsClosing = false;
    modalIsOpen = false;
    transitionDuration;

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
    ) { }

    createPortal() {
        const portal = document.createElement('div');
        portal.classList.add('fab-modal-portal');

        document.body.append(portal);
    }

    closeModal() {
        let duration;
        let modalEl;
        let transitionDuration;

        modalEl = document.querySelector('.fab-modal');
        duration = window.getComputedStyle(modalEl).transitionDuration;
        transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;

        this.modalIsClosing = true;

        setTimeout(() => {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
        }, transitionDuration + 1);
    }

    openModal(component, params?) {
        let element;
        let portal;

        if (!document.querySelector('.fab-modal-portal')) {
            this.createPortal();
        }

        portal = document.querySelector('.fab-modal-portal');

        this.componentRef = this.resolver.resolveComponentFactory(component).create(this.injector, null, portal);
        this.appRef.attachView(this.componentRef.hostView);

        Object.keys(params).map(paramKey => {
            this.componentRef.instance[paramKey] = params[paramKey];
        });

        element = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        // portal.appendChild(element);
        this.modalIsClosing = false;
    }
}
