import { Component, OnInit } from '@angular/core';

// Services
import { ModalService } from '../../../../public-api';

@Component({
    selector: 'app-modal-example',
    templateUrl: './modal-example.component.html'
})
export class ModalExampleComponent implements OnInit {

    constructor(private modalService: ModalService) { }

    ngOnInit() {
    }

    closeModal() {
        this.modalService.closeModal();
    }

}
