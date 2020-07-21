import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    ButtonGroupComponent,
    IconsModule,
    NavbarModule,
    TabsModule,
    TextComponent,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { NavbarColorWrapper } from './wrappers/navbar/color/navbar-color.wrapper';
import { NavbarExampleWrapper } from './wrappers/navbar/example/navbar-example.wrapper';
import { NavbarExamplesWrapper } from './wrappers/navbar/examples/navbar-examples.wrapper';
import { NavbarHeightWrapper } from './wrappers/navbar/height/navbar-height.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonGroupComponent,
                NavbarExampleWrapper,
                TextComponent,
            ],
            entryComponents: [
                NavbarExampleWrapper
            ],
            imports: [
                BrowserModule,
                ButtonModule,
                IconsModule,
                NavbarModule,
                TabsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                
            ]
        })
    ],
    title: 'Navbar'
}

// Stories
export const Examples = () => ({ component: NavbarExamplesWrapper });
export const Color = () => ({ component: NavbarColorWrapper });
export const Height = () => ({ component: NavbarHeightWrapper });