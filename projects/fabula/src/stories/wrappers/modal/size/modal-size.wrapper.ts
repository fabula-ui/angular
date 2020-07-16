import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../public-api';
import { ModalExampleComponent } from '../example/modal-example.component';

@Component({
    selector: 'app-modal-size',
    templateUrl: './modal-size.wrapper.html'
})
export class ModalSizeWrapper implements OnInit {

    constructor(public modalService: ModalService) { }

    ngOnInit() {
    }

    // Methods
    handleOpen(size) {
        this.modalService.openModal(ModalExampleComponent, { size });
    }

}
