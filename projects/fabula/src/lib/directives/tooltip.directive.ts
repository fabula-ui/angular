import { AfterViewInit, Directive, ElementRef, Input, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef } from '@angular/core';

// Components
import { TooltipComponent } from '../components/tooltip/tooltip.component';

@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective implements AfterViewInit {
    @Input() tooltip: any;

    componentRef;
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

        // host.setAttribute('data-size', host.getAttribute('size'));
    }

    createPortal() {
        const portal = document.createElement('div');
        portal.classList.add('fab-tooltip-portal');

        document.body.append(portal);
    }

    createTooltip(host) {
        const coords = this.getCoords(host);
        this.componentRef = this.resolver.resolveComponentFactory(TooltipComponent).create(this.injector);
        this.componentRef.instance.color = this.tooltip.color;
        this.componentRef.instance.label = this.tooltip.label;
        const portal = document.querySelector('.fab-tooltip-portal');

        // attach component to the appRef so that so that it will be dirty checked.
        this.appRef.attachView(this.componentRef.hostView);

        // get DOM element from component
        const element = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        element.setAttribute('data-placement', this.tooltip.placement);
        element.setAttribute('data-ready', 'true');
        element.style.left = `${coords.left}px`;
        element.style.top = `${coords.top}px`;

        portal.appendChild(element);

        return this.componentRef;
    }

    destroyTooltip() {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }

    getCoords(host) {
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

        return { left, top };
    }

    handleTooltip() {
        const host = this.elRef.nativeElement;
        const component = host.querySelector('[data-fab-component]');
        const target = component || host;

        target.addEventListener('mouseover', () => {
            this.createTooltip(target);
        });

        target.addEventListener('mouseout', () => {
            this.destroyTooltip();
        });
    }

}
