import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { ModalBodyComponent } from '../modal-body/modal-body.component';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalSectionComponent } from '../modal-section/modal-section.component';
import { ModalService } from '../../services/modal.service';
export declare class ModalComponent implements AfterViewInit {
    elRef: ElementRef;
    modalService: ModalService;
    modalBody: ModalBodyComponent;
    modalFooter: ModalFooterComponent;
    modalHeader: ModalHeaderComponent;
    modalSection: ModalSectionComponent;
    color: string;
    glow: boolean;
    isOpen: boolean;
    size: string;
    close: EventEmitter<any>;
    open: EventEmitter<any>;
    constructor(elRef: ElementRef, modalService: ModalService);
    ngAfterViewInit(): void;
    closeModal(): void;
}
