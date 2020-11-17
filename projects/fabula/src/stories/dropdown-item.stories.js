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
    title: 'Dropdown Item'
}

// Stories
export const Example = () => ({ component: DropdownItemExampleWrapper });
export const PropColor = () => ({ component: DropdownItemColorWrapper });
export const PropSize = () => ({ component: DropdownItemSizeWrapper });
export const UtilMargin = () => ({ component: DropdownItemUtilMarginWrapper });
export const UtilPadding = () => ({ component: DropdownItemUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: DropdownItemUtilVisibilityWrapper });