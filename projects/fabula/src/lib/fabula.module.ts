import {
  APP_INITIALIZER,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Models
import { IUserOptions } from './models/user-options.model';

// Services
import { ThemeService } from './services/theme.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class FabulaModule {
  static forRoot(options?: IUserOptions): ModuleWithProviders {
    return {
      ngModule: FabulaModule,
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
