import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { AlignDirective } from '../directives/align.directive';
import { ColumnDirective } from '../directives/column.directive';
import { FlexDirective } from '../directives/flex.directive';
import { GrowDirective } from '../directives/grow.directive';
import { MarginDirective } from '../directives/margin.directive';
import { PaddingDirective } from '../directives/padding.directive';
import { RowDirective } from '../directives/row.directive';

@NgModule({
    declarations: [
        AlignDirective,
        ColumnDirective,
        FlexDirective,
        GrowDirective,
        MarginDirective,
        PaddingDirective,
        RowDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AlignDirective,
        ColumnDirective,
        FlexDirective,
        GrowDirective,
        MarginDirective,
        PaddingDirective,
        RowDirective
    ]
})
export class UtilsModule { }
