import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CheckboxModule,
    HelpersModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Props
import { CheckboxActiveColorWrapper } from './wrappers/checkbox/active-color/checkbox-active-color.wrapper';
import { CheckboxColorWrapper } from './wrappers/checkbox/color/checkbox-color.wrapper';
import { CheckboxDisabledWrapper } from './wrappers/checkbox/disabled/checkbox-disabled.wrapper';
import { CheckboxExampleWrapper } from './wrappers/checkbox/example/checkbox-example.wrapper';
import { CheckboxInactiveColorWrapper } from './wrappers/checkbox/inactive-color/checkbox-inactive-color.wrapper';
import { CheckboxReadOnlyWrapper } from './wrappers/checkbox/read-only/checkbox-read-only.wrapper';
import { CheckboxSizeWrapper } from './wrappers/checkbox/size/checkbox-size.wrapper';

// Utils
import { CheckboxUtilMarginWrapper } from './wrappers/checkbox/util-margin/checkbox-util-margin.wrapper';
import { CheckboxUtilVisibilityWrapper } from './wrappers/checkbox/util-visibility/checkbox-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                CheckboxModule,
                HelpersModule,
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
export const Example = () => ({ component: CheckboxExampleWrapper });
export const PropActiveColor = () => ({ component: CheckboxActiveColorWrapper });
export const PropColor = () => ({ component: CheckboxColorWrapper });
export const PropDisabled = () => ({ component: CheckboxDisabledWrapper });
export const PropInactiveColor = () => ({ component: CheckboxInactiveColorWrapper });
export const PropReadOnly = () => ({ component: CheckboxReadOnlyWrapper });
export const PropSize = () => ({ component: CheckboxSizeWrapper });
export const UtilMargin = () => ({ component: CheckboxUtilMarginWrapper });
export const UtilVisibility = () => ({ component: CheckboxUtilVisibilityWrapper });
