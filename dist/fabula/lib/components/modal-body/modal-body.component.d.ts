import { OnInit, ElementRef } from '@angular/core';
import { ModalSectionComponent } from '../modal-section/modal-section.component';
import { FabulaService } from '../../services/fabula.service';
export declare class ModalBodyComponent extends ModalSectionComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
}
