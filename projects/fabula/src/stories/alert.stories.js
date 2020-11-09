import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AlertModule,
    AvatarModule,
    ButtonModule,
    ButtonGroupComponent,
    HelpersModule,
    IconsModule,
    TextModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Examples
import { AlertExample } from './examples/alert/alert.example';

// Example
import { AlertExamplesWrapper } from './wrappers/alert/examples/alert-examples.wrapper';

// Props
import { AlertBorderWrapper } from './wrappers/alert/border/alert-border.wrapper';
import { AlertClearWrapper } from './wrappers/alert/clear/alert-clear.wrapper';
import { AlertCloseButtonWrapper } from './wrappers/alert/close-button/alert-close-button.wrapper';
import { AlertColorWrapper } from './wrappers/alert/color/alert-color.wrapper';
import { AlertFadedWrapper } from './wrappers/alert/faded/alert-faded.wrapper';
import { AlertGlowWrapper } from './wrappers/alert/glow/alert-glow.wrapper';
import { AlertIconWrapper } from './wrappers/alert/icon/alert-icon.wrapper';
import { AlertInvertWrapper } from './wrappers/alert/invert/alert-invert.wrapper';
import { AlertMarkerWrapper } from './wrappers/alert/marker/alert-marker.wrapper';
import { AlertOutlineWrapper } from './wrappers/alert/outline/alert-outline.wrapper';
import { AlertTextColorWrapper } from './wrappers/alert/text-color/alert-text-color.wrapper';
import { AlertTitleColorWrapper } from './wrappers/alert/title-color/alert-title-color.wrapper';
import { AlertTypeWrapper } from './wrappers/alert/type/alert-type.wrapper';

// Utils
import { AlertUtilMarginWrapper } from './wrappers/alert/util-margin/alert-util-margin.wrapper';
import { AlertUtilPaddingWrapper } from './wrappers/alert/util-padding/alert-util-padding.wrapper';
import { AlertUtilVisibilityWrapper } from './wrappers/alert/util-visibility/alert-util-visibility.wrapper';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                AlertExample,
                ButtonGroupComponent,
            ],
            entryComponents: [
                AlertExample
            ],
            imports: [
                AlertModule,
                AvatarModule,
                BrowserModule,
                ButtonModule,
                HelpersModule,
                IconsModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: []
        })
    ],
    title: 'Alert'
}

export const Example = () => ({
    component: AlertExamplesWrapper,
});

export const PropBorder = () => ({
    component: AlertBorderWrapper,
});

export const PropClear = () => ({
    component: AlertClearWrapper,
});

export const PropCloseButton = () => ({
    component: AlertCloseButtonWrapper,
});

export const PropColor = () => ({
    component: AlertColorWrapper,
});

export const PropFaded = () => ({
    component: AlertFadedWrapper,
});

export const PropGlow = () => ({
    component: AlertGlowWrapper,
});

export const PropIcon = () => ({
    component: AlertIconWrapper,
});

export const PropInvert = () => ({
    component: AlertInvertWrapper,
});

export const PropMarker = () => ({
    component: AlertMarkerWrapper,
});

export const PropOutline = () => ({
    component: AlertOutlineWrapper,
});

export const PropTextColor = () => ({
    component: AlertTextColorWrapper,
});

export const PropTitleColor = () => ({
    component: AlertTitleColorWrapper,
});

export const PropType = () => ({
    component: AlertTypeWrapper,
});

export const UtilMargin = () => ({
    component: AlertUtilMarginWrapper,
});

export const UtilPadding = () => ({
    component: AlertUtilPaddingWrapper,
});

export const UtilVisibility = () => ({
    component: AlertUtilVisibilityWrapper,
});