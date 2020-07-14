import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InnerIconComponent } from '../components/inner-icon/inner-icon.component';
import { LinkComponent } from '../components/link/link.component';
import { ToastComponent } from '../components/toast/toast.component';

// Modules
import { ButtonModule } from '../modules/button.module';
import { InnerIconModule } from '../modules/inner-icon.module';

@NgModule({
    declarations: [
        LinkComponent,
        ToastComponent,
    ],
    entryComponents: [
        LinkComponent,
        InnerIconComponent,
        ToastComponent
    ],
    imports: [
        ButtonModule,
        CommonModule,
        InnerIconModule
    ],
    exports: [
        LinkComponent,
        ToastComponent
    ]
})
export class ToastModule { }
