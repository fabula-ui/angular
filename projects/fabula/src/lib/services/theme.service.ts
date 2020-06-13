import { Injectable, Inject, Input } from '@angular/core';
import { css } from 'emotion';

// Default theme
import reset from '@fabula/core/styles/common/reset';
import DefaultTheme, { attachUtils, setBaseTheme } from '@fabula/core/theme';

// Models
import { IUserOptions } from '../models/user-options.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  @Input() theme = DefaultTheme;

  constructor(@Inject('UserOptions') private options: IUserOptions) {
    document.body.classList.add(css(reset));
    setBaseTheme(options);
  }

  attachClasses(host, componentName: string, props = {}) {}

  attachUtils(host, utilName, props = {}) {
    attachUtils({
      framework: 'angular',
      host,
      utilName,
      props
    });
  }
}
