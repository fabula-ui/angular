import { Injectable } from '@angular/core';
import { css } from 'emotion';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import { base } from '@fabula/core/theme/components/collapse-toggle/collapse-toggle.base';
import { children } from '@fabula/core/theme/components/collapse-toggle/collapse-toggle.children';

@Injectable()
export class CollapseToggleStyles {
    private theme;

    constructor(private fabulaService: FabulaService) {
        this.theme = this.fabulaService.theme;
        console.log(children);
    }

    css(props?) {
        return css`
        ${base(this.theme)}
        ${children(this.theme)}
        `;
    }
}
