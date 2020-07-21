import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CloseButtonComponent } from '../components/close-button/close-button.component';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalBodyComponent } from '../components/modal-body/modal-body.component';
import { ModalFooterComponent } from '../components/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../components/modal-header/modal-header.component';
import { ModalSectionComponent } from '../components/modal-section/modal-section.component';

@NgModule({
    declarations: [
        CloseButtonComponent,
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent
    ],
    entryComponents: [
        CloseButtonComponent,
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CloseButtonComponent,
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent
    ]
})
export class ModalModule { }