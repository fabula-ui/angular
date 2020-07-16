import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NavbarLogoComponent } from '../components/navbar-logo/navbar-logo.component';
import { NavbarSectionComponent } from '../components/navbar-section/navbar-section.component';
import { NavbarTabsComponent } from '../components/navbar-tabs/navbar-tabs.component';

// Modules
import { TabsModule } from './tabs.module';


@NgModule({
    declarations: [
        NavbarComponent,
        NavbarLogoComponent,
        NavbarSectionComponent,
        NavbarTabsComponent,
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        TabsModule
    ],
    exports: [
        NavbarComponent,
        NavbarLogoComponent,
        NavbarSectionComponent,
        NavbarTabsComponent
    ]
})
export class NavbarModule { }
