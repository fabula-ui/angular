import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

@Directive({
    selector: '[grow]'
})
export class GrowDirective implements AfterViewInit {
    @Input() grow: any;

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const parent = element.parentNode;
        const wrapper = document.createElement('div');
        const props = {
            grow: this.grow
        };

        this.renderer.insertBefore(parent, wrapper, element);
        this.renderer.appendChild(wrapper, element);

        this.themeService.attachUtils(wrapper, 'grow', props);
    }

}
