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

// Examples
import { TagGroupExample } from './examples/tag-group/example/tag-group.example';

// Wrappers
import { TagGroupColorWrapper } from './wrappers/tag-group/color/tag-group-color.wrapper';
import { TagGroupExampleWrapper } from './wrappers/tag-group/example/tag-group-example.wrapper';
import { TagGroupSpacingWrapper } from './wrappers/tag-group/spacing/tag-group-spacing.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [TagGroupExample],
            entryComponents: [TagGroupExample],
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
export const Example = () => ({ component: TagGroupExampleWrapper });
export const PropColor = () => ({ component: TagGroupColorWrapper });
export const PropSpacing = () => ({ component: TagGroupSpacingWrapper });