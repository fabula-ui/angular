import { Injectable, Inject } from '@angular/core';
import { css } from 'emotion';

// Default theme
import reset from '@fabula/core/styles/common/reset';
import setBaseTheme from '@fabula/core/styles/methods/misc/setBaseTheme';

// Models
import type { IUserOptions } from '../models/user-options.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject('UserOptions') private options: IUserOptions) { }

  init() {
    document.body.classList.add(css(reset));
    setBaseTheme(this.options);
  }
}
