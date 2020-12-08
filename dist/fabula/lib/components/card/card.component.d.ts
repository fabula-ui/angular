import { ElementRef, OnInit, QueryList, AfterViewInit } from '@angular/core';
import { CardImageComponent } from '../card-image/card-image.component';
import { CardSectionComponent } from '../card-section/card-section.component';
import { CommonComponent } from '../common-component/common-component.component';
import { FabulaService } from '../../services/fabula.service';
export declare class CardComponent extends CommonComponent implements AfterViewInit, OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    cardImageComponents: QueryList<CardImageComponent>;
    cardSectionComponents: QueryList<CardSectionComponent>;
    color: string;
    glow: boolean;
    layout: string;
    padding: boolean;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
