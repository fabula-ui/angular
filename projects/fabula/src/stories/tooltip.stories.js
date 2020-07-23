import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
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
import { TooltipLabelWrapper } from './wrappers/tooltip/label/tooltip-label.wrapper';
import { TooltipOffsetWrapper } from './wrappers/tooltip/offset/tooltip-offset.wrapper';
import { TooltipPlacementWrapper } from './wrappers/tooltip/placement/tooltip-placement.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonGroupComponent,
                TagComponent,
                TagGroupComponent
            ],
            imports: [
                BrowserModule,
                ButtonModule,
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
export const Label = () => ({ component: TooltipLabelWrapper });
export const Offset = () => ({ component: TooltipOffsetWrapper });
export const Placement = () => ({ component: TooltipPlacementWrapper });