import { Injectable } from '@angular/core';
import { css } from 'emotion';

import { base } from '@fabula/core/theme/components/button/button.base';
import { ButtonExternal } from '@fabula/core/theme/components/button/button.external';
import {
    clear,
    color,
    cornerStyle,
    disabled,
    loading,
    outline,
    size
} from '@fabula/core/theme/components/button/button.modifiers';

// Services
import { FabulaService } from '../../services/fabula.service';

@Injectable()
export class ButtonStyles {
    private theme;

    constructor(private fabulaService: FabulaService) {
        this.theme = this.fabulaService.theme;
    }

    css(props) {
        return css`
        ${base(this.theme)}
        ${clear(this.theme, props.color)}
        ${props.color && color(this.theme, props.color)}
        ${props.cornerStyle && cornerStyle(this.theme, props.cornerStyle)}
        ${disabled(this.theme)}
        ${props.loading && loading(this.theme, props.color)}
        ${outline(this.theme, props.color)}
        ${size(this.theme, props.size)}
        ${ButtonExternal(this.theme)}
        `;
    }
}
