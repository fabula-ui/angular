import { Component, ElementRef, OnInit, ViewEncapsulation, Input, AfterViewInit } from '@angular/core';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    templateUrl: './tooltip.component.html'
})
export class TooltipComponent implements AfterViewInit {
    @Input() host: any;
    @Input() offset: string;
    @Input() placement = 'top';

    public color = 'default';
    public cornerStyle = 'hard';
    public element: any;
    public hostElement: any;
    public props: any;
    public title = '';
    public tooltipElement: any;
    public wrapper: any;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService,
    ) {
    }

    ngAfterViewInit() {
        this.element = this.elRef.nativeElement;
        this.wrapper = this.element.querySelector('[data-fab-wrapper]') || this.host;
        this.hostElement = this.host.querySelector('[data-fab-component]') || this.host;
        this.tooltipElement = this.element.querySelector('[data-fab-component]');

        this.props = {
            color: this.color,
            cornerStyle: this.cornerStyle,
            placement: this.placement
        };

        this.setStyles();
        this.setPosition();
    }

    // Methods
    setPosition() {
        this.wrapper.style.left = `${this.tooltipPosition.left}px`;
        this.wrapper.style.marginLeft = this.tooltipOffset.marginLeft;
        this.wrapper.style.marginTop = this.tooltipOffset.marginTop;
        this.wrapper.style.top = `${this.tooltipPosition.top}px`;

        this.tooltipElement.setAttribute('data-visible', true);
        this.wrapper.setAttribute('data-placement', this.placement);
    }

    setStyles() {
        
    }

    // Getters
    get tooltipOffset() {
        const offset = {
            marginLeft: null,
            marginTop: null
        };
        let value;

        if (this.offset) {
            value = +this.offset ? `${this.offset}px` : this.offset;

            switch (this.placement) {
                case 'bottom':
                    offset.marginTop = value;
                    break;
                case 'left':
                    offset.marginLeft = `-${value}`;
                    break;
                case 'right':
                    offset.marginLeft = value;
                    break;
                default:
                    offset.marginTop = `-${value}`;
            }
        }

        return offset;
    }

    get tooltipPosition() {
        const scrollContext = document.documentElement ? document.documentElement : document.body;
        const hostClientRect = this.hostElement.getBoundingClientRect();
        const hostOffsetLeft = hostClientRect.left + scrollContext.scrollLeft;
        const hostOffsetTop = hostClientRect.top + scrollContext.scrollTop;
        const position = {
            left: null,
            top: null
        };

        switch (this.placement) {
            case 'bottom':
                position.left = hostOffsetLeft + (this.hostElement.clientWidth / 2) - (this.tooltipElement.clientWidth / 2);
                position.top = hostOffsetTop + this.hostElement.clientHeight;
                break;
            case 'left':
                position.left = hostOffsetLeft - this.tooltipElement.clientWidth;
                position.top = hostOffsetTop + (this.hostElement.clientHeight / 2) - (this.tooltipElement.clientHeight / 2);
                break;
            case 'right':
                position.left = hostOffsetLeft + this.hostElement.clientWidth;
                position.top = hostOffsetTop + (this.hostElement.clientHeight / 2) - (this.tooltipElement.clientHeight / 2);
                break;
            default:
                position.left = hostOffsetLeft + (this.hostElement.clientWidth / 2) - (this.tooltipElement.clientWidth / 2);
                position.top = hostOffsetTop - this.wrapper.offsetHeight;
        }

        return position;
    }

}
