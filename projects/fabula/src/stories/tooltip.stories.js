import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonComponent,
    ButtonGroupComponent,
    IconsModule,
    TagComponent,
    TagGroupComponent,
    ThemeModule,
    ThemeService,
    TooltipModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { TooltipColorWrapper } from './wrappers/tooltip/color/tooltip-color.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonComponent,
                ButtonGroupComponent,
                TagComponent,
                TagGroupComponent
            ],
            imports: [
                BrowserModule,
                IconsModule,
                ThemeModule.forRoot(),
                TooltipModule,
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Tooltip'
}

// Stories
export const Color = () => ({ component: TooltipColorWrapper });