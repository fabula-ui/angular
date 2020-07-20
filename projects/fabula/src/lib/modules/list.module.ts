import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DividerComponent } from '../components/divider/divider.component';
import { ListComponent } from '../components/list/list.component';
import { ListItemComponent } from '../components/list-item/list-item.component';


@NgModule({
    declarations: [
        DividerComponent,
        ListComponent,
        ListItemComponent
    ],
    entryComponents: [
        DividerComponent,
        ListItemComponent
    ],
    imports: [CommonModule],
    exports: [
        DividerComponent,
        ListComponent,
        ListItemComponent
    ]
})
export class ListModule { }
