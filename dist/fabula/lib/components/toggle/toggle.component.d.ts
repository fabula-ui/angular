import { OnInit, ElementRef } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class ToggleComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    active: boolean;
    activeColor: string;
    color: string;
    disabled: boolean;
    inactiveColor: string;
    label: string;
    rounded: boolean;
    size: string;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    handleClick(): void;
}
