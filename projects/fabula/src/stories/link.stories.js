import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    IconsModule,
    LinkModule,
    TextModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { LinkColorWrapper } from './wrappers/link/color/link-color.wrapper';
import { LinkExampleWrapper } from './wrappers/link/example/link-example.wrapper';
import { LinkSizeWrapper } from './wrappers/link/size/link-size.wrapper';
import { LinkUnderlineWrapper } from './wrappers/link/underline/link-underline.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                IconsModule,
                LinkModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: []
        })
    ],
    title: 'Link'
}

// Stories
export const Example = () => ({ component: LinkExampleWrapper });
export const PropColor = () => ({ component: LinkColorWrapper });
export const PropSize = () => ({ component: LinkSizeWrapper });
export const PropUnderline = () => ({ component: LinkUnderlineWrapper });