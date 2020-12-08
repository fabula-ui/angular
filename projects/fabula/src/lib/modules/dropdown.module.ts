import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DropdownHeaderComponent } from '../components/dropdown-header/dropdown-header.component';
import { DropdownItemComponent } from '../components/dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from '../components/dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../components/dropdown-toggle/dropdown-toggle.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

// Modules
import { ButtonModule } from './button.module';
import { DividerModule } from './divider.module';
import { IconsModule } from './icons.module';


@NgModule({
    declarations: [
        DropdownComponent,
        DropdownHeaderComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
    ],
    imports: [
        ButtonModule,
        CommonModule,
        DividerModule,
        IconsModule
    ],
    exports: [
        DropdownComponent,
        DropdownHeaderComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
    ]
})
export class DropdownModule { }
