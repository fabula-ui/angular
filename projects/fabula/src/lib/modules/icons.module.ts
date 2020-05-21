import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { IconComponent } from '../components/icon/icon.component';

@NgModule({
    declarations: [
        IconComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        IconComponent
    ]
})
export class IconsModule { }