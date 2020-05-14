import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

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
        private elRef: ElementRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const props = {
            col: this.col,
            colDown: this.colDown,
            colNotOn: this.colNotOn,
            colOn: this.colOn,
            colUp: this.colUp
        };

        this.themeService.attachUtils(host, 'column', props);
    }

}
