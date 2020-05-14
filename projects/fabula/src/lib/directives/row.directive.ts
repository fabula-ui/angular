import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

@Directive({
    selector: '[row]'
})
export class RowDirective implements AfterViewInit {
    @Input() row: any;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const props = {};

        this.themeService.attachUtils(host, 'row', props);
    }

}
