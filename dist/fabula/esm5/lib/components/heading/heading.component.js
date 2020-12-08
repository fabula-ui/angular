/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/heading/heading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';
var HeadingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeadingComponent, _super);
    function HeadingComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.color = '';
        _this.level = 1;
        return _this;
    }
    /**
     * @return {?}
     */
    HeadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = HeadingStyles;
        this.initStyles();
    };
    HeadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-heading',
                    template: "<h1 class=\"fab-heading\" *ngIf=\"level == 1\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h1>\n<h2 class=\"fab-heading\" *ngIf=\"level == 2\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h2>\n<h3 class=\"fab-heading\" *ngIf=\"level == 3\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h3>\n<h4 class=\"fab-heading\" *ngIf=\"level == 4\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h4>\n<h5 class=\"fab-heading\" *ngIf=\"level == 5\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h5>\n<h6 class=\"fab-heading\" *ngIf=\"level == 6\" data-fab-component=\"heading\"><ng-content *ngTemplateOutlet=\"content\"></ng-content></h6>\n\n<ng-template #content><ng-content></ng-content></ng-template>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    HeadingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    HeadingComponent.propDecorators = {
        color: [{ type: Input }],
        level: [{ type: Input }],
        weight: [{ type: Input }]
    };
    return HeadingComponent;
}(CommonComponent));
export { HeadingComponent };
if (false) {
    /** @type {?} */
    HeadingComponent.prototype.color;
    /** @type {?} */
    HeadingComponent.prototype.level;
    /** @type {?} */
    HeadingComponent.prototype.weight;
    /** @type {?} */
    HeadingComponent.prototype.elRef;
    /** @type {?} */
    HeadingComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sYUFBYSxNQUFNLGdEQUFnRCxDQUFDO0FBRTNFO0lBS3NDLDRDQUFlO0lBS25ELDBCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFONUIsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBTWMsQ0FBQzs7OztJQUVsQyxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFFdkIsbTVCQUF1Qzs7aUJBQ3hDOzs7O2dCQWZtQixVQUFVO2dCQU1yQixhQUFhOzs7d0JBV25CLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQVdSLHVCQUFDO0NBQUEsQUFuQkQsQ0FLc0MsZUFBZSxHQWNwRDtTQWRZLGdCQUFnQjs7O0lBQzNCLGlDQUFvQjs7SUFDcEIsaUNBQW1COztJQUNuQixrQ0FBcUI7O0lBR25CLGlDQUF3Qjs7SUFDeEIseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgSGVhZGluZ1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvaGVhZGluZy9oZWFkaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLWhlYWRpbmcnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkaW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkaW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFkaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29sb3IgPSAnJztcbiAgQElucHV0KCkgbGV2ZWwgPSAxO1xuICBASW5wdXQoKSB3ZWlnaHQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gSGVhZGluZ1N0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19