import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class TextComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    aux: boolean;
    color: string;
    content: string;
    inline: boolean;
    props: any;
    size: string;
    strong: boolean;
    weight: any;
    wrap: boolean;
    bold: any;
    italic: any;
    medium: any;
    semibold: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
