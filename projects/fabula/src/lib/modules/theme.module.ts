import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Models
import { IUserOptions } from '../models/user-options.model';

// Services
import { ThemeService } from '../services/theme.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [ThemeService]
})
export class ThemeModule {
  static forRoot(options?: IUserOptions): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
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
