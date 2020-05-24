import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AlertComponent } from './components/alert/alert.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CardComponent } from './components/card/card.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { ContainerComponent } from './components/container/container.component';
import { ColumnComponent } from './components/column/column.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GeneralComponent } from './components/general-component/general-component.component';
import { InputComponent } from './components/input/input.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RowComponent } from './components/row/row.component';
import { TagComponent } from './components/tag/tag.component';
import { TagGroupComponent } from './components/tag-group/tag-group.component';
import { TextComponent } from './components/text/text.component';
import { TextPartComponent } from './components/text-part/text-part.component';

// Directives
import { ColumnDirective } from './directives/column.directive';
import { AlignDirective } from './directives/align.directive';
import { FlexDirective } from './directives/flex.directive';
import { GrowDirective } from './directives/grow.directive';
import { MarginDirective } from './directives/margin.directive';
import { PaddingDirective } from './directives/padding.directive';
import { RowDirective } from './directives/row.directive';

// Models
import { IUserOptions } from './models/user-options.model';

// Services
import { ThemeService } from './services/theme.service';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { SegmentComponent } from './components/segment/segment.component';
import { SegmentsComponent } from './components/segments/segments.component';
import { IconComponent } from './components/icon/icon.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal-footer/modal-footer.component';
import { ModalSectionComponent } from './components/modal-section/modal-section.component';
import { TagInputComponent } from './components/tag-input/tag-input.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    // Components
    AlertComponent,
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardSectionComponent,
    CardImageComponent,
    ColumnComponent,
    ContainerComponent,
    DropdownComponent,
    GeneralComponent,
    IconComponent,
    InputComponent,
    InputGroupComponent,
    ListComponent,
    ListItemComponent,
    RowComponent,
    SegmentComponent,
    SegmentsComponent,
    TabComponent,
    TabContentComponent,
    TabsComponent,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    TextPartComponent,

    // Directives
    AlignDirective,
    ColumnDirective,
    FlexDirective,
    GrowDirective,
    MarginDirective,
    PaddingDirective,
    RowDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalSectionComponent,
    TagInputComponent,
    ToastComponent,
  ],
  entryComponents: [
    ColumnComponent,
    RowComponent
    // TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Components
    AlertComponent,
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CardFooterComponent,
    CardBodyComponent,
    CardImageComponent,
    CardSectionComponent,
    ColumnComponent,
    ContainerComponent,
    DropdownComponent,
    IconComponent,
    InputComponent,
    InputGroupComponent,
    ListComponent,
    ListItemComponent,
    RowComponent,
    SegmentComponent,
    SegmentsComponent,
    TabComponent,
    TabContentComponent,
    TabsComponent,
    TagComponent,
    TagGroupComponent,
    TextComponent,
    TextPartComponent,

    // Directives
    AlignDirective,
    ColumnDirective,
    FlexDirective,
    GrowDirective,
    MarginDirective,
    PaddingDirective,
    RowDirective,
    // Components
    // AvatarComponent,
    // BadgeComponent,
    // ButtonComponent,
    // ButtonGroupComponent,
    // CollapseComponent,
    // CollapseContentComponent,
    // CollapseToggleComponent,
    // TooltipComponent,

    // Directives
    // BlockDirective,
    // CardBodyDirective,
    // CardFooterDirective,
    // CardHeaderDirective,
    // CardImageDirective,
    // CardSubtitleDirective,
    // CardTextDirective,
    // CardTitleDirective,
    // ClearDirective,
    // DisabledDirective,
    // ElementDirective,
    // FixedHeightDirective,
    // FloatDirective,
    // InvertColorDirective,
    // OutlineDirective,
    // PlacementDirective,
    // SizeDirective,
    // SubtitleDirective,
    // TitleDirective,
    // TooltipDirective
  ]
})
export class FabulaModule {

  static forRoot(options?: IUserOptions): ModuleWithProviders {
    return {
      ngModule: FabulaModule,
      providers: [
        ThemeService,
        {
          provide: 'UserOptions',
          useValue: options
        }
      ]
    };
  }

}
