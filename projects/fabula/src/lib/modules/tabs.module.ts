import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TabComponent } from '../components/tab/tab.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { TabContentComponent } from '../components/tab-content/tab-content.component';

// Module
import { SegmentsModule } from './segments.module';

@NgModule({
    declarations: [
        TabComponent,
        TabsComponent,
        TabContentComponent
    ],
    entryComponents: [
        TabComponent,
        TabsComponent,
        TabContentComponent
    ],
    imports: [
        CommonModule,
        SegmentsModule
    ],
    exports: [
        TabComponent,
        TabsComponent,
        TabContentComponent
    ]
})
export class TabsModule { }
