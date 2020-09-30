import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    ButtonGroupComponent,
    DropdownModule,
    ThemeModule,
    ThemeService,
    UtilsModule,
    WrapperModule
} from '../public-api';

// Wrappers
import { ButtonGroupExampleWrapper } from './wrappers/button-group/example/button-group-example.wrapper';
import { ButtonGroupColorWrapper } from './wrappers/button-group/color/button-group-color.wrapper';
import { ButtonGroupGluedWrapper } from './wrappers/button-group/glued/button-group-glued.wrapper';
import { ButtonGroupSpacedWrapper } from './wrappers/button-group/spaced/button-group-spaced.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonGroupComponent
            ],
            imports: [
                BrowserModule,
                ButtonModule,
                DropdownModule,
                ThemeModule.forRoot(),
                UtilsModule,
                WrapperModule
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
export const Color = () => ({ component: ButtonGroupColorWrapper });
export const Glued = () => ({ component: ButtonGroupGluedWrapper });
export const Spaced = () => ({ component: ButtonGroupSpacedWrapper });