import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AlertComponent,
    AvatarComponent,
    ButtonComponent,
    ButtonGroupComponent,
    IconsModule,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Demo wrappers
import { AlertWrapperComponent } from '../../../demo/src/app/components/alert-wrapper/alert-wrapper.component';
import { AlertColorsWrapper } from './wrappers/alert/colors/alert-colors.wrapper';
import { AlertCustomContentWrapper } from './wrappers/alert/custom-content/alert-custom-content.wrapper';

export default {
    decorators: [
        moduleMetadata({
            declarations: [
                AlertComponent,
                AvatarComponent,
                ButtonComponent,
                ButtonGroupComponent,
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

export const Colors = () => ({
    component: AlertColorsWrapper,
});

export const CustomContent = () => ({
    component: AlertCustomContentWrapper,
});
