import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AlertComponent } from '../components/alert/alert.component';
import { CloseButtonComponent } from '../components/close-button/close-button.component';

// Modules
import { InnerIconModule } from '../modules/inner-icon.module';
import { TextModule } from '../modules/text.module';

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
        InnerIconModule,
        TextModule
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule { }
