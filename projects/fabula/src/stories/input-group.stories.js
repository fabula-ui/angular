import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    DropdownModule,
    HelpersModule,
    IconsModule,
    InnerIconModule,
    InputModule,
    InputGroupModule,
    TagModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Props
import { InputGroupExampleWrapper } from './wrappers/input-group/example/input-group-example.wrapper';
import { InputGroupLayoutWrapper } from './wrappers/input-group/layout/input-group-layout.wrapper';

// Utils
import { InputGroupUtilMarginWrapper } from './wrappers/input-group/util-margin/input-group-util-margin.wrapper';
import { InputGroupUtilVisibilityWrapper } from './wrappers/input-group/util-visibility/input-group-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                ButtonModule,
                DropdownModule,
                HelpersModule,
                IconsModule,
                InnerIconModule,
                InputGroupModule,
                InputModule,
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
    title: 'Input Group'
}

// Stories
export const Example = () => ({ component: InputGroupExampleWrapper });
export const PropLayout = () => ({ component: InputGroupLayoutWrapper });
export const UtilMargin = () => ({ component: InputGroupUtilMarginWrapper });
export const UtilVisibility = () => ({ component: InputGroupUtilVisibilityWrapper });