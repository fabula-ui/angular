import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeComponent,
    CardModule,
    IconsModule,
    ListModule,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { ListButtonsWrapper } from './wrappers/list/buttons/list-buttons.wrapper';
import { ListColorWrapper } from './wrappers/list/color/list-color.wrapper';
import { ListDividersWrapper } from './wrappers/list/dividers/list-dividers.wrapper';
import { ListExampleWrapper } from './wrappers/list/example/list-example.wrapper';
import { ListExamplesWrapper } from './wrappers/list/examples/list-examples.wrapper';
import { ListLinkWrapper } from './wrappers/list/link/list-link.wrapper';
import { ListPaddingWrapper } from './wrappers/list/padding/list-padding.wrapper';
import { ListStripedWrapper } from './wrappers/list/striped/list-striped.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                ListExampleWrapper,
                TagComponent,
                TagGroupComponent,
                TextComponent
            ],
            imports: [
                AvatarModule,
                BrowserModule,
                CardModule,
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
    title: 'List'
}

// Stories
export const Examples = () => ({ component: ListExamplesWrapper });
export const Buttons = () => ({ component: ListButtonsWrapper });
export const Color = () => ({ component: ListColorWrapper });
export const Dividers = () => ({ component: ListDividersWrapper });
export const Link = () => ({ component: ListLinkWrapper });
export const Padding = () => ({ component: ListPaddingWrapper });
export const Striped = () => ({ component: ListStripedWrapper });