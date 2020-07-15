import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../public-api';
import { ModalExampleComponent } from '../example/modal-example.component';

@Component({
    selector: 'app-modal-examples',
    templateUrl: './modal-examples.wrapper.html'
})
export class ModalExamplesWrapper implements OnInit {

    constructor(public modalService: ModalService) { }

    ngOnInit() {
    }

    // Methods
    openModal() {
        this.modalService.openModal(ModalExampleComponent, {});
    }

}
