import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    BadgeComponent,
    IconsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { BadgeCircleWrapper } from './wrappers/badge/circle/badge-circle.wrapper';
import { BadgeClearWrapper } from './wrappers/badge/clear/badge-clear.wrapper';
import { BadgeColorWrapper } from './wrappers/badge/color/badge-color.wrapper';
import { BadgeFadedWrapper } from './wrappers/badge/faded/badge-faded.wrapper';
import { BadgeInvertWrapper } from './wrappers/badge/invert/badge-invert.wrapper';
import { BadgeOutlineWrapper } from './wrappers/badge/outline/badge-outline.wrapper';
import { BadgeRoundedWrapper } from './wrappers/badge/rounded/badge-rounded.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                TextComponent
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
    title: 'Badge'
}

// Stories
export const Circle = () => ({ component: BadgeCircleWrapper });
export const Clear = () => ({ component: BadgeClearWrapper });
export const Color = () => ({ component: BadgeColorWrapper });
export const Faded = () => ({ component: BadgeFadedWrapper });
export const Invert = () => ({ component: BadgeInvertWrapper });
export const Outline = () => ({ component: BadgeOutlineWrapper });
export const Rounded = () => ({ component: BadgeRoundedWrapper });