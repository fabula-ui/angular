import { Injectable, Inject, Input } from '@angular/core';

// Default theme
import DefaultTheme from '@fabula/core/theme';

// Models
import { IUserOptions } from '../models/user-options.model';

@Injectable({
  providedIn: 'root'
})
export class FabulaService {
  @Input() theme = DefaultTheme;

  constructor(@Inject('UserOptions') private options: IUserOptions) {
    if (this.options && this.options.theme) { this.setTheme(); }
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

  setTheme() {
    this.theme = {
      colors: {
        ...this.theme.colors,
        ...this.options.theme.colors
      },
      components: this.setComponents(),
      globals: {
        ...this.theme.globals,
        ...this.options.theme.globals
      }
    };
  }

}
