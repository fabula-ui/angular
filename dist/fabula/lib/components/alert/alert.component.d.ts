import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { Icon } from '../../models/icon.model';
import { FabulaService } from '../../services/fabula.service';
export declare class AlertComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    border: boolean;
    borderColor: string;
    clear: boolean;
    closeButton: boolean;
    color: string;
    faded: boolean;
    glow: boolean;
    icon: Icon;
    invert: boolean;
    marker: string;
    outline: boolean;
    text: string;
    textColor: string;
    title: string;
    titleColor: string;
    type: string;
    visible: boolean;
    close: EventEmitter<any>;
    closing: any;
    hasProperty: {
        visible: boolean;
    };
    host: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    closeAlert(): void;
    handleType(): void;
}
