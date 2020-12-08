/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list-header/list-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ListHeaderStyles from '@fabula/core/styles/components/list-header/list-header';
export class ListHeaderComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ListHeaderStyles;
        this.initStyles();
    }
}
ListHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-list-header',
                template: "<div class=\"fab-list-header\" data-fab-component=\"listHeader\">\n    <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
ListHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ListHeaderComponent.propDecorators = {
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListHeaderComponent.prototype.color;
    /** @type {?} */
    ListHeaderComponent.prototype.elRef;
    /** @type {?} */
    ListHeaderComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbGlzdC1oZWFkZXIvbGlzdC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxnQkFBZ0IsTUFBTSx3REFBd0QsQ0FBQztBQU10RixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTs7Ozs7SUFHcEQsWUFDVyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDSixDQUFDOzs7O0lBRXBDLFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFmSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isb0hBQTJDO2FBQzlDOzs7O1lBZDJCLFVBQVU7WUFNN0IsYUFBYTs7O29CQVVqQixLQUFLOzs7O0lBQU4sb0NBQXVCOztJQUduQixvQ0FBd0I7O0lBQ3hCLDRDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IExpc3RIZWFkZXJTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2xpc3QtaGVhZGVyL2xpc3QtaGVhZGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWItbGlzdC1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEhlYWRlckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBMaXN0SGVhZGVyU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgICB9XG59XG4iXX0=