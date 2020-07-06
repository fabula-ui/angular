import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarComponent,
    BadgeComponent,
    CardComponent,
    ListComponent,
    ListItemComponent,
    IconsModule,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { ListColorWrapper } from './wrappers/list/color/list-color.wrapper';
import { ListExamplesWrapper } from './wrappers/list/examples/list-examples.wrapper';
import { ListPaddingWrapper } from './wrappers/list/padding/list-padding.wrapper';
import { ListStripedWrapper } from './wrappers/list/striped/list-striped.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                AvatarComponent,
                BadgeComponent,
                CardComponent,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent
            ],
            imports: [
                BrowserModule,
                IconsModule,
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
export const Examples = () => ({ component: ListExamplesWrapper });
export const Color = () => ({ component: ListColorWrapper });
export const Padding = () => ({ component: ListPaddingWrapper });
export const Striped = () => ({ component: ListStripedWrapper });