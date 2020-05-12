import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AvatarComponent } from './components/avatar/avatar.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputComponent } from './components/input/input.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { CollapseContentComponent } from './components/collapse-content/collapse-content.component';
import { CollapseToggleComponent } from './components/collapse-toggle/collapse-toggle.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

// Directives
import { BlockDirective } from './directives/block.directive';
import { CardBodyDirective } from './directives/card-body.directive';
import { CardFooterDirective } from './directives/card-footer.directive';
import { CardHeaderDirective } from './directives/card-header.directive';
import { CardImageDirective } from './directives/card-image.directive';
import { CardSubtitleDirective } from './directives/card-subtitle.directive';
import { CardTextDirective } from './directives/card-text.directive';
import { CardTitleDirective } from './directives/card-title.directive';
import { ClearDirective } from './directives/clear.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { ElementDirective } from './directives/element.directive';
import { FixedHeightDirective } from './directives/fixed-height.directive';
import { FloatDirective } from './directives/float.directive';
import { InvertColorDirective } from './directives/invert-color.directive';
import { OutlineDirective } from './directives/outline.directive';
import { PlacementDirective } from './directives/placement.directive';
import { SizeDirective } from './directives/size.directive';
import { SubtitleDirective } from './directives/subtitle.directive';
import { TitleDirective } from './directives/title.directive';
import { TooltipDirective } from './directives/tooltip.directive';

// Models
import { IUserOptions } from './models/user-options.model';

// Services
import { FabulaService } from './services/fabula.service';
import { ThemeService } from './services/theme.service';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TextComponent } from './components/text/text.component';
import { TextPartComponent } from './components/text-part/text-part.component';

@NgModule({
  declarations: [
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    DropdownComponent,
    InputComponent,
    InputGroupComponent,
    ListComponent,
    ListItemComponent,
    TextComponent,
    TextPartComponent
    // // Components
    // AvatarComponent,
    // BadgeComponent,
    // ButtonComponent,
    // ButtonGroupComponent,
    // CardComponent,
    // CardBodyComponent,
    // CollapseComponent,
    // CollapseContentComponent,
    // CollapseToggleComponent,
    // TooltipComponent,

    // // Directives
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
  ],
  entryComponents: [
    // TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    DropdownComponent,
    InputComponent,
    InputGroupComponent,
    ListComponent,
    ListItemComponent,
    TextComponent,
    TextPartComponent
    // Components
    // AvatarComponent,
    // BadgeComponent,
    // ButtonComponent,
    // ButtonGroupComponent,
    // CardComponent,
    // CardBodyComponent,
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
