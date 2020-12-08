/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-portal/toast-portal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
// Services
import { ToastService } from '../../services/toast.service';
var ToastPortalComponent = /** @class */ (function () {
    function ToastPortalComponent(toastService) {
        this.toastService = toastService;
    }
    /**
     * @return {?}
     */
    ToastPortalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    Object.defineProperty(ToastPortalComponent.prototype, "stacks", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return Object.keys(this.toastService.stacks).map((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                return _this.toastService.stacks[name];
            }));
        },
        enumerable: true,
        configurable: true
    });
    ToastPortalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-toast-portal',
                    template: "<fab-toast-stack *ngFor=\"let stack of stacks\" [placement]=\"stack.placement\" [toasts]=\"stack.toasts\"></fab-toast-stack>"
                }] }
    ];
    /** @nocollapse */
    ToastPortalComponent.ctorParameters = function () { return [
        { type: ToastService }
    ]; };
    return ToastPortalComponent;
}());
export { ToastPortalComponent };
if (false) {
    /** @type {?} */
    ToastPortalComponent.prototype.toastService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcG9ydGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0LXBvcnRhbC90b2FzdC1wb3J0YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFHbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVEO0lBS0UsOEJBQW1CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQzs7OztJQUVsRCx1Q0FBUTs7O0lBQVIsY0FBYSxDQUFDO0lBRWQsc0JBQUksd0NBQU07Ozs7UUFBVjtZQUFBLGlCQUlDO1lBSEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDbkQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsd0lBQTRDO2lCQUM3Qzs7OztnQkFMUSxZQUFZOztJQWdCckIsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxvQkFBb0I7OztJQUNuQiw0Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9hc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi10b2FzdC1wb3J0YWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtcG9ydGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdFBvcnRhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBnZXQgc3RhY2tzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRvYXN0U2VydmljZS5zdGFja3MpLm1hcChuYW1lID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnRvYXN0U2VydmljZS5zdGFja3NbbmFtZV07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==