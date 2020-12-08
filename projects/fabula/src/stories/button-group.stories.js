import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    HelpersModule,
    ThemeModule,
    ThemeService,
    UtilsModule,
} from '../public-api';

// Props
import { ButtonGroupExampleWrapper } from './wrappers/button-group/example/button-group-example.wrapper';
import { ButtonGroupColorWrapper } from './wrappers/button-group/color/button-group-color.wrapper';
import { ButtonGroupLayoutWrapper } from './wrappers/button-group/layout/button-group-layout.wrapper';
import { ButtonGroupExternalDropdownWrapper } from './wrappers/button-group/external-dropdown/button-group-external-dropdown.wrapper';

// Utils
import { ButtonGroupUtilMarginWrapper } from './wrappers/button-group/util-margin/button-group-util-margin.wrapper';
import { ButtonGroupUtilVisibilityWrapper } from './wrappers/button-group/util-visibility/button-group-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                ButtonGroupModule,
                ButtonModule,
                DropdownModule,
                HelpersModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Button Group'
}

// Stories
export const Example = () => ({ component: ButtonGroupExampleWrapper });
export const PropColor = () => ({ component: ButtonGroupColorWrapper });
export const PropLayout = () => ({ component: ButtonGroupLayoutWrapper });
export const UtilMargin = () => ({ component: ButtonGroupUtilMarginWrapper });
export const UtilVisibility = () => ({ component: ButtonGroupUtilVisibilityWrapper });
export const ExternalDropdown = () => ({ component: ButtonGroupExternalDropdownWrapper });