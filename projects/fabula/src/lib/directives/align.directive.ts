import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

@Directive({
    selector: '[align],[al-h],[al-v],[align-h],[align-v]'
})
export class AlignDirective implements AfterViewInit {
    @Input('al') al: any;
    @Input('al-h') alH: any;
    @Input('al-v') alV: any;
    @Input() align: any;
    @Input('align-h') alignH: any;
    @Input('align-v') alignV: any;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const props = {
            al: this.al,
            alH: this.alH,
            alV: this.alV,
            align: this.align,
            alignH: this.alignH,
            alignV: this.alignV
        };

        this.themeService.attachUtils(host, 'align', props);
    }

}
