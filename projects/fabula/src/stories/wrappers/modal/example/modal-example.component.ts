import { Component, Input } from '@angular/core';

// Services
import { ModalService } from '../../../../public-api';

@Component({
    selector: 'app-modal-example',
    templateUrl: './modal-example.component.html'
})
export class ModalExampleComponent {
    @Input() color: string;
    
    constructor(private modalService: ModalService) { }

    handleClose() {
        this.modalService.closeModal();
    }

}
