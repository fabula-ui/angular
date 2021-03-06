import {
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AlertModule } from './alert.module';
import { AvatarModule } from './avatar.module';
import { BadgeModule } from './badge.module';
import { ButtonGroupModule } from './button-group.module';
import { ButtonModule } from './button.module';
import { CardModule } from './card.module';
import { CheckboxModule } from './checkbox.module';
import { DividerModule } from './divider.module';
import { DropdownModule } from './dropdown.module';
import { HeadingModule } from './heading.module';
import { IconsModule } from './icons.module';
import { InputModule } from './input.module';
import { InputGroupModule } from './input-group.module';
import { LinkModule } from './link.module';
import { ModalModule } from './modal.module';
import { SearchInputModule } from './search-input.module';
import { SegmentsModule } from './segments.module';
import { TabsModule } from './tabs.module';
import { TagModule } from './tag.module';
import { TextModule } from './text.module';
import { ToggleModule } from './toggle.module';
import { TooltipModule } from './tooltip.module';

@NgModule({
  imports: [
    AlertModule,
    AvatarModule,
    BadgeModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    CommonModule,
    DividerModule,
    DropdownModule,
    HeadingModule,
    IconsModule,
    InputModule,
    InputGroupModule,
    LinkModule,
    ModalModule,
    // NavbarModule,
    SearchInputModule,
    SegmentsModule,
    TabsModule,
    TagModule,
    TextModule,
    ToggleModule,
    TooltipModule,
  ],
  exports: []
})
export class ComponentsModule { }
