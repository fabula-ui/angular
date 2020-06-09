import { Injectable, Inject, Input } from '@angular/core';

// Default theme
import DefaultTheme, { attachUtils, setBaseTheme } from '@fabula/core/theme';

// Models
import { IUserOptions } from '../models/user-options.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  @Input() theme = DefaultTheme;

  constructor(@Inject('UserOptions') private options: IUserOptions) {
    console.log('setBaseTheme');
    setBaseTheme(options);
  }

  attachClasses(host, componentName: string, props = {}) {
    // attachStyles({
    //   framework: 'angular',
    //   host,
    //   componentName,
    //   props
    // });
  }

  attachUtils(host, utilName, props = {}) {
    attachUtils({
      framework: 'angular',
      host,
      utilName,
      props
    });
  }
}
