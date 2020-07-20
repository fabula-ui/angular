import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from '../components/card/card.component';

// Modules
import { CardSectionComponent } from '../components/card-section/card-section.component';
import { CardImageComponent } from '../components/card-image/card-image.component';


@NgModule({
    declarations: [
        CardComponent,
        CardImageComponent,
        CardSectionComponent
    ],
    entryComponents: [
        CardImageComponent,
        CardSectionComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardComponent,
        CardImageComponent,
        CardSectionComponent
    ]
})
export class CardModule { }
