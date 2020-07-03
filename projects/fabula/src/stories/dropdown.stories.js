import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    DropdownModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { DropdownExamplesWrapper } from './wrappers/dropdown/examples/dropdown-examples.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                BrowserModule,
                DropdownModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Dropdown'
}

// Stories
export const Examples = () => ({ component: DropdownExamplesWrapper });