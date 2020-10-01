import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ColumnComponent } from '../components/column/column.component';
import { RowComponent } from '../components/row/row.component';

@NgModule({
    declarations: [
        ColumnComponent,
        RowComponent
    ],
    entryComponents: [
        ColumnComponent,
        RowComponent
    ],
    imports: [CommonModule],
    exports: [
        ColumnComponent,
        RowComponent
    ]
})
export class GridModule { }
