import { Injectable } from '@angular/core';
import { css } from 'emotion';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import { base } from '@fabula/core/theme/components/tooltip/tooltip.base';
import {
    color,
    cornerStyle,
    placement
} from '@fabula/core/theme/components/tooltip/tooltip.modifiers';

@Injectable()
export class TooltipStyles {
    private theme;

    constructor(private fabulaService: FabulaService) {
        this.theme = this.fabulaService.theme;
    }

    css(props?) {
        return css`
        ${base(this.theme)}
        ${color(this.theme, props.color)}
        ${cornerStyle(this.theme, props.cornerStyle)}
        ${placement(this.theme, props.placement)}
        `;
    }
}
