import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    IconsModule,
    TagModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { TagGroupColorWrapper } from './wrappers/tag-group/color/tag-group-color.wrapper';
import { TagGroupSpacingWrapper } from './wrappers/tag-group/spacing/tag-group-spacing.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            imports: [
                BrowserModule,
                IconsModule,
                TagModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Tag Group'
}

// Stories
export const Color = () => ({ component: TagGroupColorWrapper });
export const Spacing = () => ({ component: TagGroupSpacingWrapper });