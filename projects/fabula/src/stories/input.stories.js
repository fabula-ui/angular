import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    InputComponent,
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
import { InputExamplesWrapper } from './wrappers/input/examples/input-examples.wrapper';
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
                InputComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent
            ],
            imports: [
                BrowserModule,
                IconsModule,
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
export const Examples = () => ({ component: InputExamplesWrapper });
export const Color = () => ({ component: InputColorWrapper });
export const Disabled = () => ({ component: InputDisabledWrapper });
export const Glow = () => ({ component: InputGlowWrapper });
export const MessageColor = () => ({ component: InputMessageColorWrapper });
export const Password = () => ({ component: InputPasswordWrapper });
export const Size = () => ({ component: InputSizeWrapper });
export const Status = () => ({ component: InputStatusWrapper });
export const Textarea = () => ({ component: InputTextareaWrapper });