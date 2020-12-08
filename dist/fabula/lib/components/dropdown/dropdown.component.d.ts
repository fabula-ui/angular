import { ElementRef, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../dropdown-toggle/dropdown-toggle.component';
import { FabulaService } from '../../services/fabula.service';
export declare class DropdownComponent extends CommonComponent implements AfterViewInit, OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    dropdownMenu: DropdownMenuComponent;
    dropdownToggle: DropdownToggleComponent;
    alignment: string;
    direction: string;
    expand: boolean;
    isOpen: boolean;
    close: EventEmitter<any>;
    open: EventEmitter<any>;
    toggle: EventEmitter<any>;
    inline: boolean;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    handleChildren(): void;
    handleClick(e: any): void;
    handleToggle(): void;
}
