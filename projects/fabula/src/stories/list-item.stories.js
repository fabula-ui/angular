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
import { ListItemExample } from './examples/list-item/example/list-item.example';

// Props
import { ListItemButtonWrapper } from './wrappers/list-item/button/list-item-button.wrapper';
import { ListItemColorWrapper } from './wrappers/list-item/color/list-item-color.wrapper';
import { ListItemExampleWrapper } from './wrappers/list-item/example/list-item-example.wrapper';
import { ListItemHrefWrapper } from './wrappers/list-item/href/list-item-href.wrapper';

// Utils
import { ListItemUtilMarginWrapper } from './wrappers/list-item/util-margin/list-item-util-margin.wrapper';
import { ListItemUtilPaddingWrapper } from './wrappers/list-item/util-padding/list-item-util-padding.wrapper';
import { ListItemUtilVisibilityWrapper } from './wrappers/list-item/util-visibility/list-item-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ListItemExample,
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
    title: 'List Item'
}

// Stories
export const Example = () => ({ component: ListItemExampleWrapper });
export const PropButton = () => ({ component: ListItemButtonWrapper });
export const PropColor = () => ({ component: ListItemColorWrapper });
export const PropHref = () => ({ component: ListItemHrefWrapper });
export const UtilMargin = () => ({ component: ListItemUtilMarginWrapper });
export const UtilPadding = () => ({ component: ListItemUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: ListItemUtilVisibilityWrapper });