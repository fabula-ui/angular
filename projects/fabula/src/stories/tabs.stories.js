import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CardComponent,
    IconsModule,
    TabsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { TabsExamplesWrapper } from './wrappers/tabs/examples/tabs-examples.wrapper';
import { TabsBlockWrapper } from './wrappers/tabs/block/tabs-block.wrapper';
import { TabsColorWrapper } from './wrappers/tabs/color/tabs-color.wrapper';
import { TabsContentWrapper } from './wrappers/tabs/content/tabs-content.wrapper';
import { TabsExpandWrapper } from './wrappers/tabs/expand/tabs-expand.wrapper';
import { TabsFadedWrapper } from './wrappers/tabs/faded/tabs-faded.wrapper';
import { TabsFloatWrapper } from './wrappers/tabs/float/tabs-float.wrapper';
import { TabsIconsWrapper } from './wrappers/tabs/icons/tabs-icons.wrapper';
import { TabsInvertWrapper } from './wrappers/tabs/invert/tabs-invert.wrapper';
import { TabsLayoutWrapper } from './wrappers/tabs/layout/tabs-layout.wrapper';
import { TabsPillWrapper } from './wrappers/tabs/pill/tabs-pill.wrapper';
import { TabsStackedWrapper } from './wrappers/tabs/stacked/tabs-stacked.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                CardComponent,
                TextComponent
            ],
            imports: [
                BrowserModule,
                IconsModule,
                TabsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Tabs'
}

// Stories
export const Examples = () => ({ component: TabsExamplesWrapper });
export const Block = () => ({ component: TabsBlockWrapper });
export const Color = () => ({ component: TabsColorWrapper });
export const Content = () => ({ component: TabsContentWrapper });
export const Expand = () => ({ component: TabsExpandWrapper });
export const Faded = () => ({ component: TabsFadedWrapper });
export const Float = () => ({ component: TabsFloatWrapper });
export const Icons = () => ({ component: TabsIconsWrapper });
export const Invert = () => ({ component: TabsInvertWrapper });
export const Layout = () => ({ component: TabsLayoutWrapper });
export const Pill = () => ({ component: TabsPillWrapper });
export const Stacked = () => ({ component: TabsStackedWrapper });
