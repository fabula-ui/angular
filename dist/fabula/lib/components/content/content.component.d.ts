import { OnInit, ElementRef } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class ContentComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    active: boolean;
    name: string;
    scope: string;
    contentClass: string;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
