import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ModalComponent } from '../components/modal/modal.component';
import { ModalBodyComponent } from '../components/modal-body/modal-body.component';
import { ModalFooterComponent } from '../components/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../components/modal-header/modal-header.component';
import { ModalSectionComponent } from '../components/modal-section/modal-section.component';

// Modules
import { CloseButtonModule } from './close-button.module';
import { IconsModule } from '../modules/icons.module';

// Services
import { ModalService } from '../services/modal.service';

@NgModule({
    declarations: [
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent
    ],
    entryComponents: [
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent
    ],
    exports: [
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalSectionComponent
    ],
    imports: [
        CloseButtonModule,
        CommonModule,
        IconsModule
    ],
    providers: [
        ModalService
    ]
})
export class ModalModule { }
