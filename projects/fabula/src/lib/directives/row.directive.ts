import { AfterViewInit, Directive, ElementRef, Input, Renderer2, TemplateRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';

@Directive({
    selector: '[row]'
})
export class RowDirective implements AfterViewInit {
    @Input() row: any;

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const parent = element.parentNode;
        const wrapper = document.createElement('div');

        wrapper.classList.add('fab-row');

        this.renderer.insertBefore(parent, wrapper, element);
        this.renderer.appendChild(wrapper, element);

        const props = {
            row: true
        };

        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }

}
