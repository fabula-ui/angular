import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonModule,
    ButtonGroupComponent,
    ModalModule,
    TextComponent,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { ModalColorWrapper } from './wrappers/modal/color/modal-color.wrapper';
import { ModalExampleComponent } from './wrappers/modal/example/modal-example.component';
import { ModalExamplesWrapper } from './wrappers/modal/examples/modal-examples.wrapper';
import { ModalSizeWrapper } from './wrappers/modal/size/modal-size.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonGroupComponent,
                ModalExampleComponent,
                TextComponent,
            ],
            entryComponents: [
                ModalExampleComponent
            ],
            imports: [
                BrowserModule,
                ButtonModule,
                ModalModule,
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
export const Examples = () => ({ component: ModalExamplesWrapper });
export const Color = () => ({ component: ModalColorWrapper });
export const Size = () => ({ component: ModalSizeWrapper });