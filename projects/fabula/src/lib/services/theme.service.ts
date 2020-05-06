import { Injectable, Inject, Input } from '@angular/core';
import { css } from 'emotion';

// Default theme
import DefaultTheme, { setBaseTheme } from '@fabula/core/theme';

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

  attachClasses(el, component, props = {}) {
      const componentClasses = this.theme.components[component](props);

      el.classList.add(css(componentClasses));
  }

  setComponents() {
    const components = {};

    for (const componentName in this.theme.components) {
      if (this.theme.components.hasOwnProperty(componentName)) {
        components[componentName] = {
          ...this.theme.components[componentName],
          ...this.options.theme.components[componentName]
        };
      }
    }

    return components;
  }

  setStyles(el, styles, props = {}) {
    const css = styles.css(props);

    el.classList.add(css);
  }

}
