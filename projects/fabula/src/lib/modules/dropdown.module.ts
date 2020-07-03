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
import { ListComponent } from '../components/list/list.component';
import { ListItemComponent } from '../components/list-item/list-item.component';

@NgModule({
    declarations: [
        ButtonComponent,
        DropdownComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
        ListComponent,
        ListItemComponent
    ],
    imports: [CommonModule],
    exports: [
        ButtonComponent,
        DropdownComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
        ListComponent,
        ListItemComponent
    ]
})
export class DropdownModule { }
