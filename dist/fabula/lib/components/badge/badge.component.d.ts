import { OnInit, ElementRef } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class BadgeComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    circle: boolean;
    clear: boolean;
    color: string;
    darken: boolean;
    faded: boolean;
    glow: boolean;
    invert: boolean;
    label: string;
    lighten: boolean;
    outline: boolean;
    placement: string;
    placementX: string;
    placementY: string;
    rounded: boolean;
    size: string;
    inline: boolean;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
