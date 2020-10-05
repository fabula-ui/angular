import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CardModule,
    GridModule,
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

// Examples
import { CardImageExample } from './examples/card-image/example/card-image.example';

// Wrappers
import { CardImageColorWrapper } from './wrappers/card-image/color/card-image-color.wrapper';
import { CardImageDarkenWrapper } from './wrappers/card-image/darken/card-image-darken.wrapper';
import { CardImageExampleWrapper } from './wrappers/card-image/example/card-image-example.wrapper';
import { CardImageFadedWrapper } from './wrappers/card-image/faded/card-image-faded.wrapper';
import { CardImageExternalTagWrapper } from './wrappers/card-image/external-tag/card-image-external-tag.wrapper';
import { CardImageHeightWrapper } from './wrappers/card-image/height/card-image-height.wrapper';
import { CardImageIconWrapper } from './wrappers/card-image/icon/card-image-icon.wrapper';
import { CardImageLightenWrapper } from './wrappers/card-image/lighten/card-image-lighten.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CardImageExample,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent,
            ],
            imports: [
                BrowserModule,
                CardModule,
                GridModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Card Image'
}

// Stories
export const Example = () => ({ component: CardImageExampleWrapper });
export const PropColor = () => ({ component: CardImageColorWrapper });
export const PropDarken = () => ({ component: CardImageDarkenWrapper });
export const PropFaded = () => ({ component: CardImageFadedWrapper });
export const PropHeight = () => ({ component: CardImageHeightWrapper });
export const PropIcon = () => ({ component: CardImageIconWrapper });
export const PropLighten = () => ({ component: CardImageLightenWrapper });
export const ExternalTag = () => ({ component: CardImageExternalTagWrapper });
