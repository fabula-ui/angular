import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ElementComponent } from '../components/element/element.component';

@NgModule({
    declarations: [ElementComponent],
    entryComponents: [
        ElementComponent
    ],
    imports: [CommonModule],
    exports: [ElementComponent]
})
export class ElementModule { }
