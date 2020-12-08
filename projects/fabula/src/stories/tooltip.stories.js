import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    ButtonModule,
    ButtonGroupModule,
    CardModule,
    HelpersModule,
    IconsModule,
    TagModule,
    ThemeModule,
    ThemeService,
    TooltipModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { TooltipColorWrapper } from './wrappers/tooltip/color/tooltip-color.wrapper';
import { TooltipExampleWrapper } from './wrappers/tooltip/example/tooltip-example.wrapper';
import { TooltipOffsetWrapper } from './wrappers/tooltip/offset/tooltip-offset.wrapper';
import { TooltipPlacementWrapper } from './wrappers/tooltip/placement/tooltip-placement.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                AvatarModule,
                BrowserModule,
                ButtonGroupModule,
                ButtonModule,
                CardModule,
                HelpersModule,
                IconsModule,
                TagModule,
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
export const Example = () => ({ component: TooltipExampleWrapper });
export const PropColor = () => ({ component: TooltipColorWrapper });
export const PropOffset = () => ({ component: TooltipOffsetWrapper });
export const PropPlacement = () => ({ component: TooltipPlacementWrapper });