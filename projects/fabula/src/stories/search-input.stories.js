import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    GridModule,
    IconsModule,
    SearchInputModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { SearchInputButtonWrapper } from './wrappers/search-input/button/search-input-button.wrapper';
import { SearchInputGlowWrapper } from './wrappers/search-input/glow/search-input-glow.wrapper';
import { SearchInputExampleWrapper } from './wrappers/search-input/example/search-input-example.wrapper';
import { SearchInputRoundedWrapper } from './wrappers/search-input/rounded/search-input-rounded.wrapper';
import { SearchInputSizeWrapper } from './wrappers/search-input/size/search-input-size.wrapper';
import { SearchInputVariantWrapper } from './wrappers/search-input/variant/search-input-variant.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                BrowserModule,
                ButtonModule,
                GridModule,
                IconsModule,
                SearchInputModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Search Input'
}

// Stories
export const Example = () => ({ component: SearchInputExampleWrapper });
export const PropButton = () => ({ component: SearchInputButtonWrapper });
export const PropGlow = () => ({ component: SearchInputGlowWrapper });
export const PropRounded = () => ({ component: SearchInputRoundedWrapper });
export const PropSize = () => ({ component: SearchInputSizeWrapper });
export const PropVariant = () => ({ component: SearchInputVariantWrapper });