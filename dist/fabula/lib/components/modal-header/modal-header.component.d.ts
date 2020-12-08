import { AfterViewChecked, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ModalSectionComponent } from '../modal-section/modal-section.component';
import { FabulaService } from '../../services/fabula.service';
import { CloseButtonComponent } from '../close-button/close-button.component';
export declare class ModalHeaderComponent extends ModalSectionComponent implements AfterViewChecked, AfterViewInit {
    cdRef: ChangeDetectorRef;
    elRef: ElementRef;
    fabulaService: FabulaService;
    clickedClose: EventEmitter<{}>;
    closeButton: CloseButtonComponent;
    init: boolean;
    constructor(cdRef: ChangeDetectorRef, elRef: ElementRef, fabulaService: FabulaService);
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    closeModal(): void;
}
