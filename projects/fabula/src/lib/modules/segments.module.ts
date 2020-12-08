import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ContentComponent } from '../components/content/content.component';
import { SegmentComponent } from '../components/segment/segment.component';
import { SegmentContentComponent } from '../components/segment-content/segment-content.component';
import { SegmentsComponent } from '../components/segments/segments.component';
import { SelectorComponent } from '../components/selector/selector.component';

// Directives
import { SegmentsDirective } from '../directives/segments.directive';

@NgModule({
    declarations: [
        ContentComponent,
        SegmentComponent,
        SegmentContentComponent,
        SegmentsComponent,
        SegmentsDirective,
        SelectorComponent
    ],
    entryComponents: [
        SelectorComponent
    ],
    imports: [CommonModule],
    exports: [
        ContentComponent,
        SegmentComponent,
        SegmentContentComponent,
        SegmentsComponent,
        SegmentsDirective
    ]
})
export class SegmentsModule { }
