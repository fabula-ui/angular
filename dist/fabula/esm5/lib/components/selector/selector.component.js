/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/selector/selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Component
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
var SelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectorComponent, _super);
    function SelectorComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.active = false;
        _this.selectedSegment = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SelectorComponent.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        if (this.name) {
            this.selectedSegment.emit(this.name);
        }
    };
    /**
     * @param {?} events
     * @return {?}
     */
    SelectorComponent.prototype.listen = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        events.onChangeSelector.subscribe((/**
         * @param {?} segment
         * @return {?}
         */
        function (segment) {
            _this.active = segment === _this.name;
        }));
    };
    SelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-selector',
                    template: '<div></div>'
                }] }
    ];
    /** @nocollapse */
    SelectorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    SelectorComponent.propDecorators = {
        active: [{ type: Input }],
        activeColor: [{ type: Input }],
        activeTextColor: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        expand: [{ type: Input }],
        faded: [{ type: Input }],
        href: [{ type: Input }],
        inactiveColor: [{ type: Input }],
        inactiveTextColor: [{ type: Input }],
        invert: [{ type: Input }],
        layout: [{ type: Input }],
        link: [{ type: Input }],
        name: [{ type: Input }],
        outline: [{ type: Input }],
        rel: [{ type: Input }],
        rounded: [{ type: Input }],
        scope: [{ type: Input }],
        stacked: [{ type: Input }],
        target: [{ type: Input }],
        type: [{ type: Input }],
        selectedSegment: [{ type: Output }]
    };
    return SelectorComponent;
}(CommonComponent));
export { SelectorComponent };
if (false) {
    /** @type {?} */
    SelectorComponent.prototype.active;
    /** @type {?} */
    SelectorComponent.prototype.activeColor;
    /** @type {?} */
    SelectorComponent.prototype.activeTextColor;
    /** @type {?} */
    SelectorComponent.prototype.clear;
    /** @type {?} */
    SelectorComponent.prototype.color;
    /** @type {?} */
    SelectorComponent.prototype.expand;
    /** @type {?} */
    SelectorComponent.prototype.faded;
    /** @type {?} */
    SelectorComponent.prototype.href;
    /** @type {?} */
    SelectorComponent.prototype.inactiveColor;
    /** @type {?} */
    SelectorComponent.prototype.inactiveTextColor;
    /** @type {?} */
    SelectorComponent.prototype.invert;
    /** @type {?} */
    SelectorComponent.prototype.layout;
    /** @type {?} */
    SelectorComponent.prototype.link;
    /** @type {?} */
    SelectorComponent.prototype.name;
    /** @type {?} */
    SelectorComponent.prototype.outline;
    /** @type {?} */
    SelectorComponent.prototype.rel;
    /** @type {?} */
    SelectorComponent.prototype.rounded;
    /** @type {?} */
    SelectorComponent.prototype.scope;
    /** @type {?} */
    SelectorComponent.prototype.stacked;
    /** @type {?} */
    SelectorComponent.prototype.target;
    /** @type {?} */
    SelectorComponent.prototype.type;
    /** @type {?} */
    SelectorComponent.prototype.selectedSegment;
    /** @type {?} */
    SelectorComponent.prototype.elRef;
    /** @type {?} */
    SelectorComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUduRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RDtJQUl1Qyw2Q0FBZTtJQXlCbEQsMkJBQ1csS0FBaUIsRUFDakIsYUFBNEI7UUFGdkMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGdkIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTFCOUIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQXNCZCxxQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O0lBS2QsQ0FBQzs7OztJQUVsQyx1Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRTtJQUM1RCxDQUFDOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxNQUFNO1FBQWIsaUJBSUM7UUFIRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBMUNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7aUJBQzFCOzs7O2dCQVhtQixVQUFVO2dCQU1yQixhQUFhOzs7eUJBT2pCLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxLQUFLO29DQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tDQUVMLE1BQU07O0lBZ0JYLHdCQUFDO0NBQUEsQUEzQ0QsQ0FJdUMsZUFBZSxHQXVDckQ7U0F2Q1ksaUJBQWlCOzs7SUFDMUIsbUNBQXdCOztJQUN4Qix3Q0FBNkI7O0lBQzdCLDRDQUFpQzs7SUFDakMsa0NBQXdCOztJQUN4QixrQ0FBdUI7O0lBQ3ZCLG1DQUF5Qjs7SUFDekIsa0NBQXdCOztJQUN4QixpQ0FBc0I7O0lBQ3RCLDBDQUErQjs7SUFDL0IsOENBQW1DOztJQUNuQyxtQ0FBeUI7O0lBQ3pCLG1DQUF3Qjs7SUFDeEIsaUNBQXNCOztJQUN0QixpQ0FBc0I7O0lBQ3RCLG9DQUEwQjs7SUFDMUIsZ0NBQXFCOztJQUNyQixvQ0FBMEI7O0lBQzFCLGtDQUF1Qjs7SUFDdkIsb0NBQTBCOztJQUMxQixtQ0FBd0I7O0lBQ3hCLGlDQUFzQjs7SUFFdEIsNENBQStDOztJQUczQyxrQ0FBd0I7O0lBQ3hCLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1zZWxlY3RvcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGFjdGl2ZUNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYWN0aXZlVGV4dENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xlYXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBleHBhbmQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZmFkZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGluYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbmFjdGl2ZVRleHRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGludmVydDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBsYXlvdXQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBsaW5rOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG91dGxpbmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzY29wZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN0YWNrZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkU2VnbWVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm5hbWUpIHsgdGhpcy5zZWxlY3RlZFNlZ21lbnQuZW1pdCh0aGlzLm5hbWUpOyB9XG4gICAgfVxuXG4gICAgbGlzdGVuKGV2ZW50cykge1xuICAgICAgICBldmVudHMub25DaGFuZ2VTZWxlY3Rvci5zdWJzY3JpYmUoc2VnbWVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHNlZ21lbnQgPT09IHRoaXMubmFtZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==