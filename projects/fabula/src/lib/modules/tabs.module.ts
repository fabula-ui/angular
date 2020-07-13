import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SegmentComponent } from '../components/segment/segment.component';
import { SegmentsComponent } from '../components/segments/segments.component';
import { TabComponent } from '../components/tab/tab.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { TabContentComponent } from '../components/tab-content/tab-content.component';
import { SelectorComponent } from '../components/selector/selector.component';

@NgModule({
    declarations: [
        SegmentComponent,
        SegmentsComponent,
        SelectorComponent,
        TabComponent,
        TabsComponent,
        TabContentComponent
    ],
    entryComponents: [
        SegmentComponent,
        SegmentsComponent,
        SelectorComponent,
        TabComponent,
        TabsComponent,
        TabContentComponent
    ],
    imports: [CommonModule],
    exports: [
        SegmentComponent,
        SegmentsComponent,
        SelectorComponent,
        TabComponent,
        TabsComponent,
        TabContentComponent
    ]
})
export class TabsModule { }
