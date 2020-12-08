import { AfterViewChecked, ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Icon } from '../../models/icon.model';
import { FabulaService } from '../../services/fabula.service';
export declare class DropdownToggleComponent extends ButtonComponent implements AfterViewChecked, OnInit {
    cdRef: ChangeDetectorRef;
    elRef: ElementRef;
    fabulaService: FabulaService;
    arrow: boolean;
    direction: string;
    icon: Icon;
    label: string;
    isOpen: boolean;
    toggle: EventEmitter<any>;
    labelEl: ElementRef;
    constructor(cdRef: ChangeDetectorRef, elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    handleClick(): void;
    readonly arrowIsOnlyChild: boolean;
}
