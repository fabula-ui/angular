import { Injectable } from '@angular/core';
import { css } from 'emotion';

import { baseStyles } from '@fabula/core/theme/components/avatar/avatar.base';
import { children } from '@fabula/core/theme/components/avatar/avatar.children';
import {
    AvatarExternal
} from '@fabula/core/theme/components/avatar/avatar.external';
import {
    color,
    cornerStyle,
    size
} from '@fabula/core/theme/components/avatar/avatar.modifiers';

// Services
import { FabulaService } from '../../services/fabula.service';

@Injectable()
export class AvatarStyles {
    private theme;

    constructor(private fabulaService: FabulaService) {
        this.theme = this.fabulaService.theme;
    }

    css(props) {
        return css`
        ${baseStyles(this.theme)}
        ${children(this.theme)}
        ${color(this.theme)}
        ${cornerStyle(this.theme)}
        ${size(this.theme)}
        ${AvatarExternal(this.theme)}
        `;
    }
}
