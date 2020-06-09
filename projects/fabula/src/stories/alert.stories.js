import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AlertComponent,
    ButtonComponent,
    IconsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Demo wrappers
import { AlertWrapperComponent } from '../../../demo/src/app/components/alert-wrapper/alert-wrapper.component';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                AlertComponent,
                ButtonComponent,
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
    title: 'Alert'
}

export const Examples = () => ({
    component: AlertWrapperComponent,
    props: {
        text: 'Hello Button',
        title: 'Alert'
    },
});
