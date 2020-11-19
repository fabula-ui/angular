import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    HelpersModule,
    ToggleComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Props
import { ToggleActiveColorWrapper } from './wrappers/toggle/active-color/toggle-active-color.wrapper';
import { ToggleColorWrapper } from './wrappers/toggle/color/toggle-color.wrapper';
import { ToggleDisabledWrapper } from './wrappers/toggle/disabled/toggle-disabled.wrapper';
import { ToggleExampleWrapper } from './wrappers/toggle/example/toggle-example.wrapper';
import { ToggleInactiveColorWrapper } from './wrappers/toggle/inactive-color/toggle-inactive-color.wrapper';
import { ToggleSizeWrapper } from './wrappers/toggle/size/toggle-size.wrapper';

// Utils
import { ToggleUtilMarginWrapper } from './wrappers/toggle/util-margin/toggle-util-margin.wrapper';
import { ToggleUtilVisibilityWrapper } from './wrappers/toggle/util-visibility/toggle-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ToggleComponent
            ],
            imports: [
                BrowserModule,
                HelpersModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Toggle'
}

// Stories
export const Example = () => ({ component: ToggleExampleWrapper });
export const PropActiveColor = () => ({ component: ToggleActiveColorWrapper });
export const PropColor = () => ({ component: ToggleColorWrapper });
export const PropDisabled = () => ({ component: ToggleDisabledWrapper });
export const PropInactiveColor = () => ({ component: ToggleInactiveColorWrapper });
export const PropSize = () => ({ component: ToggleSizeWrapper });
export const UtilMargin = () => ({ component: ToggleUtilMarginWrapper });
export const UtilVisibility = () => ({ component: ToggleUtilVisibilityWrapper });