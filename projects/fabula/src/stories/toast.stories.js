import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonGroupComponent,
    ButtonModule,
    GridModule,
    HelpersModule,
    IconsModule,
    ThemeModule,
    ThemeService,
    ToastModule,
    TooltipModule,
    UtilsModule
} from '../public-api';

// Example
import { ToastExample } from './examples/toast/example/toast.example';

// Wrappers
import { ToastClearWrapper } from './wrappers/toast/clear/toast-clear.wrapper';
import { ToastColorWrapper } from './wrappers/toast/color/toast-color.wrapper';
import { ToastFadedWrapper } from './wrappers/toast/faded/toast-faded.wrapper';
import { ToastGlowWrapper } from './wrappers/toast/glow/toast-glow.wrapper';
import { ToastIconsWrapper } from './wrappers/toast/icons/toast-icons.wrapper';
import { ToastLinksWrapper } from './wrappers/toast/links/toast-links.wrapper';
import { ToastOutlineWrapper } from './wrappers/toast/outline/toast-outline.wrapper';
import { ToastStacksWrapper } from './wrappers/toast/stacks/toast-stacks.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonGroupComponent,
                ToastExample
            ],
            entryComponents: [ToastExample],
            imports: [
                BrowserModule,
                ButtonModule,
                GridModule,
                HelpersModule,
                IconsModule,
                ThemeModule.forRoot(),
                ToastModule,
                TooltipModule,
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Toast'
}

// Stories
export const PropClear = () => ({ component: ToastClearWrapper });
export const Color = () => ({ component: ToastColorWrapper });
export const Faded = () => ({ component: ToastFadedWrapper });
export const Glow = () => ({ component: ToastGlowWrapper });
export const Icons = () => ({ component: ToastIconsWrapper });
export const Links = () => ({ component: ToastLinksWrapper });
export const Outline = () => ({ component: ToastOutlineWrapper });
export const Stacks = () => ({ component: ToastStacksWrapper });