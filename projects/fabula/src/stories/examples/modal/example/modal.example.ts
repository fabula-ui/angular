import { Component, Input } from '@angular/core';

// Services
import { ModalService } from '../../../../public-api';

@Component({
    selector: 'app-modal-example',
    templateUrl: './modal.example.html'
})
export class ModalExample {
    @Input() color: string;
    @Input() size = 'lg';

    constructor(private modalService: ModalService) { }

    handleClose() {
        this.modalService.closeModal();
    }
}
