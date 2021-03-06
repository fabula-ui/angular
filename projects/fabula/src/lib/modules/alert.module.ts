import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AlertComponent } from '../components/alert/alert.component';

// Modules
import { IconsModule } from '../modules/icons.module';
import { CloseButtonModule } from './close-button.module';

@NgModule({
    declarations: [
        AlertComponent,
    ],
    entryComponents: [
        AlertComponent,
    ],
    imports: [
        CloseButtonModule,
        CommonModule,
        IconsModule,
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule { }
