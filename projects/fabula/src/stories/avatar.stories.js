import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeModule,
    HelpersModule,
    IconsModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule,
} from '../public-api';

// Examples
import { AvatarExternalBadgeExample } from './wrappers/avatar/external-badge/example/avatar-external-badge.example';

// Example
import { AvatarExampleWrapper } from './wrappers/avatar/example/avatar-example.wrapper';

// Props
import { AvatarColorWrapper } from './wrappers/avatar/color/avatar-color.wrapper';
import { AvatarDarkenWrapper } from './wrappers/avatar/darken/avatar-darken.wrapper';
import { AvatarFadedWrapper } from './wrappers/avatar/faded/avatar-faded.wrapper';
import { AvatarIconWrapper } from './wrappers/avatar/icon/avatar-icon.wrapper';
import { AvatarLightenWrapper } from './wrappers/avatar/lighten/avatar-lighten.wrapper';
import { AvatarExternalBadgeWrapper } from './wrappers/avatar/external-badge/avatar-external-badge.wrapper';
import { AvatarRoundedWrapper } from './wrappers/avatar/rounded/avatar-rounded.wrapper';
import { AvatarShowInitialsWrapper } from './wrappers/avatar/show-initials/avatar-show-initials.wrapper';
import { AvatarSizeWrapper } from './wrappers/avatar/size/avatar-size.wrapper';

// Utils
import { AvatarUtilMarginWrapper } from './wrappers/avatar/util-margin/avatar-util-margin.wrapper';
import { AvatarUtilVisibilityWrapper } from './wrappers/avatar/util-visibility/avatar-util-visibility.wrapper';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                AvatarExternalBadgeExample,
            ],
            entryComponents: [
                AvatarExternalBadgeExample
            ],
            imports: [
                AvatarModule,
                BadgeModule,
                BrowserModule,
                IconsModule,
                HelpersModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule,
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Avatar'
}

export const Example = () => ({
    component: AvatarExampleWrapper,
});

export const PropColor = () => ({
    component: AvatarColorWrapper,
});

export const PropDarken = () => ({
    component: AvatarDarkenWrapper,
});

export const PropFaded = () => ({
    component: AvatarFadedWrapper,
});

export const PropIcon = () => ({
    component: AvatarIconWrapper,
});

export const PropLighten = () => ({
    component: AvatarLightenWrapper,
});

export const PropRounded = () => ({
    component: AvatarRoundedWrapper,
});

export const PropShowInitials = () => ({
    component: AvatarShowInitialsWrapper,
});

export const PropSize = () => ({
    component: AvatarSizeWrapper,
});

export const UtilMargin = () => ({
    component: AvatarUtilMarginWrapper,
});

export const UtilVisibility = () => ({
    component: AvatarUtilVisibilityWrapper,
});

export const ExternalBadge = () => ({
    component: AvatarExternalBadgeWrapper,
});
