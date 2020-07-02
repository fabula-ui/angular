import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CardComponent,
    CardImageComponent,
    CardSectionComponent,
    IconsModule,
    ListComponent,
    ListItemComponent,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { CardImageAdaptColorWrapper } from './wrappers/card-image/adapt-color/card-image-adapt-color.wrapper';
import { CardImageColorWrapper } from './wrappers/card-image/color/card-image-color.wrapper';
import { CardImageCustomIconWrapper } from './wrappers/card-image/custom-icon/card-image-custom-icon.wrapper';
import { CardImageExternalTagWrapper } from './wrappers/card-image/external-tag/card-image-external-tag.wrapper';
import { CardImageHeightWrapper } from './wrappers/card-image/height/card-image-height.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CardComponent,
                CardImageComponent,
                CardSectionComponent,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent,
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
    title: 'CardImage'
}

// Stories
export const AdaptColor = () => ({ component: CardImageAdaptColorWrapper });
export const Color = () => ({ component: CardImageColorWrapper });
export const CustomIcon = () => ({ component: CardImageCustomIconWrapper });
export const Height = () => ({ component: CardImageHeightWrapper });
export const ExternalTag = () => ({ component: CardImageExternalTagWrapper });
