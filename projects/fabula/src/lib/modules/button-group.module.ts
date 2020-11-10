import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ButtonGroupComponent } from '../components/button-group/button-group.component';


@NgModule({
    declarations: [
        ButtonGroupComponent,
    ],
    entryComponents: [
        ButtonGroupComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ButtonGroupComponent
    ]
})
export class ButtonGroupModule { }
