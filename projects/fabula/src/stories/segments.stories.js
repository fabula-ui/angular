import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CardComponent,
    GridModule,
    HelpersModule,
    IconsModule,
    SegmentsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Examples
import { SegmentsExample } from './examples/segments/example/segments.example';

// Props
import { SegmentsActiveColorWrapper } from './wrappers/segments/active-color/segments-active-color.wrapper';
import { SegmentsActiveTextColorWrapper } from './wrappers/segments/active-text-color/segments-active-text-color.wrapper';
import { SegmentsBorderWrapper } from './wrappers/segments/border/segments-border.wrapper';
import { SegmentsClearWrapper } from './wrappers/segments/clear/segments-clear.wrapper';
import { SegmentsColorWrapper } from './wrappers/segments/color/segments-color.wrapper';
import { SegmentsContentWrapper } from './wrappers/segments/content/segments-content.wrapper';
import { SegmentsExampleWrapper } from './wrappers/segments/example/segments-example.wrapper';
import { SegmentsFadedWrapper } from './wrappers/segments/faded/segments-faded.wrapper';
import { SegmentsInactiveColorWrapper } from './wrappers/segments/inactive-color/segments-inactive-color.wrapper';
import { SegmentsInactiveTextColorWrapper } from './wrappers/segments/inactive-text-color/segments-inactive-text-color.wrapper';
import { SegmentsInvertWrapper } from './wrappers/segments/invert/segments-invert.wrapper';
import { SegmentsOutlineWrapper } from './wrappers/segments/outline/segments-outline.wrapper';
import { SegmentsRoundedWrapper } from './wrappers/segments/rounded/segments-rounded.wrapper';

// Utils
import { SegmentsUtilMarginWrapper } from './wrappers/segments/util-margin/segments-util-margin.wrapper';
import { SegmentsUtilVisibilityWrapper } from './wrappers/segments/util-visibility/segments-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CardComponent,
                SegmentsExample,
                TextComponent
            ],
            entryComponents: [
                SegmentsExample
            ],
            imports: [
                BrowserModule,
                GridModule,
                HelpersModule,
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
export const Examples = () => ({ component: SegmentsExampleWrapper });
export const PropActiveColor = () => ({ component: SegmentsActiveColorWrapper });
export const PropActiveTextColor = () => ({ component: SegmentsActiveTextColorWrapper });
export const PropBorder = () => ({ component: SegmentsBorderWrapper });
export const PropClear = () => ({ component: SegmentsClearWrapper });
export const PropColor = () => ({ component: SegmentsColorWrapper });
export const PropFaded = () => ({ component: SegmentsFadedWrapper });
export const PropInactiveColor = () => ({ component: SegmentsInactiveColorWrapper });
export const PropInactiveTextColor = () => ({ component: SegmentsInactiveTextColorWrapper });
export const PropInvert = () => ({ component: SegmentsInvertWrapper });
export const PropOutline = () => ({ component: SegmentsOutlineWrapper });
export const PropRounded = () => ({ component: SegmentsRoundedWrapper });
export const UtilMargin = () => ({ component: SegmentsUtilMarginWrapper });
export const UtilVisibility = () => ({ component: SegmentsUtilVisibilityWrapper });
export const HandleContent = () => ({ component: SegmentsContentWrapper });
