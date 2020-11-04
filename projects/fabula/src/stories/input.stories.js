import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';
import { InputModule } from '../lib/modules/input.module';

// Fabula API
import {
    GridModule,
    HelpersModule,
    IconsModule,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { InputDisabledWrapper } from './wrappers/input/disabled/input-disabled.wrapper';
import { InputExampleWrapper } from './wrappers/input/example/input-example.wrapper';
import { InputGlowWrapper } from './wrappers/input/glow/input-glow.wrapper';
import { InputMessageWrapper } from './wrappers/input/message/input-message.wrapper';
import { InputMessageColorWrapper } from './wrappers/input/message-color/input-message-color.wrapper';
import { InputPasswordWrapper } from './wrappers/input/password/input-password.wrapper';
import { InputRoundedWrapper } from './wrappers/input/rounded/input-rounded.wrapper';
import { InputSizeWrapper } from './wrappers/input/size/input-size.wrapper';
import { InputStatusWrapper } from './wrappers/input/status/input-status.wrapper';
import { InputTextareaWrapper } from './wrappers/input/textarea/input-textarea.wrapper';
import { InputVariantWrapper } from './wrappers/input/variant/input-variant.wrapper';

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
                HelpersModule,
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
export const PropDisabled = () => ({ component: InputDisabledWrapper });
export const PropGlow = () => ({ component: InputGlowWrapper });
export const PropMessage = () => ({ component: InputMessageWrapper });
export const PropMessageColor = () => ({ component: InputMessageColorWrapper });
export const PropPassword = () => ({ component: InputPasswordWrapper });
export const PropRounded = () => ({ component: InputRoundedWrapper });
export const PropSize = () => ({ component: InputSizeWrapper });
export const PropStatus = () => ({ component: InputStatusWrapper });
export const PropTextarea = () => ({ component: InputTextareaWrapper });
export const PropVariant = () => ({ component: InputVariantWrapper });