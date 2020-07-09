import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonComponent,
    InputComponent,
    IconsModule,
    SearchInputComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { SearchInputExamplesWrapper } from './wrappers/search-input/examples/search-input-examples.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonComponent,
                InputComponent,
                SearchInputComponent,
            ],
            imports: [
                BrowserModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Search Input'
}

// Stories
export const Examples = () => ({ component: SearchInputExamplesWrapper });