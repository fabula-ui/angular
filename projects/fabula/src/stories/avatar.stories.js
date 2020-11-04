import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeComponent,
    IconsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule,
    WrapperModule
} from '../public-api';

// Wrappers
import { AvatarExampleWrapper } from './wrappers/avatar/example/avatar-example.wrapper';
import { AvatarColorWrapper } from './wrappers/avatar/color/avatar-color.wrapper';
import { AvatarDarkenWrapper } from './wrappers/avatar/darken/avatar-darken.wrapper';
import { AvatarFadedWrapper } from './wrappers/avatar/faded/avatar-faded.wrapper';
import { AvatarIconWrapper } from './wrappers/avatar/icon/avatar-icon.wrapper';
import { AvatarLightenWrapper } from './wrappers/avatar/lighten/avatar-lighten.wrapper';

import { AvatarExternalBadgeWrapper } from './wrappers/avatar/external-badge/avatar-external-badge.wrapper';
import { AvatarRoundedWrapper } from './wrappers/avatar/rounded/avatar-rounded.wrapper';
import { AvatarShowInitialsWrapper } from './wrappers/avatar/show-initials/avatar-show-initials.wrapper';
import { AvatarSizeWrapper } from './wrappers/avatar/size/avatar-size.wrapper';

// Examples
import { AvatarExternalBadgeExample } from './wrappers/avatar/external-badge/example/avatar-external-badge.example';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                AvatarExternalBadgeExample,
                BadgeComponent,
                TextComponent
            ],
            entryComponents: [
                AvatarExternalBadgeExample
            ],
            imports: [
                AvatarModule,
                BrowserModule,
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

export const ShowInitials = () => ({
    component: AvatarShowInitialsWrapper,
});

export const PropSize = () => ({
    component: AvatarSizeWrapper,
});

export const ExternalBadge = () => ({
    component: AvatarExternalBadgeWrapper,
});
