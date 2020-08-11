import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchInputComponent } from '../components/search-input/search-input.component';

// Modules
import { ButtonModule } from './button.module';
import { InnerIconModule } from './inner-icon.module';
import { InputModule } from './input.module';

@NgModule({
    declarations: [
        SearchInputComponent,
    ],
    entryComponents: [
        SearchInputComponent
    ],
    imports: [
        ButtonModule,
        CommonModule,
        InnerIconModule,
        InputModule
    ],
    exports: [
        SearchInputComponent
    ]
})
export class SearchInputModule { }
