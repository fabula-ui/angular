import { Component, ElementRef, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';

@Component({
    selector: 'fab-close-button',
    templateUrl: './close-button.component.html'
})
export class CloseButtonComponent implements OnInit {
    @Input() color: string;
    @Input() parentColor: string;
    @Output() click: EventEmitter<any> = new EventEmitter();

    host;

    constructor(
        public elRef: ElementRef
    ) { }

    ngOnInit() {
        let props;
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set props
        props = {
            color: this.color || this.parentColor
        };

        // Set and apply styles
        styles = css(CloseButtonStyles({ framework: 'angular', props }));
        this.host.classList.add(styles);
    }

    handleClick() {
        this.click.emit();
    }
}
