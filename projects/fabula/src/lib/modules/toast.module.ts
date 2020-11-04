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
import { IconsModule } from './icons.module';
import { InnerIconModule } from '../modules/inner-icon.module';

// Services
import { ToastService } from '../services/toast.service';
import { ToastStackComponent } from '../components/toast-stack/toast-stack.component';
import { ToastPortalComponent } from '../components/toast-portal/toast-portal.component';

@NgModule({
    declarations: [
        LinkComponent,
        ToastComponent,
        ToastPortalComponent,
        ToastStackComponent
    ],
    entryComponents: [
        LinkComponent,
        InnerIconComponent,
        ToastComponent,
        ToastPortalComponent,
        ToastStackComponent
    ],
    imports: [
        ButtonModule,
        CommonModule,
        IconsModule,
        InnerIconModule
    ],
    exports: [
        LinkComponent,
        ToastComponent,
        ToastPortalComponent,
        ToastStackComponent
    ],
    providers: [
        ToastService
    ]
})
export class ToastModule { }
