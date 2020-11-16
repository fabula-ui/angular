import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { FabulaModule } from 'projects/fabula/src/public-api';

// Fabula
import {
  AlertComponent,
  AvatarComponent,
  BadgeComponent,
  ButtonComponent,
  ButtonGroupComponent,
  CardComponent,
  CardImageComponent,
  CardSectionComponent,
  DropdownComponent,
  InputComponent,
  InputGroupComponent,
  ListComponent,
  ListItemComponent,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalSectionComponent,
  SegmentComponent,
  SegmentsComponent,
  TabComponent,
  TabContentComponent,
  TabsComponent,
  TagComponent,
  TagGroupComponent,
  TagInputComponent,
  TextComponent,
} from 'projects/fabula/src/public-api';

import {
  IconsModule,
  ThemeModule,
  UtilsModule
} from 'projects/fabula/src/public-api';

// Demo components
import { AlertWrapperComponent } from './components/alert-wrapper/alert-wrapper.component';
import { AvatarWrapperComponent } from './components/avatar-wrapper/avatar-wrapper.component';
import { ExampleComponent } from './components/example/example.component';
import { ExampleBlockComponent } from './components/example-block/example-block.component';

// Test theme
import { BadgeWrapperComponent } from './components/badge-wrapper/badge-wrapper.component';
import { ButtonWrapperComponent } from './components/button-wrapper/button-wrapper.component';
import { ButtonGroupWrapperComponent } from './components/button-group-wrapper/button-group-wrapper.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { DropdownWrapperComponent } from './components/dropdown-wrapper/dropdown-wrapper.component';
import { IconWrapperComponent } from './components/icon-wrapper/icon-wrapper.component';

import testTheme from './testTheme';
import { InputWrapperComponent } from './components/input-wrapper/input-wrapper.component';
import { InputGroupWrapperComponent } from './components/input-group-wrapper/input-group-wrapper.component';
import { ListWrapperComponent } from './components/list-wrapper/list-wrapper.component';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { SegmentsWrapperComponent } from './components/segments-wrapper/segments-wrapper.component';
import { TabWrapperComponent } from './components/tab-wrapper/tab-wrapper.component';
import { TagInputWrapperComponent } from './components/tag-input-wrapper/tag-input-wrapper.component';

import { FormsModule } from '@angular/forms';
import { ToastWrapperComponent } from './components/toast-wrapper/toast-wrapper.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CardComponent,
    CardImageComponent,
    CardSectionComponent,
    DropdownComponent,
    InputComponent,
    InputGroupComponent,
    ListComponent,
    ListItemComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalSectionComponent,
    SegmentComponent,
    SegmentsComponent,
    TabComponent,
    TabContentComponent,
    TabsComponent,
    TagComponent,
    TagGroupComponent,
    TagInputComponent,
    TextComponent,

    AlertWrapperComponent,
    AvatarWrapperComponent,
    ExampleComponent,
    ExampleBlockComponent,
    BadgeWrapperComponent,
    ButtonWrapperComponent,
    ButtonGroupWrapperComponent,
    CardWrapperComponent,
    DropdownWrapperComponent,
    IconWrapperComponent,
    InputWrapperComponent,
    InputGroupWrapperComponent,
    ListWrapperComponent,
    SegmentsWrapperComponent,
    TabWrapperComponent,
    ModalWrapperComponent,
    TagInputWrapperComponent,
    ToastWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IconsModule,
    ThemeModule.forRoot({
      theme: testTheme
    }),
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
