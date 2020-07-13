import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    IconsModule,
    TabsModule,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Wrappers
import { TabsExamplesWrapper } from './wrappers/tabs/examples/tabs-examples.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [],
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