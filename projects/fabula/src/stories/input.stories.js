import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';
import { InputModule } from '../lib/modules/input.module';

// Fabula API
import {
    GridModule,
    IconsModule,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { InputColorWrapper } from './wrappers/input/color/input-color.wrapper';
import { InputDisabledWrapper } from './wrappers/input/disabled/input-disabled.wrapper';
import { InputExampleWrapper } from './wrappers/input/example/input-example.wrapper';
import { InputGlowWrapper } from './wrappers/input/glow/input-glow.wrapper';
import { InputMessageColorWrapper } from './wrappers/input/message-color/input-message-color.wrapper';
import { InputPasswordWrapper } from './wrappers/input/password/input-password.wrapper';
import { InputSizeWrapper } from './wrappers/input/size/input-size.wrapper';
import { InputStatusWrapper } from './wrappers/input/status/input-status.wrapper';
import { InputTextareaWrapper } from './wrappers/input/textarea/input-textarea.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                TagComponent,
                TagGroupComponent,
                TextComponent
            ],
            imports: [
                BrowserModule,
                GridModule,
                IconsModule,
                InputModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Input'
}

// Stories
export const Example = () => ({ component: InputExampleWrapper });
export const Color = () => ({ component: InputColorWrapper });
export const Disabled = () => ({ component: InputDisabledWrapper });
export const Glow = () => ({ component: InputGlowWrapper });
export const MessageColor = () => ({ component: InputMessageColorWrapper });
export const Password = () => ({ component: InputPasswordWrapper });
export const Size = () => ({ component: InputSizeWrapper });
export const Status = () => ({ component: InputStatusWrapper });
export const Textarea = () => ({ component: InputTextareaWrapper });