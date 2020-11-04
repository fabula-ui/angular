import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// Components
import { DividerComponent } from '../components/divider/divider.component';

@NgModule({
    declarations: [DividerComponent],
    entryComponents: [
        DividerComponent
    ],
    imports: [CommonModule],
    exports: [DividerComponent]
})
export class DividerModule { }
