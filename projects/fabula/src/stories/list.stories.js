import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeModule,
    CardModule,
    GridModule,
    HelpersModule,
    IconsModule,
    ListModule,
    TagModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Examples
import { ListExample } from './examples/list/example/list.example';

// Props
import { ListColorWrapper } from './wrappers/list/color/list-color.wrapper';
import { ListDividerWrapper } from './wrappers/list/divider/list-divider.wrapper';
import { ListExampleWrapper } from './wrappers/list/example/list-example.wrapper';
import { ListPaddingWrapper } from './wrappers/list/padding/list-padding.wrapper';
import { ListStripedWrapper } from './wrappers/list/striped/list-striped.wrapper';

// Utils
import { ListUtilMarginWrapper } from './wrappers/list/util-margin/list-util-margin.wrapper';
import { ListUtilPaddingWrapper } from './wrappers/list/util-padding/list-util-padding.wrapper';
import { ListUtilVisibilityWrapper } from './wrappers/list/util-visibility/list-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ListExample
            ],
            imports: [
                AvatarModule,
                BadgeModule,
                BrowserModule,
                CardModule,
                GridModule,
                HelpersModule,
                IconsModule,
                ListModule,
                TagModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'List'
}

// Stories
export const Example = () => ({ component: ListExampleWrapper });
export const PropColor = () => ({ component: ListColorWrapper });
export const PropDivider = () => ({ component: ListDividerWrapper });
export const PropPadding = () => ({ component: ListPaddingWrapper });
export const PropStriped = () => ({ component: ListStripedWrapper });
export const UtilMargin = () => ({ component: ListUtilMarginWrapper });
export const UtilPadding = () => ({ component: ListUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: ListUtilVisibilityWrapper });