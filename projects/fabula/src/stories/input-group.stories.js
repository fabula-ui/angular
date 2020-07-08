import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    DropdownModule,
    InputComponent,
    InputGroupComponent,
    IconsModule,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { InputGroupExamplesWrapper } from './wrappers/input-group/examples/input-group-examples.wrapper';
import { InputGroupGluedWrapper } from './wrappers/input-group/glued/input-group-glued.wrapper';
import { InputGroupSizesWrapper } from './wrappers/input-group/sizes/input-group-sizes.wrapper';
import { InputGroupSpacingWrapper } from './wrappers/input-group/spacing/input-group-spacing.wrapper';

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
                DropdownModule,
                IconsModule,
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
export const Examples = () => ({ component: InputGroupExamplesWrapper });
export const Glued = () => ({ component: InputGroupGluedWrapper });
export const Sizes = () => ({ component: InputGroupSizesWrapper });
export const Spacing = () => ({ component: InputGroupSpacingWrapper });