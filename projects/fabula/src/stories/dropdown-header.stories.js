import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeComponent,
    ButtonModule,
    DropdownModule,
    HelpersModule,
    IconsModule,
    ListComponent,
    ListItemComponent,
    TagComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { DropdownHeaderColorWrapper } from './wrappers/dropdown-header/color/dropdown-header-color.wrapper';
import { DropdownHeaderExampleWrapper } from './wrappers/dropdown-header/example/dropdown-header-example.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TextComponent
            ],
            imports: [
                AvatarModule,
                BrowserModule,
                ButtonModule,
                DropdownModule,
                HelpersModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Dropdown Header'
}

// Stories
export const Example = () => ({ component: DropdownHeaderExampleWrapper });
export const PropColor = () => ({ component: DropdownHeaderColorWrapper });