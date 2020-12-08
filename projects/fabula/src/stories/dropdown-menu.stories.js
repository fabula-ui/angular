import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeModule,
    ButtonModule,
    DropdownModule,
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
import { DropdownMenuExample } from './examples/dropdown-menu/example/dropdown-menu.example';

// Props
import { DropdownMenuColorWrapper } from './wrappers/dropdown-menu/color/dropdown-menu-color.wrapper';
import { DropdownMenuExampleWrapper } from './wrappers/dropdown-menu/example/dropdown-menu-example.wrapper';

// Utils
import { DropdownMenuUtilMarginWrapper } from './wrappers/dropdown-menu/util-margin/dropdown-menu-util-margin.wrapper';
import { DropdownMenuUtilPaddingWrapper } from './wrappers/dropdown-menu/util-padding/dropdown-menu-util-padding.wrapper';
import { DropdownMenuUtilVisibilityWrapper } from './wrappers/dropdown-menu/util-visibility/dropdown-menu-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                DropdownMenuExample,
            ],
            entryComponents: [
                DropdownMenuExample
            ],
            imports: [
                AvatarModule,
                BadgeModule,
                BrowserModule,
                ButtonModule,
                DropdownModule,
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
    title: 'Dropdown Menu'
}

// Stories
export const Example = () => ({ component: DropdownMenuExampleWrapper });
export const PropColor = () => ({ component: DropdownMenuColorWrapper });
export const UtilMargin = () => ({ component: DropdownMenuUtilMarginWrapper });
export const UtilPadding = () => ({ component: DropdownMenuUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: DropdownMenuUtilVisibilityWrapper });