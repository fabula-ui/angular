import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
    declarations: [
        ButtonComponent,
    ],
    entryComponents: [
        ButtonComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ButtonComponent
    ]
})
export class ButtonModule { }
