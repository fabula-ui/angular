import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// Components
import { HeadingComponent } from '../components/heading/heading.component';

@NgModule({
    declarations: [HeadingComponent],
    entryComponents: [
        HeadingComponent
    ],
    imports: [CommonModule],
    exports: [HeadingComponent]
})
export class HeadingModule { }
