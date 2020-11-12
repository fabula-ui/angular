import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InputComponent } from '../components/input/input.component';

// Modules
import { IconsModule } from './icons.module';

@NgModule({
    declarations: [
        InputComponent,
    ],
    entryComponents: [
        InputComponent
    ],
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        InputComponent
    ]
})
export class InputModule { }
