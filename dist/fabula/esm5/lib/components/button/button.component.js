/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';
var ButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonComponent, _super);
    function ButtonComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.border = false;
        _this.compact = false;
        _this.glow = false;
        _this.inline = true;
        return _this;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.styles = ButtonStyles;
        this.initStyles();
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-button',
                    template: "<button class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [disabled]=\"disabled || props.disabled\" data-fab-component=\"button\" *ngIf=\"!href && !props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</button>\n\n<a class=\"fab-button\" [attr.data-border]=\"border || props.border\" [attr.data-color]=\"color || props.color\"\n  [attr.data-circle]=\"!!circle || !!props.circle\" [attr.data-expand]=\"expand || props.expand\"\n  [attr.data-outline]=\"outline || props.outline\" [attr.data-rounded]=\"rounded || props.rounded\"\n  [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  data-fab-component=\"button\" *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"!label && !props.label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n  <ng-container *ngIf=\"label || props.label\">{{label || props.label}}</ng-container>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ButtonComponent.propDecorators = {
        border: [{ type: Input }],
        circle: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        compact: [{ type: Input }],
        darken: [{ type: Input }],
        disabled: [{ type: Input }],
        expand: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        gradient: [{ type: Input }],
        href: [{ type: Input }],
        invert: [{ type: Input }],
        lighten: [{ type: Input }],
        loading: [{ type: Input }],
        label: [{ type: Input }],
        outline: [{ type: Input }],
        rel: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }],
        wide: [{ type: Input }]
    };
    return ButtonComponent;
}(CommonComponent));
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.border;
    /** @type {?} */
    ButtonComponent.prototype.circle;
    /** @type {?} */
    ButtonComponent.prototype.clear;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.compact;
    /** @type {?} */
    ButtonComponent.prototype.darken;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.expand;
    /** @type {?} */
    ButtonComponent.prototype.faded;
    /** @type {?} */
    ButtonComponent.prototype.glow;
    /** @type {?} */
    ButtonComponent.prototype.gradient;
    /** @type {?} */
    ButtonComponent.prototype.href;
    /** @type {?} */
    ButtonComponent.prototype.invert;
    /** @type {?} */
    ButtonComponent.prototype.lighten;
    /** @type {?} */
    ButtonComponent.prototype.loading;
    /** @type {?} */
    ButtonComponent.prototype.label;
    /** @type {?} */
    ButtonComponent.prototype.outline;
    /** @type {?} */
    ButtonComponent.prototype.rel;
    /** @type {?} */
    ButtonComponent.prototype.rounded;
    /** @type {?} */
    ButtonComponent.prototype.size;
    /** @type {?} */
    ButtonComponent.prototype.target;
    /** @type {?} */
    ButtonComponent.prototype.wide;
    /** @type {?} */
    ButtonComponent.prototype.inline;
    /** @type {?} */
    ButtonComponent.prototype.elRef;
    /** @type {?} */
    ButtonComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sWUFBWSxNQUFNLDhDQUE4QyxDQUFDO0FBRXhFO0lBS3FDLDJDQUFlO0lBMEJsRCx5QkFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUZyQyxZQUdJLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUZ6QixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBM0I1QixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWYsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUtoQixVQUFJLEdBQUcsS0FBSyxDQUFDO1FBY3RCLFlBQU0sR0FBRyxJQUFJLENBQUM7O0lBS21CLENBQUM7Ozs7SUFFbEMseUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBRXRCLDQ2Q0FBc0M7O2lCQUN2Qzs7OztnQkFqQkMsVUFBVTtnQkFRSCxhQUFhOzs7eUJBV25CLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBYVIsc0JBQUM7Q0FBQSxBQXhDRCxDQUtxQyxlQUFlLEdBbUNuRDtTQW5DWSxlQUFlOzs7SUFDMUIsaUNBQXdCOztJQUN4QixpQ0FBeUI7O0lBQ3pCLGdDQUF3Qjs7SUFDeEIsZ0NBQXVCOztJQUN2QixrQ0FBeUI7O0lBQ3pCLGlDQUF5Qjs7SUFDekIsbUNBQTJCOztJQUMzQixpQ0FBeUI7O0lBQ3pCLGdDQUF3Qjs7SUFDeEIsK0JBQXNCOztJQUN0QixtQ0FBMkI7O0lBQzNCLCtCQUFzQjs7SUFDdEIsaUNBQXlCOztJQUN6QixrQ0FBMEI7O0lBQzFCLGtDQUF5Qjs7SUFDekIsZ0NBQXVCOztJQUN2QixrQ0FBMEI7O0lBQzFCLDhCQUFxQjs7SUFDckIsa0NBQTBCOztJQUMxQiwrQkFBc0I7O0lBQ3RCLGlDQUF3Qjs7SUFDeEIsK0JBQXVCOztJQUV2QixpQ0FBYzs7SUFHWixnQ0FBd0I7O0lBQ3hCLHdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IEJ1dHRvblN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1idXR0b24nLFxuICBzdHlsZVVybHM6IFsnYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYm9yZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNpcmNsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xlYXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbXBhY3QgPSBmYWxzZTtcbiAgQElucHV0KCkgZGFya2VuOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZXhwYW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBmYWRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZ2xvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbjtcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBpbnZlcnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpZ2h0ZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvYWRpbmc6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgb3V0bGluZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdW5kZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHdpZGU6IGJvb2xlYW47XG5cbiAgaW5saW5lID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IEJ1dHRvblN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19