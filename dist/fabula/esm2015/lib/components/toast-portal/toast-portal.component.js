/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-portal/toast-portal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
// Services
import { ToastService } from '../../services/toast.service';
export class ToastPortalComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get stacks() {
        return Object.keys(this.toastService.stacks).map((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            return this.toastService.stacks[name];
        }));
    }
}
ToastPortalComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toast-portal',
                template: "<fab-toast-stack *ngFor=\"let stack of stacks\" [placement]=\"stack.placement\" [toasts]=\"stack.toasts\"></fab-toast-stack>"
            }] }
];
/** @nocollapse */
ToastPortalComponent.ctorParameters = () => [
    { type: ToastService }
];
if (false) {
    /** @type {?} */
    ToastPortalComponent.prototype.toastService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcG9ydGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0LXBvcnRhbC90b2FzdC1wb3J0YWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFHbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTTVELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBbUIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBSSxDQUFDOzs7O0lBRWxELFFBQVEsS0FBSyxDQUFDOzs7O0lBRWQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsd0lBQTRDO2FBQzdDOzs7O1lBTFEsWUFBWTs7OztJQU9QLDRDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLXRvYXN0LXBvcnRhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1wb3J0YWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0UG9ydGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIGdldCBzdGFja3MoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudG9hc3RTZXJ2aWNlLnN0YWNrcykubWFwKG5hbWUgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudG9hc3RTZXJ2aWNlLnN0YWNrc1tuYW1lXTtcbiAgICB9KTtcbiAgfVxufVxuIl19