import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    IconsModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { IconColorWrapper } from './wrappers/icon/color/icon-color.wrapper';
import { IconExampleWrapper } from './wrappers/icon/example/icon-example.wrapper';
import { IconSizeWrapper } from './wrappers/icon/size/icon-size.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
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