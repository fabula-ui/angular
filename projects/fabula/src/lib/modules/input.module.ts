import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InputComponent } from '../components/input/input.component';

// Modules
import { InnerIconModule } from './inner-icon.module';

@NgModule({
    declarations: [
        InputComponent,
    ],
    entryComponents: [
        InputComponent
    ],
    imports: [
        CommonModule,
        InnerIconModule
    ],
    exports: [
        InputComponent
    ]
})
export class InputModule { }
