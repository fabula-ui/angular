import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchInputComponent } from '../components/search-input/search-input.component';

// Modules
import { ButtonModule } from './button.module';
import { IconsModule } from './icons.module';
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
        IconsModule,
        InputModule
    ],
    exports: [
        SearchInputComponent
    ]
})
export class SearchInputModule { }
