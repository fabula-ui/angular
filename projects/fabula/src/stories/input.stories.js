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
import { InputExamplesWrapper } from './wrappers/input/examples/input-examples.wrapper';

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