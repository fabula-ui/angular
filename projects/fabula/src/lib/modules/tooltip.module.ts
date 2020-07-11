import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { TooltipComponent } from '../components/tooltip/tooltip.component';

// Directives
import { TooltipDirective } from '../directives/tooltip.directive';

@NgModule({
    declarations: [
        TooltipComponent,
        TooltipDirective
    ],
    entryComponents: [
        TooltipComponent
    ],
    imports: [CommonModule],
    exports: [
        TooltipComponent,
        TooltipDirective
    ]
})
export class TooltipModule { }
