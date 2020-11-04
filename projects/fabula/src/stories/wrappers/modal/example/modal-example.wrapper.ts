import { Component } from '@angular/core';
import { ModalService } from '../../../../public-api';
import { ModalExample } from '../../../examples/modal/example/modal.example';

@Component({
    templateUrl: './modal-example.wrapper.html'
})
export class ModalExampleWrapper {
    constructor(public modalService: ModalService) { }

    // Methods
    openModal() {
        this.modalService.openModal(ModalExample, {});
    }
}
