import { ElementRef, OnInit, EventEmitter } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class ListItemComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    button: boolean;
    color: string;
    divider: boolean;
    href: string;
    item: any;
    label: string;
    padding: boolean;
    props: any;
    rel: string;
    striped: boolean;
    target: string;
    clicked: EventEmitter<{}>;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    handleClick(): void;
}
