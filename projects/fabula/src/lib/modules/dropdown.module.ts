import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DropdownItemComponent } from '../components/dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from '../components/dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../components/dropdown-toggle/dropdown-toggle.component';
import { ButtonComponent } from '../components/button/button.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

@NgModule({
    declarations: [
        ButtonComponent,
        DropdownComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent
    ],
    imports: [CommonModule],
    exports: [
        ButtonComponent,
        DropdownComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent
    ]
})
export class DropdownModule { }
