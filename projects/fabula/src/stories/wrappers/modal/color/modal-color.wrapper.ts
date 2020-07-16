import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../public-api';
import { ModalExampleComponent } from '../example/modal-example.component';

@Component({
    selector: 'app-modal-color',
    templateUrl: './modal-color.wrapper.html'
})
export class ModalColorWrapper implements OnInit {

    constructor(public modalService: ModalService) { }

    ngOnInit() {
    }

    // Methods
    handleOpen(color) {
        this.modalService.openModal(ModalExampleComponent, { color });
    }

}
