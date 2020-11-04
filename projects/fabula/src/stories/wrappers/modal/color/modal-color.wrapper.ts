import { Component } from '@angular/core';
import { ModalService } from '../../../../public-api';
import { ModalExample } from '../../../examples/modal/example/modal.example';

@Component({
    templateUrl: './modal-color.wrapper.html'
})
export class ModalColorWrapper {
    constructor(public modalService: ModalService) { }

    // Methods
    handleOpen(color) {
        this.modalService.openModal(ModalExample, { color });
    }
}
