import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class DividerComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    label: string;
    textColor: string;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
