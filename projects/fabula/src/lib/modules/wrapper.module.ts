import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { WrapperComponent } from '../components/wrapper/wrapper.component';

@NgModule({
    declarations: [WrapperComponent],
    entryComponents: [
        WrapperComponent
    ],
    imports: [CommonModule],
    exports: [WrapperComponent]
})
export class WrapperModule { }
