import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InnerIconComponent } from '../components/inner-icon/inner-icon.component';


@NgModule({
    declarations: [
        InnerIconComponent,
    ],
    entryComponents: [
        InnerIconComponent
    ],
    imports: [CommonModule],
    exports: [
        InnerIconComponent
    ]
})
export class InnerIconModule { }
