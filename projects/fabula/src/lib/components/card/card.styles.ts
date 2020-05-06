import { Injectable } from '@angular/core';
import { css } from 'emotion';

import { base } from '@fabula/core/theme/components/card/card.base';
import { childrenStyles } from '@fabula/core/theme/components/card/card.children';
import { avatar } from '@fabula/core/theme/components/card/card.external';
import {
    color,
    cornerStyle,
    flow
} from '@fabula/core/theme/components/card/card.modifiers';

// Services
import { FabulaService } from '../../services/fabula.service';

@Injectable()
export class CardStyles {
    private theme;

    constructor(private fabulaService: FabulaService) {
        this.theme = this.fabulaService.theme;
    }

    css(props) {
        return css`
        ${base(this.theme)}
        ${childrenStyles(this.theme)}
        ${flow(this.theme, props.flow)}
        ${color(this.theme, props.color)}
        ${cornerStyle(this.theme, props.cornerStyle)}
        ${avatar(this.theme)}
        `;
    }
}
