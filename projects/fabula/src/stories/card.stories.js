import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    BadgeModule,
    ButtonModule,
    ButtonGroupModule,
    CardModule,
    GridModule,
    HelpersModule,
    IconsModule,
    ListModule,
    TagModule,
    TextComponent,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Examples
import { CardExample } from './examples/card/example/card.example';

// Props
import { CardExampleWrapper } from './wrappers/card/example/card-example.wrapper';
import { CardColorWrapper } from './wrappers/card/color/card-color.wrapper';
import { CardGlowWrapper } from './wrappers/card/glow/card-glow.wrapper';
import { CardLayoutWrapper } from './wrappers/card/layout/card-layout.wrapper';

// Utils
import { CardUtilMarginWrapper } from './wrappers/card/util-margin/card-util-margin.wrapper';
import { CardUtilVisibilityWrapper } from './wrappers/card/util-visibility/card-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CardExample,
            ],
            entryComponents: [
                CardExample
            ],
            imports: [
                BadgeModule,
                BrowserModule,
                ButtonModule,
                ButtonGroupModule,
                CardModule,
                GridModule,
                HelpersModule,
                IconsModule,
                ListModule,
                TagModule,
                TextModule,
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
export const UtilMargin = () => ({ component: CardUtilMarginWrapper });
export const UtilVisibility = () => ({ component: CardUtilVisibilityWrapper });
