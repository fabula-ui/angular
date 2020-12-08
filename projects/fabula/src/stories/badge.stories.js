import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeModule,
    ButtonModule,
    DividerModule,
    HeadingModule,
    HelpersModule,
    IconsModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule,
} from '../public-api';

// Props
import { BadgeClearWrapper } from './wrappers/badge/clear/badge-clear.wrapper';
import { BadgeColorWrapper } from './wrappers/badge/color/badge-color.wrapper';
import { BadgeDarkenWrapper } from './wrappers/badge/darken/badge-darken.wrapper';
import { BadgeExampleWrapper } from './wrappers/badge/example/badge-example.wrapper';
import { BadgeFadedWrapper } from './wrappers/badge/faded/badge-faded.wrapper';
import { BadgeInvertWrapper } from './wrappers/badge/invert/badge-invert.wrapper';
import { BadgeLightenWrapper } from './wrappers/badge/lighten/badge-lighten.wrapper';
import { BadgeOutlineWrapper } from './wrappers/badge/outline/badge-outline.wrapper';
import { BadgeRoundedWrapper } from './wrappers/badge/rounded/badge-rounded.wrapper';

// Utils
import { BadgeUtilMarginWrapper } from './wrappers/badge/util-margin/badge-util-margin.wrapper';
import { BadgeUtilPaddingWrapper } from './wrappers/badge/util-padding/badge-util-padding.wrapper';
import { BadgeUtilVisibilityWrapper } from './wrappers/badge/util-visibility/badge-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                AvatarModule,
                BadgeModule,
                BrowserModule,
                ButtonModule,
                DividerModule,
                HeadingModule,
                HelpersModule,
                IconsModule,
                TextModule,
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
export const Example = () => ({ component: BadgeExampleWrapper });
export const PropClear = () => ({ component: BadgeClearWrapper });
export const PropColor = () => ({ component: BadgeColorWrapper });
export const PropDarken = () => ({ component: BadgeDarkenWrapper });
export const PropFaded = () => ({ component: BadgeFadedWrapper });
export const PropInvert = () => ({ component: BadgeInvertWrapper });
export const PropLighten = () => ({ component: BadgeLightenWrapper });
export const PropOutline = () => ({ component: BadgeOutlineWrapper });
export const PropRounded = () => ({ component: BadgeRoundedWrapper });
export const UtilMargin = () => ({ component: BadgeUtilMarginWrapper });
export const UtilPadding = () => ({ component: BadgeUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: BadgeUtilVisibilityWrapper });