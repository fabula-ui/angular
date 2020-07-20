import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DividerComponent } from '../components/divider/divider.component';
import { DropdownHeaderComponent } from '../components/dropdown-header/dropdown-header.component';
import { DropdownItemComponent } from '../components/dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from '../components/dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../components/dropdown-toggle/dropdown-toggle.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

// Modules
import { ButtonModule } from './button.module';

@NgModule({
    declarations: [
        DividerComponent,
        DropdownComponent,
        DropdownHeaderComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
    ],
    imports: [
        ButtonModule,
        CommonModule,
    ],
    exports: [
        DividerComponent,
        DropdownComponent,
        DropdownHeaderComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
    ]
})
export class DropdownModule { }
