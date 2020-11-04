import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    IconsModule,
    TagModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Examples
import { TagExample } from './examples/tag/example/tag.example';

// Wrappers
import { TagClearWrapper } from './wrappers/tag/clear/tag-clear.wrapper';
import { TagColorWrapper } from './wrappers/tag/color/tag-color.wrapper';
import { TagExampleWrapper } from './wrappers/tag/example/tag-example.wrapper';
import { TagFadedWrapper } from './wrappers/tag/faded/tag-faded.wrapper';
import { TagGlowWrapper } from './wrappers/tag/glow/tag-glow.wrapper';
import { TagInvertWrapper } from './wrappers/tag/invert/tag-invert.wrapper';
import { TagOutlineWrapper } from './wrappers/tag/outline/tag-outline.wrapper';
import { TagRoundedWrapper } from './wrappers/tag/rounded/tag-rounded.wrapper';
import { TagSizeWrapper } from './wrappers/tag/size/tag-size.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [TagExample],
            entryComponents: [TagExample],
            imports: [
                BrowserModule,
                IconsModule,
                TagModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: []
        })
    ],
    title: 'Tag'
}

// Stories
export const Example = () => ({ component: TagExampleWrapper });
export const PropClear = () => ({ component: TagClearWrapper });
export const PropColor = () => ({ component: TagColorWrapper });
export const PropFaded = () => ({ component: TagFadedWrapper });
export const PropGlow = () => ({ component: TagGlowWrapper });
export const PropInvert = () => ({ component: TagInvertWrapper });
export const PropOutline = () => ({ component: TagOutlineWrapper });
export const PropRounded = () => ({ component: TagRoundedWrapper });
export const PropSize = () => ({ component: TagSizeWrapper });