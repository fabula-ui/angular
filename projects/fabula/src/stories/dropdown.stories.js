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
import { DropdownAlignmentWrapper } from './wrappers/dropdown/alignment/dropdown-alignment.wrapper';
import { DropdownCustomContentWrapper } from './wrappers/dropdown/custom-content/dropdown-custom-content.wrapper';
import { DropdownDirectionWrapper } from './wrappers/dropdown/direction/dropdown-direction.wrapper';
import { DropdownExampleWrapper } from './wrappers/dropdown/example/dropdown-example.wrapper';
import { DropdownExpandWrapper } from './wrappers/dropdown/expand/dropdown-expand.wrapper';

// Utils
import { DropdownUtilMarginWrapper } from './wrappers/dropdown/util-margin/dropdown-util-margin.wrapper';
import { DropdownUtilVisibilityWrapper } from './wrappers/dropdown/util-visibility/dropdown-util-visibility.wrapper';

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
                ThemeModule.forRoot(),
                TextModule,
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Dropdown'
}

// Stories
export const Example = () => ({ component: DropdownExampleWrapper });
export const PropAlignment = () => ({ component: DropdownAlignmentWrapper });
export const PropDirection = () => ({ component: DropdownDirectionWrapper });
export const PropExpand = () => ({ component: DropdownExpandWrapper });
export const CustomContent = () => ({ component: DropdownCustomContentWrapper });
export const UtilMargin = () => ({ component: DropdownUtilMarginWrapper });
export const UtilVisibility = () => ({ component: DropdownUtilVisibilityWrapper });