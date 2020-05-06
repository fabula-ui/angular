import { Injectable } from '@angular/core';
import { css } from 'emotion';

import { BadgeBaseStyles } from '@fabula/core/theme/components/badge/badge.base.js';
import {
    BadgeColor,
    BadgeCornerStyle,
    BadgeSize
} from '@fabula/core/theme/components/badge/badge.modifiers';

// Services
import { FabulaService } from '../../services/fabula.service';

@Injectable()
export class BadgeStyles {
    private theme;

    constructor(
        private fabulaService: FabulaService
        ) {
        this.theme = this.fabulaService.theme;
    }

    css(props) {
        return css`
        ${BadgeBaseStyles(this.theme)}
        ${BadgeColor(this.theme)}
        ${BadgeCornerStyle(this.theme)}
        ${BadgeSize(this.theme)}
        `;
    }
}
