import { ElementRef, OnChanges } from '@angular/core';
import { FabulaService } from '../../services/fabula.service';
export declare class CommonComponent implements OnChanges {
    elRef: ElementRef;
    fabulaService: FabulaService;
    props: any;
    down: any;
    on: any;
    up: any;
    additionalProps: any;
    additionalStyles: any;
    callbacks: any;
    host: any;
    styles: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnChanges(): void;
    applyStyles(stylesFn: any): void;
    initStyles(): void;
    refreshStyles(): void;
}
