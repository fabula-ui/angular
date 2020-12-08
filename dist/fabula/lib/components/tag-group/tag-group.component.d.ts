import { ElementRef, OnInit, QueryList, AfterViewInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { TagComponent } from '../tag/tag.component';
import { FabulaService } from '../../services/fabula.service';
export declare class TagGroupComponent extends CommonComponent implements AfterViewInit, OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    tagComponents: QueryList<TagComponent>;
    color: string;
    spacing: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
