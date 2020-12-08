import { ElementRef, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FabulaService } from '../../services/fabula.service';
export declare class SegmentContentComponent extends ContentComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
