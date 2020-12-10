import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ToastComponent } from '../components/toast/toast.component';

// Modules
import { ButtonModule } from './button.module';
import { IconsModule } from './icons.module';
import { LinkModule } from './link.module';

// Services
import { ToastService } from '../services/toast.service';
import { ToastStackComponent } from '../components/toast-stack/toast-stack.component';
import { ToastPortalComponent } from '../components/toast-portal/toast-portal.component';


@NgModule({
    declarations: [
        ToastComponent,
        ToastPortalComponent,
        ToastStackComponent
    ],
    entryComponents: [
        ToastComponent,
        ToastPortalComponent,
        ToastStackComponent
    ],
    imports: [
        ButtonModule,
        CommonModule,
        IconsModule,
        LinkModule
    ],
    exports: [
        ToastComponent,
        ToastPortalComponent,
        ToastStackComponent
    ],
    providers: [
        ToastService
    ]
})
export class ToastModule { }
