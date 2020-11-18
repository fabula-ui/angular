import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    HelpersModule,
    IconsModule,
    LinkModule,
    TextModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Props
import { LinkColorWrapper } from './wrappers/link/color/link-color.wrapper';
import { LinkExampleWrapper } from './wrappers/link/example/link-example.wrapper';
import { LinkSizeWrapper } from './wrappers/link/size/link-size.wrapper';
import { LinkUnderlineWrapper } from './wrappers/link/underline/link-underline.wrapper';

// Utils
import { LinkUtilMarginWrapper } from './wrappers/link/util-margin/link-util-margin.wrapper';
import { LinkUtilPaddingWrapper } from './wrappers/link/util-padding/link-util-padding.wrapper';
import { LinkUtilVisibilityWrapper } from './wrappers/link/util-visibility/link-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                HelpersModule,
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
export const UtilMargin = () => ({ component: LinkUtilMarginWrapper });
export const UtilPadding = () => ({ component: LinkUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: LinkUtilVisibilityWrapper });