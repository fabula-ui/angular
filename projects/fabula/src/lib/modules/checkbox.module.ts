import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CheckboxComponent } from '../components/checkbox/checkbox.component';

// Modules
import { IconsModule } from '../modules/icons.module';

@NgModule({
    declarations: [
        CheckboxComponent
    ],
    entryComponents: [
        CheckboxComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        CheckboxComponent
    ]
})
export class CheckboxModule { }
