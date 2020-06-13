import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonComponent,
    ButtonGroupComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { ButtonGroupFlowWrapper } from './wrappers/button-group/flow/button-group-flow.wrapper';
import { ButtonGroupGluedWrapper } from './wrappers/button-group/glued/button-group-glued.wrapper';
import { ButtonGroupSpacedWrapper } from './wrappers/button-group/spaced/button-group-spaced.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonComponent,
                ButtonGroupComponent
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
    title: 'Button Group'
}

// Stories
export const Flow = () => ({ component: ButtonGroupFlowWrapper });
export const Glued = () => ({ component: ButtonGroupGluedWrapper });
export const Spaced = () => ({ component: ButtonGroupSpacedWrapper });