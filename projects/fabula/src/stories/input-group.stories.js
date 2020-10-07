import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    DropdownModule,
    IconsModule,
    InnerIconModule,
    InputComponent,
    InputGroupComponent,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { InputGroupExampleWrapper } from './wrappers/input-group/example/input-group-example.wrapper';
import { InputGroupLayoutWrapper } from './wrappers/input-group/layout/input-group-layout.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                InputComponent,
                InputGroupComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent
            ],
            imports: [
                BrowserModule,
                ButtonModule,
                DropdownModule,
                IconsModule,
                InnerIconModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Input Group'
}

// Stories
export const Example = () => ({ component: InputGroupExampleWrapper });
export const PropLayout = () => ({ component: InputGroupLayoutWrapper });