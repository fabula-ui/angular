import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { Icon } from '../../models/icon.model';
import { FabulaService } from '../../services/fabula.service';
export declare class AvatarComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    color: string;
    darken: boolean;
    faded: boolean;
    icon: Icon;
    lighten: boolean;
    rounded: boolean;
    showInitials: string;
    size: string;
    src: string;
    inline: boolean;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    readonly initials: string;
}
