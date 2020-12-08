import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class WrapperComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    bgColor: string;
    color: string;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
