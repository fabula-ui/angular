import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AvatarComponent } from '../components/avatar/avatar.component';

// Modules
import { InnerIconModule } from '../modules/inner-icon.module';

@NgModule({
    declarations: [
        AvatarComponent
    ],
    entryComponents: [
        AvatarComponent
    ],
    imports: [
        CommonModule,
        InnerIconModule
    ],
    exports: [
        AvatarComponent
    ]
})
export class AvatarModule { }
