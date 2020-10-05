import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    BadgeComponent,
    ButtonModule,
    ButtonGroupComponent,
    CardComponent,
    CardImageComponent,
    CardSectionComponent,
    GridModule,
    HelpersModule,
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

// Examples
import { CardExample } from './examples/card/example/card.example';

// Wrappers
import { CardExampleWrapper } from './wrappers/card/example/card-example.wrapper';
import { CardColorWrapper } from './wrappers/card/color/card-color.wrapper';
import { CardGlowWrapper } from './wrappers/card/glow/card-glow.wrapper';
import { CardLayoutWrapper } from './wrappers/card/layout/card-layout.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                ButtonGroupComponent,
                CardComponent,
                CardExample,
                CardImageComponent,
                CardSectionComponent,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent,
            ],
            entryComponents: [
                CardExample
            ],
            imports: [
                BrowserModule,
                ButtonModule,
                GridModule,
                HelpersModule,
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
export const Example = () => ({ component: CardExampleWrapper });
export const PropColor = () => ({ component: CardColorWrapper });
export const PropGlow = () => ({ component: CardGlowWrapper });
export const PropLayout = () => ({ component: CardLayoutWrapper });
