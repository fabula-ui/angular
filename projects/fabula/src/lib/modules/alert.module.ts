import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AlertComponent } from '../components/alert/alert.component';
import { CloseButtonComponent } from '../components/close-button/close-button.component';

// Modules
import { IconsModule } from '../modules/icons.module';

@NgModule({
    declarations: [
        AlertComponent,
        CloseButtonComponent
    ],
    entryComponents: [
        AlertComponent,
        CloseButtonComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule { }
