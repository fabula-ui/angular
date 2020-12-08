import { ElementRef } from '@angular/core';
import { SelectorComponent } from '../selector/selector.component';
import { FabulaService } from '../../services/fabula.service';
export declare class SegmentComponent extends SelectorComponent {
    elRef: ElementRef;
    fabulaService: FabulaService;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    childViewInit(): void;
}
