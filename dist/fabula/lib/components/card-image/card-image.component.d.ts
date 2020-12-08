import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { Icon } from '../../models/icon.model';
import { FabulaService } from '../../services/fabula.service';
export declare class CardImageComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    adaptColor: boolean;
    color: string;
    cover: boolean;
    darken: boolean;
    faded: boolean;
    height: any;
    icon: Icon;
    layout: string;
    lighten: boolean;
    src: string;
    width: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
