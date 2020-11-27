import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { FabulaService } from '../services/fabula.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class ResponsivenessModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ResponsivenessModule,
      providers: [
        FabulaService,
        {
          provide: APP_INITIALIZER,
          useFactory: (service: FabulaService) => () => {
            service.responsiveness = true;
          },
          deps: [FabulaService],
          multi: true
        }
      ]
    };
  }
}
