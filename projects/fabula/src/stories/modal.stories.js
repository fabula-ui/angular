import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonComponent,
    ModalComponent,
    ThemeModule,
    UtilsModule
} from '../public-api';

// Wrappers
import { ModalExampleComponent } from './wrappers/modal/example/modal-example.component';
import { ModalExamplesWrapper } from './wrappers/modal/examples/modal-examples.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                ButtonComponent,
                ModalComponent,
                ModalExampleComponent,
            ],
            entryComponents: [
                ModalComponent,
                ModalExampleComponent
            ],
            imports: [
                BrowserModule,
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