import { AfterViewInit, ElementRef } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class DropdownHeaderComponent extends CommonComponent implements AfterViewInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    color: string;
    label: string;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
}
