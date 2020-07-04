import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    DropdownModule,
    IconsModule,
    TagComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { DropdownColorWrapper } from './wrappers/dropdown/color/dropdown-color.wrapper';
import { DropdownCustomContentWrapper } from './wrappers/dropdown/custom-content/dropdown-custom-content.wrapper';
import { DropdownExamplesWrapper } from './wrappers/dropdown/examples/dropdown-examples.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                TagComponent,
                TextComponent
            ],
            imports: [
                BrowserModule,
                DropdownModule,
                IconsModule,
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
export const Color = () => ({ component: DropdownColorWrapper });
export const CustomContent = () => ({ component: DropdownCustomContentWrapper });