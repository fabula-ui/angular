import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

@Directive({
    selector: '[flex]'
})
export class FlexDirective implements AfterViewInit {
    @Input() flex: any;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const props = {
            flex: element.hasAttribute('flex'),
        };

        this.themeService.attachUtils(element, 'flex', props);
    }

}
