import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    IconsModule,
    ThemeModule,
    ThemeService,
    UtilsModule,
    WrapperModule
} from '../public-api';

// Props
import { ButtonBorderWrapper } from './wrappers/button/border/button-border.wrapper';
import { ButtonCircleWrapper } from './wrappers/button/circle/button-circle.wrapper';
import { ButtonClearWrapper } from './wrappers/button/clear/button-clear.wrapper';
import { ButtonColorWrapper } from './wrappers/button/color/button-color.wrapper';
import { ButtonCompactWrapper } from './wrappers/button/compact/button-compact.wrapper';
import { ButtonDarkenWrapper } from './wrappers/button/darken/button-darken.wrapper';
import { ButtonDisabledWrapper } from './wrappers/button/disabled/button-disabled.wrapper';
import { ButtonExampleWrapper } from './wrappers/button/example/button-example.wrapper';
import { ButtonExpandWrapper } from './wrappers/button/expand/button-expand.wrapper';
import { ButtonFadedWrapper } from './wrappers/button/faded/button-faded.wrapper';
import { ButtonGlowWrapper } from './wrappers/button/glow/button-glow.wrapper';
import { ButtonGradientWrapper } from './wrappers/button/gradient/button-gradient.wrapper';
import { ButtonInvertWrapper } from './wrappers/button/invert/button-invert.wrapper';
import { ButtonOutlineWrapper } from './wrappers/button/outline/button-outline.wrapper';
import { ButtonRoundedWrapper } from './wrappers/button/rounded/button-rounded.wrapper';
import { ButtonSizeWrapper } from './wrappers/button/size/button-size.wrapper';
import { ButtonWideWrapper } from './wrappers/button/wide/button-wide.wrapper';

// Utils
import { ButtonUtilMarginWrapper } from './wrappers/button/util-margin/button-util-margin.wrapper';
import { ButtonUtilPaddingWrapper } from './wrappers/button/util-padding/button-util-padding.wrapper';
import { ButtonUtilVisibilityWrapper } from './wrappers/button/util-visibility/button-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                ButtonModule,
                BrowserModule,
                ButtonModule,
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
    title: 'Button'
}

// Stories
export const Example = () => ({ component: ButtonExampleWrapper });
export const PropBorder = () => ({ component: ButtonBorderWrapper });
export const PropCircle = () => ({ component: ButtonCircleWrapper });
export const PropClear = () => ({ component: ButtonClearWrapper });
export const PropColor = () => ({ component: ButtonColorWrapper });
export const PropCompact = () => ({ component: ButtonCompactWrapper });
export const PropDarken = () => ({ component: ButtonDarkenWrapper });
export const PropDisabled = () => ({ component: ButtonDisabledWrapper });
export const PropExpand = () => ({ component: ButtonExpandWrapper });
export const PropFaded = () => ({ component: ButtonFadedWrapper });
export const PropGlow = () => ({ component: ButtonGlowWrapper });
export const PropGradient = () => ({ component: ButtonGradientWrapper });
export const PropInvert = () => ({ component: ButtonInvertWrapper });
export const PropOutline = () => ({ component: ButtonOutlineWrapper });
export const PropRounded = () => ({ component: ButtonRoundedWrapper });
export const PropSize = () => ({ component: ButtonSizeWrapper });
export const PropWide = () => ({ component: ButtonWideWrapper });
export const UtilMargin = () => ({ component: ButtonUtilMarginWrapper });
export const UtilPadding = () => ({ component: ButtonUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: ButtonUtilVisibilityWrapper });