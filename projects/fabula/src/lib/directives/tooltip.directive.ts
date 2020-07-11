import { AfterViewInit, Directive, ElementRef, Input, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';

// Components
import { TooltipComponent } from '../components/tooltip/tooltip.component';

@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit {
    @Input() tooltip: any;

    left;
    top;

    constructor(
        private appRef: ApplicationRef,
        private elRef: ElementRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver
    ) { }

    ngAfterViewInit() {
        const portal = document.querySelector('.fab-tooltip-portal');

        if (!portal) {
            this.createPortal();
        }

        this.handleTooltip();
        this.createTooltip();

        // host.setAttribute('data-size', host.getAttribute('size'));
    }

    createPortal() {
        const portal = document.createElement('div');
        portal.classList.add('fab-tooltip-portal');

        document.body.append(portal);
    }

    createTooltip() {
        const componentRef = this.resolver.resolveComponentFactory(TooltipComponent).create(this.injector);
        const portal = document.querySelector('.fab-tooltip-portal');

        // attach component to the appRef so that so that it will be dirty checked.
        this.appRef.attachView(componentRef.hostView);

        // get DOM element from component
        const element = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        element.style.position = 'absolute';
        element.style.left = `${this.left}px`;
        element.style.top = `${this.top}px`;
        portal.appendChild(element);

        return componentRef;
    }

    handleTooltip() {
        const host = this.elRef.nativeElement;
        const height = host.offsetHeight;
        const width = host.offsetWidth;
        const x = host.offsetLeft;
        const y = host.offsetTop;
        let left;
        let top;

        if (this.tooltip.placement === 'bottom') {
            left = x + width / 2;
            top = y + height;
        } else if (this.tooltip.placement === 'left') {
            left = x;
            top = y + height / 2;
        } else if (this.tooltip.placement === 'right') {
            left = x + width;
            top = y + height / 2;
        } else {
            left = x + width / 2;
            top = y;
        }

        console.log(left, top);

        this.left = left;
        this.top = top;
    }

}
