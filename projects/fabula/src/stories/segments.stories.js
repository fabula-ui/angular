import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CardComponent,
    IconsModule,
    SegmentsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { SegmentsExamplesWrapper } from './wrappers/segments/examples/segments-examples.wrapper';
import { SegmentsActiveFillColorWrapper } from './wrappers/segments/active-fill-color/segments-active-fill-color.wrapper';
import { SegmentsActiveTextColorWrapper } from './wrappers/segments/active-text-color/segments-active-text-color.wrapper';
import { SegmentsClearWrapper } from './wrappers/segments/clear/segments-clear.wrapper';
import { SegmentsColorWrapper } from './wrappers/segments/color/segments-color.wrapper';
import { SegmentsContentWrapper } from './wrappers/segments/content/segments-content.wrapper';
import { SegmentsFadedWrapper } from './wrappers/segments/faded/segments-faded.wrapper';
import { SegmentsInactiveFillColorWrapper } from './wrappers/segments/inactive-fill-color/segments-inactive-fill-color.wrapper';
import { SegmentsInactiveTextColorWrapper } from './wrappers/segments/inactive-text-color/segments-inactive-text-color.wrapper';
import { SegmentsInvertWrapper } from './wrappers/segments/invert/segments-invert.wrapper';
import { SegmentsOutlineWrapper } from './wrappers/segments/outline/segments-outline.wrapper';
import { SegmentsRoundedWrapper } from './wrappers/segments/rounded/segments-rounded.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CardComponent,
                TextComponent
            ],
            imports: [
                BrowserModule,
                IconsModule,
                SegmentsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Segments'
}

// Stories
export const Examples = () => ({ component: SegmentsExamplesWrapper });
export const ActiveFillColor = () => ({ component: SegmentsActiveFillColorWrapper });
export const ActiveTextColor = () => ({ component: SegmentsActiveTextColorWrapper });
export const Clear = () => ({ component: SegmentsClearWrapper });
export const Color = () => ({ component: SegmentsColorWrapper });
export const Content = () => ({ component: SegmentsContentWrapper });
export const Faded = () => ({ component: SegmentsFadedWrapper });
export const InactiveFillColor = () => ({ component: SegmentsInactiveFillColorWrapper });
export const InactiveTextColor = () => ({ component: SegmentsInactiveTextColorWrapper });
export const Invert = () => ({ component: SegmentsInvertWrapper });
export const Outline = () => ({ component: SegmentsOutlineWrapper });
export const Rounded = () => ({ component: SegmentsRoundedWrapper });