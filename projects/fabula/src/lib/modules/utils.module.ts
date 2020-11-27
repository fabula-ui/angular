import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { AlignDirective } from '../directives/align.directive';
import { BlockDirective } from '../directives/block.directive';
import { ColumnDirective } from '../directives/column.directive';
import { FlexDirective } from '../directives/flex.directive';
import { FlowDirective } from '../directives/flow.directive';
import { GrowDirective } from '../directives/grow.directive';
import { MarginDirective } from '../directives/margin.directive';
import { OverflowDirective } from '../directives/overflow.directive';
import { PaddingDirective } from '../directives/padding.directive';
import { RowDirective } from '../directives/row.directive';
import { SizeDirective } from '../directives/size.directive';
import { VisibilityDirective } from '../directives/visibility.directive';

// Services
import { FabulaService } from '../services/fabula.service';

@NgModule({
    declarations: [
        // Directives
        AlignDirective,
        BlockDirective,
        ColumnDirective,
        FlexDirective,
        FlowDirective,
        GrowDirective,
        MarginDirective,
        OverflowDirective,
        PaddingDirective,
        RowDirective,
        SizeDirective,
        VisibilityDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        // Directives
        AlignDirective,
        BlockDirective,
        ColumnDirective,
        FlexDirective,
        FlowDirective,
        GrowDirective,
        OverflowDirective,
        MarginDirective,
        PaddingDirective,
        RowDirective,
        SizeDirective,
        VisibilityDirective
    ]
})
export class UtilsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilsModule,
            providers: [
                FabulaService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: (service: FabulaService) => () => {
                        service.utils = true;
                    },
                    deps: [FabulaService],
                    multi: true
                }
            ]
        };
    }
}
