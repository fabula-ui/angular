import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CloseButtonComponent } from '../components/close-button/close-button.component';

// Modules
import { IconsModule } from '../modules/icons.module';

@NgModule({
    declarations: [
        CloseButtonComponent
    ],
    entryComponents: [
        CloseButtonComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        CloseButtonComponent
    ]
})
export class CloseButtonModule { }
