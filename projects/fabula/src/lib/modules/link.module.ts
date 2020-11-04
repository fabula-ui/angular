import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { LinkComponent } from '../components/link/link.component';

@NgModule({
    declarations: [LinkComponent],
    entryComponents: [LinkComponent],
    imports: [CommonModule],
    exports: [LinkComponent]
})
export class LinkModule { }
