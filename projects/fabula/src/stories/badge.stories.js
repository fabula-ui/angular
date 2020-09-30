import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeComponent,
    ButtonModule,
    DividerModule,
    ElementModule,
    HeadingModule,
    IconsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule,
    WrapperModule
} from '../public-api';

// Wrappers
import { BadgeClearWrapper } from './wrappers/badge/clear/badge-clear.wrapper';
import { BadgeColorWrapper } from './wrappers/badge/color/badge-color.wrapper';
import { BadgeDarkenWrapper } from './wrappers/badge/darken/badge-darken.wrapper';
import { BadgeExampleWrapper } from './wrappers/badge/example/badge-example.wrapper';
import { BadgeFadedWrapper } from './wrappers/badge/faded/badge-faded.wrapper';
import { BadgeInvertWrapper } from './wrappers/badge/invert/badge-invert.wrapper';
import { BadgeLightenWrapper } from './wrappers/badge/lighten/badge-lighten.wrapper';
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
                AvatarModule,
                BrowserModule,
                ButtonModule,
                DividerModule,
                ElementModule,
                HeadingModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule,
                WrapperModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Badge'
}

// Stories
export const Example = () => ({ component: BadgeExampleWrapper });
export const PropClear = () => ({ component: BadgeClearWrapper });
export const PropColor = () => ({ component: BadgeColorWrapper });
export const PropDarken = () => ({ component: BadgeDarkenWrapper });
export const PropFaded = () => ({ component: BadgeFadedWrapper });
export const PropInvert = () => ({ component: BadgeInvertWrapper });
export const PropLighten = () => ({ component: BadgeLightenWrapper });
export const PropOutline = () => ({ component: BadgeOutlineWrapper });
export const PropRounded = () => ({ component: BadgeRoundedWrapper });