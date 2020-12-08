import { ElementRef, AfterViewInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class InnerIconComponent extends CommonComponent implements AfterViewInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    color: string;
    icon: any;
    parentProps: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
}
