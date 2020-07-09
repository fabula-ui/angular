import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonComponent,
    InputComponent,
    IconsModule,
    SearchInputComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { SearchInputButtonColorWrapper } from './wrappers/search-input/button-color/search-input-button-color.wrapper';
import { SearchInputButtonLabelWrapper } from './wrappers/search-input/button-label/search-input-button-label.wrapper';
import { SearchInputButtonTypesWrapper } from './wrappers/search-input/button-types/search-input-button-types.wrapper';
import { SearchInputExamplesWrapper } from './wrappers/search-input/examples/search-input-examples.wrapper';
import { SearchInputInputColorWrapper } from './wrappers/search-input/input-color/search-input-input-color.wrapper';
import { SearchInputRoundedWrapper } from './wrappers/search-input/rounded/search-input-rounded.wrapper';
import { SearchInputSizeWrapper } from './wrappers/search-input/size/search-input-size.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonComponent,
                InputComponent,
                SearchInputComponent,
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
    title: 'Search Input'
}

// Stories
export const Examples = () => ({ component: SearchInputExamplesWrapper });
export const ButtonColor = () => ({ component: SearchInputButtonColorWrapper });
export const ButtonLabel = () => ({ component: SearchInputButtonLabelWrapper });
export const ButtonTypes = () => ({ component: SearchInputButtonTypesWrapper });
export const InputColor = () => ({ component: SearchInputInputColorWrapper });
export const Rounded = () => ({ component: SearchInputRoundedWrapper });
export const Size = () => ({ component: SearchInputSizeWrapper });
