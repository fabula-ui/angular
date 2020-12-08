import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class CardSectionComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    color: string;
    darken: boolean;
    divider: string;
    expand: boolean;
    faded: boolean;
    layout: string;
    lighten: boolean;
    padding: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
