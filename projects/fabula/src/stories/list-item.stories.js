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
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Examples
import { ListItemExample } from './examples/list-item/example/list-item.example';

// Wrappers
import { ListItemButtonWrapper } from './wrappers/list-item/button/list-item-button.wrapper';
import { ListItemColorWrapper } from './wrappers/list-item/color/list-item-color.wrapper';
import { ListItemExampleWrapper } from './wrappers/list-item/example/list-item-example.wrapper';
import { ListItemHrefWrapper } from './wrappers/list-item/href/list-item-href.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ListItemExample,
                TagComponent,
                TagGroupComponent,
                TextComponent
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