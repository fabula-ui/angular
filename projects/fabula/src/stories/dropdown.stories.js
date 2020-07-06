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
import { DropdownDirectionWrapper } from './wrappers/dropdown/direction/dropdown-direction.wrapper';
import { DropdownExpandWrapper } from './wrappers/dropdown/expand/dropdown-expand.wrapper';
import { DropdownExamplesWrapper } from './wrappers/dropdown/examples/dropdown-examples.wrapper';
import { DropdownGlowWrapper } from './wrappers/dropdown/glow/dropdown-glow.wrapper';
import { DropdownSizeWrapper } from './wrappers/dropdown/size/dropdown-size.wrapper';

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
export const Direction = () => ({ component: DropdownDirectionWrapper });
export const Expand = () => ({ component: DropdownExpandWrapper });
export const Glow = () => ({ component: DropdownGlowWrapper });
export const Size = () => ({ component: DropdownSizeWrapper });