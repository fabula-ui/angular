import { Component } from '@angular/core';
import { ModalService } from '../../../../public-api';
import { ModalExample } from '../../../examples/modal/example/modal.example';

@Component({
    templateUrl: './modal-size.wrapper.html'
})
export class ModalSizeWrapper {
    constructor(public modalService: ModalService) { }

    // Methods
    handleOpen(size) {
        this.modalService.openModal(ModalExample, { size });
    }

}
