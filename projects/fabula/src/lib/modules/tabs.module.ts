import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SegmentComponent } from '../components/segment/segment.component';
import { SegmentsComponent } from '../components/segments/segments.component';
import { TabComponent } from '../components/tab/tab.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { SelectorComponent } from '../components/selector/selector.component';

@NgModule({
    declarations: [
        SegmentComponent,
        SegmentsComponent,
        SelectorComponent,
        TabComponent,
        TabsComponent
    ],
    entryComponents: [
        SegmentComponent,
        SegmentsComponent,
        SelectorComponent,
        TabComponent,
        TabsComponent
    ],
    imports: [CommonModule],
    exports: [
        SegmentComponent,
        SegmentsComponent,
        SelectorComponent,
        TabComponent,
        TabsComponent
    ]
})
export class TabsModule { }
