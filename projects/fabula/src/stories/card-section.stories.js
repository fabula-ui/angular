import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    CardModule,
    GridModule,
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
import { CardSectionExample } from './examples/card-section/example/card-section.example';

// Wrappers
import { CardSectionColorWrapper } from './wrappers/card-section/color/card-section-color.wrapper';
import { CardSectionDarkenWrapper } from './wrappers/card-section/darken/card-section-darken.wrapper';
import { CardSectionDividerWrapper } from './wrappers/card-section/divider/card-section-divider.wrapper';
import { CardSectionExampleWrapper } from './wrappers/card-section/example/card-section-example.wrapper';
import { CardSectionFadedWrapper } from './wrappers/card-section/faded/card-section-faded.wrapper';
import { CardSectionLightenWrapper } from './wrappers/card-section/lighten/card-section-lighten.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CardSectionExample,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TagGroupComponent,
                TextComponent,
            ],
            imports: [
                BrowserModule,
                ButtonModule,
                CardModule,
                GridModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Card Section'
}

// Stories
export const Example = () => ({ component: CardSectionExampleWrapper });
export const PropColor = () => ({ component: CardSectionColorWrapper });
export const PropDarken = () => ({ component: CardSectionDarkenWrapper });
export const PropDivider = () => ({ component: CardSectionDividerWrapper });
export const PropFaded = () => ({ component: CardSectionFadedWrapper });
export const PropLighten = () => ({ component: CardSectionLightenWrapper });
