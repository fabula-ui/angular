import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SegmentComponent } from '../components/segment/segment.component';
import { SegmentsComponent } from '../components/segments/segments.component';

// Directives
import { SegmentsDirective } from '../directives/segments.directive';

@NgModule({
    declarations: [
        SegmentComponent,
        SegmentsComponent,
        SegmentsDirective
    ],
    imports: [CommonModule],
    exports: [
        SegmentComponent,
        SegmentsComponent,
        SegmentsDirective
    ]
})
export class SegmentsModule { }
