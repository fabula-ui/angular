import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    ButtonComponent,
    ButtonGroupComponent,
    CloseButtonComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalSectionComponent,
    TextComponent,
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
                ButtonGroupComponent,
                CloseButtonComponent,
                ModalComponent,
                ModalBodyComponent,
                ModalExampleComponent,
                ModalFooterComponent,
                ModalHeaderComponent,
                ModalSectionComponent,
                TextComponent,
            ],
            entryComponents: [
                CloseButtonComponent,
                ModalComponent,
                ModalExampleComponent,
                ModalSectionComponent,
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