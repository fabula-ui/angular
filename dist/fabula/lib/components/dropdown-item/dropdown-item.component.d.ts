import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class DropdownItemComponent extends CommonComponent implements AfterViewInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    button: boolean;
    color: string;
    clickToClose: boolean;
    href: string;
    invert: boolean;
    label: string;
    parentColor: string;
    props: any;
    rel: string;
    size: string;
    target: string;
    clicked: EventEmitter<{}>;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
    handleClick(): void;
}
