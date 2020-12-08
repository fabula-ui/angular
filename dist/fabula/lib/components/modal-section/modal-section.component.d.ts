import { OnInit, ElementRef } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class ModalSectionComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    adaptColor: boolean;
    color: string;
    darken: boolean;
    divider: string;
    dividerColor: string;
    lighten: boolean;
    padding: boolean;
    parentColor: string;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
