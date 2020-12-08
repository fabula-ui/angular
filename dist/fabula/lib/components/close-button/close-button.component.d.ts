import { ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class CloseButtonComponent extends CommonComponent implements AfterViewInit {
    cdRef: ChangeDetectorRef;
    elRef: ElementRef;
    fabulaService: FabulaService;
    color: string;
    parentColor: string;
    size: string;
    constructor(cdRef: ChangeDetectorRef, elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
}
