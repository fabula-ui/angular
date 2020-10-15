import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    CardModule,
    GridModule,
    HelpersModule,
    IconsModule,
    TabsModule,
    TextModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Examples
import { TabsExample } from './examples/tabs/example/tabs.example';

// Wrappers
import { TabsExampleWrapper } from './wrappers/tabs/example/tabs-example.wrapper';
import { TabsColorWrapper } from './wrappers/tabs/color/tabs-color.wrapper';
import { TabsContentWrapper } from './wrappers/tabs/content/tabs-content.wrapper';
import { TabsExpandWrapper } from './wrappers/tabs/expand/tabs-expand.wrapper';
import { TabsFadedWrapper } from './wrappers/tabs/faded/tabs-faded.wrapper';
import { TabsInvertWrapper } from './wrappers/tabs/invert/tabs-invert.wrapper';
import { TabsLayoutWrapper } from './wrappers/tabs/layout/tabs-layout.wrapper';
import { TabsStackedWrapper } from './wrappers/tabs/stacked/tabs-stacked.wrapper';
import { TabsTypeWrapper } from './wrappers/tabs/type/tabs-type.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                TabsExample,
            ],
            entryComponents: [
                TabsExample
            ],
            imports: [
                BrowserModule,
                CardModule,
                HelpersModule,
                GridModule,
                IconsModule,
                TabsModule,
                TextModule,
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
export const Example = () => ({ component: TabsExampleWrapper });
export const PropColor = () => ({ component: TabsColorWrapper });
export const PropExpand = () => ({ component: TabsExpandWrapper });
export const PropFaded = () => ({ component: TabsFadedWrapper });
export const PropInvert = () => ({ component: TabsInvertWrapper });
export const PropLayout = () => ({ component: TabsLayoutWrapper });
export const PropStacked = () => ({ component: TabsStackedWrapper });
export const PropType = () => ({ component: TabsTypeWrapper });
export const HandleContent = () => ({ component: TabsContentWrapper });
