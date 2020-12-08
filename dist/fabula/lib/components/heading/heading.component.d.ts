import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class HeadingComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    color: string;
    level: number;
    weight: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
