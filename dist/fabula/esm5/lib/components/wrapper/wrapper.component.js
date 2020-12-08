/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/wrapper/wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import WrapperStyles from '@fabula/core/styles/components/wrapper/wrapper';
var WrapperComponent = /** @class */ (function (_super) {
    tslib_1.__extends(WrapperComponent, _super);
    function WrapperComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    WrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = WrapperStyles;
        this.initStyles();
    };
    WrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-wrapper',
                    template: "<div class=\"fab-wrapper\" data-fab-component=\"wrapper\">\n    <ng-content></ng-content>\n</div>",
                    styles: [":host{display:block}:host .fab-wrapper{height:100%;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    WrapperComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    WrapperComponent.propDecorators = {
        bgColor: [{ type: Input }],
        color: [{ type: Input }]
    };
    return WrapperComponent;
}(CommonComponent));
export { WrapperComponent };
if (false) {
    /** @type {?} */
    WrapperComponent.prototype.bgColor;
    /** @type {?} */
    WrapperComponent.prototype.color;
    /** @type {?} */
    WrapperComponent.prototype.elRef;
    /** @type {?} */
    WrapperComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93cmFwcGVyL3dyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sYUFBYSxNQUFNLGdEQUFnRCxDQUFDO0FBRTNFO0lBS3NDLDRDQUFlO0lBSWpELDBCQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnZDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnZCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBQ04sQ0FBQzs7OztJQUVsQyxtQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBakJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFFdkIsNkdBQXVDOztpQkFDMUM7Ozs7Z0JBZm1CLFVBQVU7Z0JBTXJCLGFBQWE7OzswQkFXakIsS0FBSzt3QkFDTCxLQUFLOztJQVdWLHVCQUFDO0NBQUEsQUFsQkQsQ0FLc0MsZUFBZSxHQWFwRDtTQWJZLGdCQUFnQjs7O0lBQ3pCLG1DQUF5Qjs7SUFDekIsaUNBQXVCOztJQUduQixpQ0FBd0I7O0lBQ3hCLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFdyYXBwZXJTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3dyYXBwZXIvd3JhcHBlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLXdyYXBwZXInLFxuICAgIHN0eWxlVXJsczogWycuL3dyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vd3JhcHBlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IFdyYXBwZXJTdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cbn1cbiJdfQ==