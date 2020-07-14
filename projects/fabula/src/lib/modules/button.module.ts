import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ButtonComponent } from '../components/button/button.component';

// Modules
import { InnerIconModule } from '../modules/inner-icon.module';


@NgModule({
    declarations: [
        ButtonComponent,
    ],
    entryComponents: [
        ButtonComponent
    ],
    imports: [
        CommonModule,
        InnerIconModule
    ],
    exports: [
        ButtonComponent
    ]
})
export class ButtonModule { }
