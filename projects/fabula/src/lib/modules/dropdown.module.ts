import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DropdownItemComponent } from '../components/dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from '../components/dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../components/dropdown-toggle/dropdown-toggle.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
import { ListComponent } from '../components/list/list.component';
import { ListItemComponent } from '../components/list-item/list-item.component';

// Modules
import { ButtonModule } from './button.module';

@NgModule({
    declarations: [
        DropdownComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
        ListComponent,
        ListItemComponent
    ],
    imports: [
        ButtonModule,
        CommonModule,
    ],
    exports: [
        DropdownComponent,
        DropdownItemComponent,
        DropdownMenuComponent,
        DropdownToggleComponent,
        ListComponent,
        ListItemComponent
    ]
})
export class DropdownModule { }
