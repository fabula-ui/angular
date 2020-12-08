/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/divider/divider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DividerStyles from '@fabula/core/styles/components/divider/divider';
var DividerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DividerComponent, _super);
    function DividerComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    DividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = DividerStyles;
        this.initStyles();
    };
    DividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-divider',
                    template: "<div class=\"fab-divider\"></div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    DividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DividerComponent.propDecorators = {
        label: [{ type: Input }],
        textColor: [{ type: Input }]
    };
    return DividerComponent;
}(CommonComponent));
export { DividerComponent };
if (false) {
    /** @type {?} */
    DividerComponent.prototype.label;
    /** @type {?} */
    DividerComponent.prototype.textColor;
    /** @type {?} */
    DividerComponent.prototype.elRef;
    /** @type {?} */
    DividerComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFUixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sYUFBYSxNQUFNLGdEQUFnRCxDQUFDO0FBRTNFO0lBS3NDLDRDQUFlO0lBSWpELDBCQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnZDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnZCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBQ04sQ0FBQzs7OztJQUVsQyxtQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBakJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFFdkIsNkNBQXVDOztpQkFDMUM7Ozs7Z0JBbEJHLFVBQVU7Z0JBU0wsYUFBYTs7O3dCQVdqQixLQUFLOzRCQUNMLEtBQUs7O0lBV1YsdUJBQUM7Q0FBQSxBQWxCRCxDQUtzQyxlQUFlLEdBYXBEO1NBYlksZ0JBQWdCOzs7SUFDekIsaUNBQXVCOztJQUN2QixxQ0FBMkI7O0lBR3ZCLGlDQUF3Qjs7SUFDeEIseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgRGl2aWRlclN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvZGl2aWRlci9kaXZpZGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWItZGl2aWRlcicsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGl2aWRlci5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGl2aWRlckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gRGl2aWRlclN0eWxlcztcbiAgICAgICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gICAgfVxufVxuIl19