import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    HelpersModule,
    IconsModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Props
import { IconColorWrapper } from './wrappers/icon/color/icon-color.wrapper';
import { IconExampleWrapper } from './wrappers/icon/example/icon-example.wrapper';
import { IconSizeWrapper } from './wrappers/icon/size/icon-size.wrapper';

// Utils
import { IconUtilMarginWrapper } from './wrappers/icon/util-margin/icon-util-margin.wrapper';
import { IconUtilVisibilityWrapper } from './wrappers/icon/util-visibility/icon-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                HelpersModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: []
        })
    ],
    title: 'Icon'
}

// Stories
export const Example = () => ({ component: IconExampleWrapper });
export const PropColor = () => ({ component: IconColorWrapper });
export const PropSize = () => ({ component: IconSizeWrapper });
export const UtilMargin = () => ({ component: IconUtilMarginWrapper });
export const UtilVisibility = () => ({ component: IconUtilVisibilityWrapper });