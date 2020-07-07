import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    IconsModule,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { TagAnchorAndButtonWrapper } from './wrappers/tag/anchor-and-button/tag-anchor-and-button.wrapper';
import { TagClearWrapper } from './wrappers/tag/clear/tag-clear.wrapper';
import { TagColorWrapper } from './wrappers/tag/color/tag-color.wrapper';
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
            declarations: [
                TagComponent,
                TagGroupComponent,
                TextComponent
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
    title: 'Tag'
}

// Stories
export const AnchorAndButton = () => ({ component: TagAnchorAndButtonWrapper });
export const Clear = () => ({ component: TagClearWrapper });
export const Color = () => ({ component: TagColorWrapper });
export const Faded = () => ({ component: TagFadedWrapper });
export const Glow = () => ({ component: TagGlowWrapper });
export const Invert = () => ({ component: TagInvertWrapper });
export const Outline = () => ({ component: TagOutlineWrapper });
export const Rounded = () => ({ component: TagRoundedWrapper });
export const Size = () => ({ component: TagSizeWrapper });