import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ColumnComponent } from '../components/column/column.component';
import { ContainerComponent } from '../components/container/container.component';
import { RowComponent } from '../components/row/row.component';

@NgModule({
    declarations: [
        ColumnComponent,
        ContainerComponent,
        RowComponent
    ],
    entryComponents: [
        ColumnComponent,
        ContainerComponent,
        RowComponent
    ],
    imports: [CommonModule],
    exports: [
        ColumnComponent,
        ContainerComponent,
        RowComponent
    ]
})
export class GridModule { }
