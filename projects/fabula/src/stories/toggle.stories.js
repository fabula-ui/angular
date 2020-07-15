import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ToggleComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { ToggleActiveColorWrapper } from './wrappers/toggle/active-color/toggle-active-color.wrapper';
import { ToggleColorWrapper } from './wrappers/toggle/color/toggle-color.wrapper';
import { ToggleDisabledWrapper } from './wrappers/toggle/disabled/toggle-disabled.wrapper';
import { ToggleExamplesWrapper } from './wrappers/toggle/examples/toggle-examples.wrapper';
import { ToggleInactiveColorWrapper } from './wrappers/toggle/inactive-color/toggle-inactive-color.wrapper';
import { ToggleSizeWrapper } from './wrappers/toggle/size/toggle-size.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ToggleComponent
            ],
            imports: [
                BrowserModule,
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
export const Examples = () => ({ component: ToggleExamplesWrapper });
export const ActiveColor = () => ({ component: ToggleActiveColorWrapper });
export const Color = () => ({ component: ToggleColorWrapper });
export const Disabled = () => ({ component: ToggleDisabledWrapper });
export const InactiveColor = () => ({ component: ToggleInactiveColorWrapper });
export const Size = () => ({ component: ToggleSizeWrapper });