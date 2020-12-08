import { OnInit, ElementRef } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class LinkComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    color: string;
    href: string;
    label: string;
    props: any;
    rel: string;
    size: string;
    target: string;
    underline: boolean;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
