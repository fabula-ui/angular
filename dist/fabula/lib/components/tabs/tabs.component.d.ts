import { OnInit, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { SegmentsComponent } from '../segments/segments.component';
import { TabComponent } from '../tab/tab.component';
import { FabulaService } from '../../services/fabula.service';
export declare class TabsComponent extends SegmentsComponent implements AfterViewInit, OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    tabComponents: QueryList<TabComponent>;
    alignment: string;
    props: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
