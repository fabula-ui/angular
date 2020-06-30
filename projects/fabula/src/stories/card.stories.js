import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CardImageComponent,
    CardSectionComponent,
    IconsModule,
    ListComponent,
    ListItemComponent,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { CardExamplesWrapper } from './wrappers/card/examples/card-examples.wrapper';
import { CardColorWrapper } from './wrappers/card/color/card-color.wrapper';
import { CardGlowWrapper } from './wrappers/card/glow/card-glow.wrapper';
import { CardLayoutWrapper } from './wrappers/card/layout/card-layout.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                ButtonComponent,
                ButtonGroupComponent,
                CardComponent,
                CardImageComponent,
                CardSectionComponent,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent,
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
    title: 'Card'
}

// Stories
export const Examples = () => ({ component: CardExamplesWrapper });
export const Color = () => ({ component: CardColorWrapper });
export const Glow = () => ({ component: CardGlowWrapper });
export const Layout = () => ({ component: CardLayoutWrapper });
