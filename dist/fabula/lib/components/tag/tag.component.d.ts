import { ElementRef, AfterViewInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
interface Placement {
    x: string;
    y: string;
}
export declare class TagComponent extends CommonComponent implements AfterViewInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    button: boolean;
    color: string;
    clear: boolean;
    faded: boolean;
    glow: boolean;
    href: string;
    invert: boolean;
    link: string;
    outline: boolean;
    placement: Placement;
    rel: string;
    rounded: boolean;
    size: string;
    target: string;
    inline: boolean;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
}
export {};
