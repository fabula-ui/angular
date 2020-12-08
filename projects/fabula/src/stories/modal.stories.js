import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    ButtonGroupModule,
    ModalModule,
    TextModule,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { ModalColorWrapper } from './wrappers/modal/color/modal-color.wrapper';
import { ModalExample } from './examples/modal/example/modal.example';
import { ModalExampleWrapper } from './wrappers/modal/example/modal-example.wrapper';
import { ModalSizeWrapper } from './wrappers/modal/size/modal-size.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ModalExample,
            ],
            entryComponents: [
                ModalExample
            ],
            imports: [
                BrowserModule,
                ButtonGroupModule,
                ButtonModule,
                ModalModule,
                TextModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                
            ]
        })
    ],
    title: 'Modal'
}

// Stories
export const Example = () => ({ component: ModalExampleWrapper });
export const PropColor = () => ({ component: ModalColorWrapper });
export const PropSize = () => ({ component: ModalSizeWrapper });