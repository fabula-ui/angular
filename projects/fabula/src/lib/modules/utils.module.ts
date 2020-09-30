import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { WrapperComponent } from '../components/wrapper/wrapper.component';

// Directives
import { AlignDirective } from '../directives/align.directive';
import { BlockDirective } from '../directives/block.directive';
import { ColumnDirective } from '../directives/column.directive';
import { FlexDirective } from '../directives/flex.directive';
import { FlowDirective } from '../directives/flow.directive';
import { GrowDirective } from '../directives/grow.directive';
import { MarginDirective } from '../directives/margin.directive';
import { PaddingDirective } from '../directives/padding.directive';
import { RowDirective } from '../directives/row.directive';

@NgModule({
    declarations: [
        // Components
        WrapperComponent,

        // Directives
        AlignDirective,
        BlockDirective,
        ColumnDirective,
        FlexDirective,
        FlowDirective,
        GrowDirective,
        MarginDirective,
        PaddingDirective,
        RowDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        // Components
        WrapperComponent,

        // Directives
        AlignDirective,
        BlockDirective,
        ColumnDirective,
        FlexDirective,
        FlowDirective,
        GrowDirective,
        MarginDirective,
        PaddingDirective,
        RowDirective
    ]
})
export class UtilsModule {}
