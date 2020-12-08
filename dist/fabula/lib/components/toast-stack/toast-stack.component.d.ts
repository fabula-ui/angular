import { OnInit, ElementRef } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class ToastStackComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    placement: any;
    toasts: Array<any>;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    readonly visibleToasts: any[];
}
