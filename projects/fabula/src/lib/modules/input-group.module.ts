import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InputGroupComponent } from '../components/input-group/input-group.component';

@NgModule({
    declarations: [
        InputGroupComponent,
    ],
    entryComponents: [
        InputGroupComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InputGroupComponent
    ]
})
export class InputGroupModule { }
