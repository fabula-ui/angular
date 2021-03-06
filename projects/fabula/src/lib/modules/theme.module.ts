import {
  APP_INITIALIZER,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Models
import { IUserOptions } from '../models/user-options.model';

// Services
import { ThemeService } from '../services/theme.service';

// @dynamic
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [ThemeService]
})
export class ThemeModule {
  static forRoot(options?: IUserOptions): ModuleWithProviders<any> {
    return {
      ngModule: ThemeModule,
      providers: [
        ThemeService,
        {
          provide: APP_INITIALIZER,
          useFactory: (service: ThemeService) => () => service.init(),
          deps: [ThemeService],
          multi: true
        },
        {
          provide: 'UserOptions',
          useValue: options
        }
      ]
    };
  }
}
