import { Injectable } from '@angular/core';
import { css } from 'emotion';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import { base } from '@fabula/core/theme/components/collapse/collapse.base';
import { children } from '@fabula/core/theme/components/collapse/collapse.children';
import {
    color
} from '@fabula/core/theme/components/collapse/collapse.modifiers';

@Injectable()
export class CollapseStyles {
    private theme;

    constructor(private fabulaService: FabulaService) {
        this.theme = this.fabulaService.theme;
    }

    css(props?) {
        return css`
        ${base(this.theme)}
        ${color(this.theme, props.color)}
        ${children(this.theme)}
        `;
    }
}
