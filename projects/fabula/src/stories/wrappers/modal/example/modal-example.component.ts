import { Component, OnInit, Input } from '@angular/core';

// Services
import { ModalService } from '../../../../public-api';

@Component({
    selector: 'app-modal-example',
    templateUrl: './modal-example.component.html'
})
export class ModalExampleComponent implements OnInit {
    @Input() color: string;
    
    init = false;

    constructor(private modalService: ModalService) { }

    ngOnInit() {
        this.init = true;
    }

    closeModal() {
        this.modalService.closeModal();
    }

}
