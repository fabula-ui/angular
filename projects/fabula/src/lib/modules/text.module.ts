import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TextComponent } from '../components/text/text.component';

@NgModule({
    declarations: [
        TextComponent
    ],
    entryComponents: [
        TextComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TextComponent
    ]
})
export class TextModule { }
