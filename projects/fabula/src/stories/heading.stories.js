import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    HeadingModule,
    TextModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { HeadingColorWrapper } from './wrappers/heading/color/heading-color.wrapper';
import { HeadingExampleWrapper } from './wrappers/heading/example/heading-example.wrapper';
import { HeadingLevelWrapper } from './wrappers/heading/level/heading-level.wrapper';
import { HeadingWeightWrapper } from './wrappers/heading/weight/heading-weight.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                HeadingModule,
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