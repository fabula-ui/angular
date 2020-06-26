import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    IconsModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { ButtonCircleWrapper } from './wrappers/button/circle/button-circle.wrapper';
import { ButtonClearWrapper } from './wrappers/button/clear/button-clear.wrapper';
import { ButtonColorWrapper } from './wrappers/button/color/button-color.wrapper';
import { ButtonCompactWideWrapper } from './wrappers/button/compact-wide/button-compact-wide.wrapper';
import { ButtonDisabledWrapper } from './wrappers/button/disabled/button-disabled.wrapper';
import { ButtonExpandWrapper } from './wrappers/button/expand/button-expand.wrapper';
import { ButtonExternalBadgeWrapper } from './wrappers/button/external-badge/button-external-badge.wrapper';
import { ButtonFadedWrapper } from './wrappers/button/faded/button-faded.wrapper';
import { ButtonGlowWrapper } from './wrappers/button/glow/button-glow.wrapper';
import { ButtonGradientWrapper } from './wrappers/button/gradient/button-gradient.wrapper';
import { ButtonInvertWrapper } from './wrappers/button/invert/button-invert.wrapper';
import { ButtonOutlineWrapper } from './wrappers/button/outline/button-outline.wrapper';
import { ButtonRoundedWrapper } from './wrappers/button/rounded/button-rounded.wrapper';
import { ButtonSizeWrapper } from './wrappers/button/size/button-size.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                ButtonComponent,
                ButtonGroupComponent
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
    title: 'Button'
}

// Stories
export const Circle = () => ({ component: ButtonCircleWrapper });
export const Clear = () => ({ component: ButtonClearWrapper });
export const Color = () => ({ component: ButtonColorWrapper });
export const CompactVsWide = () => ({ component: ButtonCompactWideWrapper });
export const Disabled = () => ({ component: ButtonDisabledWrapper });
export const Expand = () => ({ component: ButtonExpandWrapper });
export const Faded = () => ({ component: ButtonFadedWrapper });
export const Glow = () => ({ component: ButtonGlowWrapper });
export const Gradient = () => ({ component: ButtonGradientWrapper });
export const Invert = () => ({ component: ButtonInvertWrapper });
export const Outline = () => ({ component: ButtonOutlineWrapper });
export const Rounded = () => ({ component: ButtonRoundedWrapper });
export const Size = () => ({ component: ButtonSizeWrapper });
export const ExternalBadge = () => ({ component: ButtonExternalBadgeWrapper });