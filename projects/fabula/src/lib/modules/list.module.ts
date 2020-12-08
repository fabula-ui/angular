import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ListComponent } from '../components/list/list.component';
import { ListHeaderComponent } from '../components/list-header/list-header.component';
import { ListItemComponent } from '../components/list-item/list-item.component';

// Modules
import { DividerModule } from './divider.module';


@NgModule({
    declarations: [
        ListComponent,
        ListHeaderComponent,
        ListItemComponent
    ],
    entryComponents: [
        ListHeaderComponent,
        ListItemComponent
    ],
    imports: [
        CommonModule,
        DividerModule
    ],
    exports: [
        ListComponent,
        ListHeaderComponent,
        ListItemComponent
    ]
})
export class ListModule { }
