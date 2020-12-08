import { AfterViewInit, ElementRef } from '@angular/core';
export declare class SegmentsDirective implements AfterViewInit {
    private elRef;
    segmentIsActive: boolean;
    segmentName: string;
    segmentScope: string;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
