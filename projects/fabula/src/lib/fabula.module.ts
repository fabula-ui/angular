import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ComponentsModule } from './modules/components.module';
import { GridModule } from './modules/grid.module';
import { HelpersModule } from './modules/helpers.module';
import { UtilsModule } from './modules/utils.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    GridModule,
    HelpersModule,
    UtilsModule
  ]
})
export class FabulaModule {}
