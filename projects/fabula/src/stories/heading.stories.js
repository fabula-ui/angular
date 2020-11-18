import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    HeadingModule,
    HelpersModule,
    TextModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Props
import { HeadingColorWrapper } from './wrappers/heading/color/heading-color.wrapper';
import { HeadingExampleWrapper } from './wrappers/heading/example/heading-example.wrapper';
import { HeadingLevelWrapper } from './wrappers/heading/level/heading-level.wrapper';
import { HeadingWeightWrapper } from './wrappers/heading/weight/heading-weight.wrapper';

// Utils
import { HeadingUtilMarginWrapper } from './wrappers/heading/util-margin/heading-util-margin.wrapper';
import { HeadingUtilPaddingWrapper } from './wrappers/heading/util-padding/heading-util-padding.wrapper';
import { HeadingUtilVisibilityWrapper } from './wrappers/heading/util-visibility/heading-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                HeadingModule,
                HelpersModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: []
        })
    ],
    title: 'Heading'
}

// Stories
export const Example = () => ({ component: HeadingExampleWrapper });
export const PropColor = () => ({ component: HeadingColorWrapper });
export const PropLevel = () => ({ component: HeadingLevelWrapper });
export const PropWeight = () => ({ component: HeadingWeightWrapper });
export const UtilMargin = () => ({ component: HeadingUtilMarginWrapper });
export const UtilPadding = () => ({ component: HeadingUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: HeadingUtilVisibilityWrapper });