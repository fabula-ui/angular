import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

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
        const host = this.elRef.nativeElement;
        const props = {
            flex: this.flex
        };

        this.themeService.attachUtils(host, 'flex', props);
    }

}
