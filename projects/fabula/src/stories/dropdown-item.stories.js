import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeModule,
    ButtonModule,
    DropdownModule,
    HelpersModule,
    IconsModule,
    ListModule,
    TagModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Props
import { DropdownItemColorWrapper } from './wrappers/dropdown-item/color/dropdown-item-color.wrapper';
import { DropdownItemExampleWrapper } from './wrappers/dropdown-item/example/dropdown-item-example.wrapper';
import { DropdownItemSizeWrapper } from './wrappers/dropdown-item/size/dropdown-item-size.wrapper';

// Utils
import { DropdownItemUtilMarginWrapper } from './wrappers/dropdown-item/util-margin/dropdown-item-util-margin.wrapper';
import { DropdownItemUtilPaddingWrapper } from './wrappers/dropdown-item/util-padding/dropdown-item-util-padding.wrapper';
import { DropdownItemUtilVisibilityWrapper } from './wrappers/dropdown-item/util-visibility/dropdown-item-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                AvatarModule,
                BadgeModule,
                BrowserModule,
                ButtonModule,
                DropdownModule,
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
    title: 'Dropdown Item'
}

// Stories
export const Example = () => ({ component: DropdownItemExampleWrapper });
export const PropColor = () => ({ component: DropdownItemColorWrapper });
export const PropSize = () => ({ component: DropdownItemSizeWrapper });
export const UtilMargin = () => ({ component: DropdownItemUtilMarginWrapper });
export const UtilPadding = () => ({ component: DropdownItemUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: DropdownItemUtilVisibilityWrapper });