import { Injectable } from '@angular/core';
import { css } from 'emotion';

import { base } from '@fabula/core/theme/components/button-group/button-group.base';

// Services
import { FabulaService } from '../../services/fabula.service';

@Injectable()
export class ButtonGroupStyles {
    private theme;

    constructor(private fabulaService: FabulaService) {
        this.theme = this.fabulaService.theme;
    }

    css(props) {
        return css`
        ${base(this.theme, props)}
        `;
    }
}
