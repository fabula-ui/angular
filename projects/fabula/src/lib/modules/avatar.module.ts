import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AvatarComponent } from '../components/avatar/avatar.component';

// Modules
import { IconsModule } from '../modules/icons.module';

@NgModule({
    declarations: [
        AvatarComponent
    ],
    entryComponents: [
        AvatarComponent
    ],
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        AvatarComponent
    ]
})
export class AvatarModule { }
