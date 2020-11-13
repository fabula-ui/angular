import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DividerComponent } from '../components/divider/divider.component';
import { ListComponent } from '../components/list/list.component';
import { ListHeaderComponent } from '../components/list-header/list-header.component';
import { ListItemComponent } from '../components/list-item/list-item.component';


@NgModule({
    declarations: [
        DividerComponent,
        ListComponent,
        ListHeaderComponent,
        ListItemComponent
    ],
    entryComponents: [
        DividerComponent,
        ListHeaderComponent,
        ListItemComponent
    ],
    imports: [CommonModule],
    exports: [
        DividerComponent,
        ListComponent,
        ListHeaderComponent,
        ListItemComponent
    ]
})
export class ListModule { }
