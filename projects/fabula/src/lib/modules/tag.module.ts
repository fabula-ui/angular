
import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TagComponent } from '../components/tag/tag.component';
import { TagGroupComponent } from '../components/tag-group/tag-group.component';

@NgModule({
    declarations: [
        TagComponent,
        TagGroupComponent
    ],
    entryComponents: [
        TagComponent,
        TagGroupComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TagComponent,
        TagGroupComponent
    ]
})
export class TagModule { }
