import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ElementComponent } from '../components/element/element.component';
import { WrapperComponent } from '../components/wrapper/wrapper.component';

@NgModule({
    declarations: [
        ElementComponent,
        WrapperComponent
    ],
    entryComponents: [
        ElementComponent,
        WrapperComponent
    ],
    imports: [CommonModule],
    exports: [
        ElementComponent,
        WrapperComponent
    ]
})
export class HelpersModule { }
