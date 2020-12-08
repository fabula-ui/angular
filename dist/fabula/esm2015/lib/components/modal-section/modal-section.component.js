/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-section/modal-section.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';
export class ModalSectionComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.padding = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ModalSectionStyles;
        this.initStyles();
    }
}
ModalSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal-section',
                template: "<div class=\"fab-modal-section\" data-fab-component=\"modalSection\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
ModalSectionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ModalSectionComponent.propDecorators = {
    adaptColor: [{ type: Input }],
    color: [{ type: Input }],
    darken: [{ type: Input }],
    divider: [{ type: Input }],
    dividerColor: [{ type: Input }],
    lighten: [{ type: Input }],
    padding: [{ type: Input }],
    parentColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ModalSectionComponent.prototype.adaptColor;
    /** @type {?} */
    ModalSectionComponent.prototype.color;
    /** @type {?} */
    ModalSectionComponent.prototype.darken;
    /** @type {?} */
    ModalSectionComponent.prototype.divider;
    /** @type {?} */
    ModalSectionComponent.prototype.dividerColor;
    /** @type {?} */
    ModalSectionComponent.prototype.lighten;
    /** @type {?} */
    ModalSectionComponent.prototype.padding;
    /** @type {?} */
    ModalSectionComponent.prototype.parentColor;
    /** @type {?} */
    ModalSectionComponent.prototype.elRef;
    /** @type {?} */
    ModalSectionComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb2RhbC1zZWN0aW9uL21vZGFsLXNlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxrQkFBa0IsTUFBTSw0REFBNEQsQ0FBQztBQU01RixNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTs7Ozs7SUFVeEQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMNUIsWUFBTyxHQUFHLElBQUksQ0FBQztJQU1TLENBQUM7Ozs7SUFFbEMsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isc0hBQTZDO2FBQzlDOzs7O1lBZDJCLFVBQVU7WUFNN0IsYUFBYTs7O3lCQVVuQixLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFQTiwyQ0FBNkI7O0lBQzdCLHNDQUF1Qjs7SUFDdkIsdUNBQXlCOztJQUN6Qix3Q0FBeUI7O0lBQ3pCLDZDQUE4Qjs7SUFDOUIsd0NBQTBCOztJQUMxQix3Q0FBd0I7O0lBQ3hCLDRDQUE2Qjs7SUFHM0Isc0NBQXdCOztJQUN4Qiw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBNb2RhbFNlY3Rpb25TdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL21vZGFsLXNlY3Rpb24vbW9kYWwtc2VjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1tb2RhbC1zZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VjdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFkYXB0Q29sb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhcmtlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgZGl2aWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXZpZGVyQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGlnaHRlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgcGFkZGluZyA9IHRydWU7XG4gIEBJbnB1dCgpIHBhcmVudENvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IE1vZGFsU2VjdGlvblN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19