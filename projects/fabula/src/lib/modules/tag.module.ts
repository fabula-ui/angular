
import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TagComponent } from '../components/tag/tag.component';

@NgModule({
    declarations: [
        TagComponent
    ],
    entryComponents: [
        TagComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TagComponent
    ]
})
export class TagModule { }
