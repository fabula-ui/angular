import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { BadgeComponent } from '../components/badge/badge.component';

@NgModule({
    declarations: [
        BadgeComponent
    ],
    entryComponents: [
        BadgeComponent
    ],
    imports: [CommonModule],
    exports: [
        BadgeComponent
    ]
})
export class BadgeModule { }
