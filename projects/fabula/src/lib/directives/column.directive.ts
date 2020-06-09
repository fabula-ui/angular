import { AfterViewInit,ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';
import { ColumnComponent } from '../components/column/column.component';

// Styles
import UtilsStyles from '@fabula/core/theme/utils';

@Directive({
    selector: '[col],[col-down],[col-up],[col-on],[col-not-on]'
})
export class ColumnDirective implements AfterViewInit {
    @Input() col: any;
    @Input('col-down') colDown: any;
    @Input('col-not-on') colNotOn: any;
    @Input('col-on') colOn: any;
    @Input('col-up') colUp: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private elRef: ElementRef,
        private renderer: Renderer2,
        private target: ViewContainerRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const parent = element.parentNode;
        const wrapper = document.createElement('div');
        const props = {
            col: this.col,
            colDown: this.colDown,
            colNotOn: this.colNotOn,
            colOn: this.colOn,
            colUp: this.colUp
        };

        wrapper.classList.add('fab-column');

        this.renderer.insertBefore(parent, wrapper, element);
        this.renderer.appendChild(wrapper, element);

        wrapper.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }

}
