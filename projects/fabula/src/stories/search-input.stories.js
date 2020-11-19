import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    GridModule,
    HelpersModule,
    IconsModule,
    SearchInputModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Props
import { SearchInputButtonWrapper } from './wrappers/search-input/button/search-input-button.wrapper';
import { SearchInputGlowWrapper } from './wrappers/search-input/glow/search-input-glow.wrapper';
import { SearchInputExampleWrapper } from './wrappers/search-input/example/search-input-example.wrapper';
import { SearchInputRoundedWrapper } from './wrappers/search-input/rounded/search-input-rounded.wrapper';
import { SearchInputSizeWrapper } from './wrappers/search-input/size/search-input-size.wrapper';
import { SearchInputVariantWrapper } from './wrappers/search-input/variant/search-input-variant.wrapper';

// Utils
import { SearchInputUtilMarginWrapper } from './wrappers/search-input/util-margin/search-input-util-margin.wrapper';
import { SearchInputUtilVisibilityWrapper } from './wrappers/search-input/util-visibility/search-input-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                BrowserModule,
                ButtonModule,
                GridModule,
                HelpersModule,
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
export const UtilMargin = () => ({ component: SearchInputUtilMarginWrapper });
export const UtilVisibility = () => ({ component: SearchInputUtilVisibilityWrapper });