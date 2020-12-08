import { OnInit, ElementRef } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FabulaService } from '../../services/fabula.service';
export declare class TabContentComponent extends ContentComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
