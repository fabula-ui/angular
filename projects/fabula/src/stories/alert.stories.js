import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AlertModule,
    AvatarModule,
    ButtonModule,
    ButtonGroupComponent,
    IconsModule,
    TextModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Demo wrappers
import { AlertExamplesWrapper } from './wrappers/alert/examples/alert-examples.wrapper';
import { AlertBorderWrapper } from './wrappers/alert/border/alert-border.wrapper';
import { AlertClearWrapper } from './wrappers/alert/clear/alert-clear.wrapper';
import { AlertCloseButtonWrapper } from './wrappers/alert/close-button/alert-close-button.wrapper';
import { AlertColorsWrapper } from './wrappers/alert/colors/alert-colors.wrapper';
import { AlertFadedWrapper } from './wrappers/alert/faded/alert-faded.wrapper';
import { AlertGlowWrapper } from './wrappers/alert/glow/alert-glow.wrapper';
import { AlertIconsWrapper } from './wrappers/alert/icons/alert-icons.wrapper';
import { AlertIconColorsWrapper } from './wrappers/alert/icon-colors/alert-icon-colors.wrapper';
import { AlertInvertWrapper } from './wrappers/alert/invert/alert-invert.wrapper';
import { AlertMarkerWrapper } from './wrappers/alert/marker/alert-marker.wrapper';
import { AlertOutlineWrapper } from './wrappers/alert/outline/alert-outline.wrapper';
import { AlertTextColorWrapper } from './wrappers/alert/text-color/alert-text-color.wrapper';
import { AlertTitleColorWrapper } from './wrappers/alert/title-color/alert-title-color.wrapper';
import { AlertTypeWrapper } from './wrappers/alert/type/alert-type.wrapper';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonGroupComponent
            ],
            imports: [
                AlertModule,
                AvatarModule,
                BrowserModule,
                ButtonModule,
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
    component: AlertColorsWrapper,
});

export const PropFaded = () => ({
    component: AlertFadedWrapper,
});

export const PropGlow = () => ({
    component: AlertGlowWrapper,
});

export const PropIcon = () => ({
    component: AlertIconsWrapper,
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