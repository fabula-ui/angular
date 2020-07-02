import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CheckboxComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { CheckboxActiveColorWrapper } from './wrappers/checkbox/active-color/checkbox-active-color.wrapper';
import { CheckboxColorWrapper } from './wrappers/checkbox/color/checkbox-color.wrapper';
import { CheckboxDisabledWrapper } from './wrappers/checkbox/disabled/checkbox-disabled.wrapper';
import { CheckboxInactiveColorWrapper } from './wrappers/checkbox/inactive-color/checkbox-inactive-color.wrapper';
import { CheckboxRoundedWrapper } from './wrappers/checkbox/rounded/checkbox-rounded.wrapper';
import { CheckboxSizeWrapper } from './wrappers/checkbox/size/checkbox-size.wrapper';
import { CheckboxTestWrapper } from './wrappers/checkbox/test/checkbox-test.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CheckboxComponent
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
    title: 'Checkbox'
}

// Stories
export const Test = () => ({ component: CheckboxTestWrapper });
export const ActiveColor = () => ({ component: CheckboxActiveColorWrapper });
export const Color = () => ({ component: CheckboxColorWrapper });
export const Disabled = () => ({ component: CheckboxDisabledWrapper });
export const InactiveColor = () => ({ component: CheckboxInactiveColorWrapper });
export const Rounded = () => ({ component: CheckboxRoundedWrapper });
export const Size = () => ({ component: CheckboxSizeWrapper });
