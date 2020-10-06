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
import { DropdownAlignmentWrapper } from './wrappers/dropdown/alignment/dropdown-alignment.wrapper';
import { DropdownCustomContentWrapper } from './wrappers/dropdown/custom-content/dropdown-custom-content.wrapper';
import { DropdownDirectionWrapper } from './wrappers/dropdown/direction/dropdown-direction.wrapper';
import { DropdownExampleWrapper } from './wrappers/dropdown/example/dropdown-example.wrapper';
import { DropdownExpandWrapper } from './wrappers/dropdown/expand/dropdown-expand.wrapper';

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
    title: 'Dropdown'
}

// Stories
export const Example = () => ({ component: DropdownExampleWrapper });
export const PropAlignment = () => ({ component: DropdownAlignmentWrapper });
export const PropDirection = () => ({ component: DropdownDirectionWrapper });
export const PropExpand = () => ({ component: DropdownExpandWrapper });
export const CustomContent = () => ({ component: DropdownCustomContentWrapper });