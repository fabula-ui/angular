import { Injectable, Inject, Input } from '@angular/core';
import { css } from 'emotion';

// Default theme
import DefaultTheme, { attachStyles, attachUtils, setBaseTheme } from '@fabula/core/theme';

// Models
import { IUserOptions } from '../models/user-options.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  @Input() theme = DefaultTheme;

  constructor(@Inject('UserOptions') private options: IUserOptions) {
    setBaseTheme(options);
  }

  attachClasses(host, componentName: string, props = {}) {
    attachStyles({
      framework: 'angular',
      host,
      componentName,
      props
    });
  }

  attachUtils(host, utilName, props = {}) {
    attachUtils({
      framework: 'angular',
      host,
      utilName,
      props
    });
  }

  // setComponents() {
  //   const components = {};

  //   for (const componentName in this.theme.components) {
  //     if (this.theme.components.hasOwnProperty(componentName)) {
  //       components[componentName] = {
  //         ...this.theme.components[componentName],
  //         ...this.options.theme.components[componentName]
  //       };
  //     }
  //   }

  //   return components;
  // }

}
