import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { Icon } from '../../models/icon.model';
import { FabulaService } from '../../services/fabula.service';
export declare class CheckboxComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    activeColor: string;
    checked: boolean;
    color: string;
    disabled: boolean;
    inactiveColor: string;
    indeterminate: boolean;
    label: string;
    readOnly: boolean;
    rounded: boolean;
    size: string;
    change: EventEmitter<any>;
    check: EventEmitter<any>;
    uncheck: EventEmitter<any>;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    handleChange(e?: any): void;
    handleEvents(): void;
    readonly currentIcon: Icon;
}
