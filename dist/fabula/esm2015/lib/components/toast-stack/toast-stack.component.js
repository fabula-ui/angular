/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-stack/toast-stack.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ToastStackStyles from '@fabula/core/styles/components/toast-stack/toast-stack';
export class ToastStackComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.placement = {
            x: 'left',
            y: 'bottom'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ToastStackStyles;
        this.initStyles();
    }
    /**
     * @return {?}
     */
    get visibleToasts() {
        if (this.toasts) {
            /** @type {?} */
            const toasts = this.toasts.map((/**
             * @param {?} toast
             * @param {?} index
             * @return {?}
             */
            (toast, index) => {
                toast.index = index;
                return toast;
            }));
            return toasts.filter((/**
             * @param {?} toast
             * @return {?}
             */
            toast => !toast.hidden));
        }
        else {
            return [];
        }
    }
}
ToastStackComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toast-stack',
                template: "<div class=\"fab-toast-stack\" [attr.data-placement-x]=\"placement.x\" [attr.data-placement-y]=\"placement.y\">\n  <fab-toast [hideButton]=\"toast.hideButton\" [color]=\"toast.color\" [hiding]=\"toast.hiding\" [icon]=\"toast.icon\" [index]=\"toast.index\" [message]=\"toast.message\" [stack]=\"toast.stack\" [stacked]=\"true\" *ngFor=\"let toast of visibleToasts\"></fab-toast>\n</div>"
            }] }
];
/** @nocollapse */
ToastStackComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ToastStackComponent.propDecorators = {
    placement: [{ type: Input }],
    toasts: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ToastStackComponent.prototype.placement;
    /** @type {?} */
    ToastStackComponent.prototype.toasts;
    /** @type {?} */
    ToastStackComponent.prototype.elRef;
    /** @type {?} */
    ToastStackComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtc3RhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3Qtc3RhY2svdG9hc3Qtc3RhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxnQkFBZ0IsTUFBTSx3REFBd0QsQ0FBQztBQU10RixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTs7Ozs7SUFPdEQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFSNUIsY0FBUyxHQUFRO1lBQ3hCLENBQUMsRUFBRSxNQUFNO1lBQ1QsQ0FBQyxFQUFFLFFBQVE7U0FDWixDQUFDO0lBTStCLENBQUM7Ozs7SUFFbEMsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O2tCQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzlDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsRUFBQztZQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2WUFBMkM7YUFDNUM7Ozs7WUFka0MsVUFBVTtZQU1wQyxhQUFhOzs7d0JBVW5CLEtBQUs7cUJBSUwsS0FBSzs7OztJQUpOLHdDQUdFOztJQUNGLHFDQUE0Qjs7SUFHMUIsb0NBQXdCOztJQUN4Qiw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBUb2FzdFN0YWNrU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy90b2FzdC1zdGFjay90b2FzdC1zdGFjayc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi10b2FzdC1zdGFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1zdGFjay5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RTdGFja0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogYW55ID0ge1xuICAgIHg6ICdsZWZ0JyxcbiAgICB5OiAnYm90dG9tJ1xuICB9O1xuICBASW5wdXQoKSB0b2FzdHM6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IFRvYXN0U3RhY2tTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cblxuICBnZXQgdmlzaWJsZVRvYXN0cygpIHtcbiAgICBpZiAodGhpcy50b2FzdHMpIHtcbiAgICAgIGNvbnN0IHRvYXN0cyA9IHRoaXMudG9hc3RzLm1hcCgodG9hc3QsIGluZGV4KSA9PiB7XG4gICAgICAgIHRvYXN0LmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiB0b2FzdDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdG9hc3RzLmZpbHRlcih0b2FzdCA9PiAhdG9hc3QuaGlkZGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufVxuIl19