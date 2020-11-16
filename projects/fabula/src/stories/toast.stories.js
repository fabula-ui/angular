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
import { ToastButtonWrapper } from './wrappers/toast/button/toast-button.wrapper';
import { ToastClearWrapper } from './wrappers/toast/clear/toast-clear.wrapper';
import { ToastColorWrapper } from './wrappers/toast/color/toast-color.wrapper';
import { ToastExampleWrapper } from './wrappers/toast/example/toast-example.wrapper';
import { ToastFadedWrapper } from './wrappers/toast/faded/toast-faded.wrapper';
import { ToastGlowWrapper } from './wrappers/toast/glow/toast-glow.wrapper';
import { ToastHideButtonWrapper } from './wrappers/toast/hide-button/toast-hide-button.wrapper';
import { ToastIconWrapper } from './wrappers/toast/icon/toast-icon.wrapper';
import { ToastLinkWrapper } from './wrappers/toast/link/toast-link.wrapper';
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
export const Example = () => ({ component: ToastExampleWrapper });
export const PropButton = () => ({ component: ToastButtonWrapper });
export const PropClear = () => ({ component: ToastClearWrapper });
export const PropColor = () => ({ component: ToastColorWrapper });
export const PropFaded = () => ({ component: ToastFadedWrapper });
export const PropGlow = () => ({ component: ToastGlowWrapper });
export const PropHideButton = () => ({ component: ToastHideButtonWrapper });
export const PropIcon = () => ({ component: ToastIconWrapper });
export const PropLink = () => ({ component: ToastLinkWrapper });
export const PropOutline = () => ({ component: ToastOutlineWrapper });
export const HandleStacks = () => ({ component: ToastStacksWrapper });