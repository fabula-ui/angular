
import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ToggleComponent } from '../components/toggle/toggle.component';

@NgModule({
    declarations: [
        ToggleComponent
    ],
    entryComponents: [
        ToggleComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ToggleComponent
    ]
})
export class ToggleModule { }
