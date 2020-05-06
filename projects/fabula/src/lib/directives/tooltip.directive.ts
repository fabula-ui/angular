import {
    Directive,
    ElementRef,
    AfterViewInit,
    ComponentFactoryResolver,
    Injector,
    ApplicationRef,
    EmbeddedViewRef
} from '@angular/core';

// Components
import { TooltipComponent } from '../components/tooltip/tooltip.component';

// Models
import {
    ITooltip
} from '../models/tooltip.model';

// Services
import { FabulaService } from '../services/fabula.service';

// Styles
import { TooltipStyles } from '../components/tooltip/tooltip.styles';

@Directive({
    providers: [TooltipStyles],
    selector: '[tooltip]',
})
export class TooltipDirective implements AfterViewInit {
    private color: string;
    private cornerStyle: string;
    private element: any;
    private host: any;
    private offset: string;
    private placement: string;
    private title: string;
    private tooltip: any;
    private tooltipRef: any;
    private wrapper: any;

    constructor(
        private appRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private elRef: ElementRef,
        private fabulaService: FabulaService,
        private injector: Injector,
        private styles: TooltipStyles
    ) {
    }

    ngAfterViewInit() {
        this.host = this.elRef.nativeElement;
        this.element = this.host.querySelector('[data-fab-component]') || this.host;
        this.color = this.host.getAttribute('tooltip-color') || null;
        this.cornerStyle = this.host.getAttribute('tooltip-corner-style') || 'hard';
        this.offset = this.host.getAttribute('tooltip-offset') || null;
        this.placement = this.host.getAttribute('tooltip-placement') || 'top';
        this.title = this.host.getAttribute('tooltip-title') || '';

        this.element.addEventListener('mouseover', () => {
            this.createTooltip();
        });

        this.element.addEventListener('mouseout', () => {
            this.destroyTooltip();
        });
    }

    createTooltip() {
        let tooltipHost;

        this.tooltipRef =
            this.componentFactoryResolver
                .resolveComponentFactory(TooltipComponent)
                .create(this.injector);

        // Passing inputs to component
        this.tooltipRef.instance.color = this.color;
        this.tooltipRef.instance.cornerStyle = this.cornerStyle;
        this.tooltipRef.instance.host = this.host;
        this.tooltipRef.instance.offset = this.offset;
        this.tooltipRef.instance.placement = this.placement;
        this.tooltipRef.instance.title = this.title;

        this.appRef.attachView(this.tooltipRef.hostView);

        tooltipHost = (this.tooltipRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(tooltipHost);

        this.wrapper = tooltipHost.querySelector('[data-fab-wrapper]');
    }

    destroyTooltip() {
        this.appRef.detachView(this.tooltipRef.hostView);
        this.tooltipRef.destroy();
    }

}
