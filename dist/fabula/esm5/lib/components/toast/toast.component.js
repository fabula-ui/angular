/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
import { ToastService } from '../../services/toast.service';
// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';
import { InnerIconComponent } from '../inner-icon/inner-icon.component';
var ToastComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ToastComponent, _super);
    function ToastComponent(cdRef, elRef, fabulaService, toastService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.cdRef = cdRef;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.toastService = toastService;
        _this.hiding = false;
        _this.stacked = false;
        _this.height = 0;
        return _this;
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.styles = ToastStyles;
        this.initStyles();
        this.props = this;
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var height;
        if (this.stacked) {
            this.stacked = false;
            height = host.querySelector('.fab-toast-wrapper').offsetHeight;
        }
        this.stacked = true;
        this.additionalProps = { height: height };
        this.height = height;
        this.cdRef.detectChanges();
    };
    // Methods
    // Methods
    /**
     * @return {?}
     */
    ToastComponent.prototype.hideToast = 
    // Methods
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stack = this.toastService.stacks[this.stack];
        this.toastService.hideToast({
            index: this.index,
            stack: stack
        });
    };
    Object.defineProperty(ToastComponent.prototype, "toastHeight", {
        // Getters
        get: 
        // Getters
        /**
         * @return {?}
         */
        function () {
            if (this.stacked) {
                return this.elRef.nativeElement.querySelector('.fab-toast-wrapper').offsetHeight;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-toast',
                    template: "<div class=\"fab-toast-wrapper\" data-fab-wrapper=\"toast\" [attr.data-hiding]=\"hiding\"\n  [attr.data-stacked]=\"stacked\" [ngStyle]=\"{ 'height': toastHeight }\">\n  <div class=\"fab-toast\" data-fab-component=\"toast\">\n    <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n    <span class=\"fab-toast__message\" *ngIf=\"message\">{{message}}</span>\n    <ng-content></ng-content>\n    <div class=\"fab-toast__button\" *ngIf=\"!!button || !!hideButton\">\n      <fab-button (click)=\"hideToast()\" [props]=\"hideButton\" size=\"sm\" *ngIf=\"!!hideButton && !button\"></fab-button>\n      <fab-button [props]=\"button\" size=\"sm\" *ngIf=\"button\"></fab-button>\n    </div>\n  </div>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService },
        { type: ToastService }
    ]; };
    ToastComponent.propDecorators = {
        button: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        hideButton: [{ type: Input }],
        href: [{ type: Input }],
        hiding: [{ type: Input }],
        icon: [{ type: Input }],
        index: [{ type: Input }],
        message: [{ type: Input }],
        outline: [{ type: Input }],
        rel: [{ type: Input }],
        stack: [{ type: Input }],
        stacked: [{ type: Input }],
        target: [{ type: Input }],
        iconComponent: [{ type: ContentChild, args: [InnerIconComponent,] }],
        toastEl: [{ type: ViewChild, args: ['toast',] }]
    };
    return ToastComponent;
}(CommonComponent));
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.button;
    /** @type {?} */
    ToastComponent.prototype.clear;
    /** @type {?} */
    ToastComponent.prototype.color;
    /** @type {?} */
    ToastComponent.prototype.faded;
    /** @type {?} */
    ToastComponent.prototype.glow;
    /** @type {?} */
    ToastComponent.prototype.hideButton;
    /** @type {?} */
    ToastComponent.prototype.href;
    /** @type {?} */
    ToastComponent.prototype.hiding;
    /** @type {?} */
    ToastComponent.prototype.icon;
    /** @type {?} */
    ToastComponent.prototype.index;
    /** @type {?} */
    ToastComponent.prototype.message;
    /** @type {?} */
    ToastComponent.prototype.outline;
    /** @type {?} */
    ToastComponent.prototype.rel;
    /** @type {?} */
    ToastComponent.prototype.stack;
    /** @type {?} */
    ToastComponent.prototype.stacked;
    /** @type {?} */
    ToastComponent.prototype.target;
    /** @type {?} */
    ToastComponent.prototype.iconComponent;
    /** @type {?} */
    ToastComponent.prototype.toastEl;
    /** @type {?} */
    ToastComponent.prototype.height;
    /** @type {?} */
    ToastComponent.prototype.cdRef;
    /** @type {?} */
    ToastComponent.prototype.elRef;
    /** @type {?} */
    ToastComponent.prototype.fabulaService;
    /** @type {?} */
    ToastComponent.prototype.toastService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFHTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQU1qRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUc1RCxPQUFPLFdBQVcsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV4RTtJQUtvQywwQ0FBZTtJQXVCakQsd0JBQ1MsS0FBd0IsRUFDeEIsS0FBaUIsRUFDakIsYUFBNEIsRUFDNUIsWUFBMEI7UUFKbkMsWUFLSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFKekIsV0FBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBWSxHQUFaLFlBQVksQ0FBYztRQW5CMUIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQU9mLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFNekIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUFPc0IsQ0FBQzs7OztJQUVsQywyQ0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsd0NBQWU7OztJQUFmOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O1lBQ2pDLE1BQU07UUFFVixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxVQUFVOzs7OztJQUNWLGtDQUFTOzs7OztJQUFUOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLE9BQUE7U0FDTixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0Qsc0JBQUksdUNBQVc7UUFEZixVQUFVOzs7Ozs7UUFDVjtZQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDbEY7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDYjtRQUNILENBQUM7OztPQUFBOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUVyQix5c0JBQXFDOztpQkFDdEM7Ozs7Z0JBMUJDLGlCQUFpQjtnQkFHakIsVUFBVTtnQkFZSCxhQUFhO2dCQUNiLFlBQVk7Ozt5QkFZbEIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztnQ0FFTCxZQUFZLFNBQUMsa0JBQWtCOzBCQUMvQixTQUFTLFNBQUMsT0FBTzs7SUFrRHBCLHFCQUFDO0NBQUEsQUExRUQsQ0FLb0MsZUFBZSxHQXFFbEQ7U0FyRVksY0FBYzs7O0lBQ3pCLGdDQUFxQjs7SUFDckIsK0JBQXdCOztJQUN4QiwrQkFBdUI7O0lBQ3ZCLCtCQUF3Qjs7SUFDeEIsOEJBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLDhCQUFzQjs7SUFDdEIsZ0NBQXdCOztJQUN4Qiw4QkFBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsaUNBQXlCOztJQUN6QixpQ0FBMEI7O0lBQzFCLDZCQUFxQjs7SUFDckIsK0JBQXVCOztJQUN2QixpQ0FBeUI7O0lBQ3pCLGdDQUF3Qjs7SUFFeEIsdUNBQW9FOztJQUNwRSxpQ0FBd0M7O0lBRXhDLGdDQUFXOztJQUdULCtCQUErQjs7SUFDL0IsK0JBQXdCOztJQUN4Qix1Q0FBbUM7O0lBQ25DLHNDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIE1vZGVsc1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL21vZGVscy9pY29uLm1vZGVsJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVG9hc3RTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3RvYXN0L3RvYXN0JztcbmltcG9ydCB7IElubmVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2lubmVyLWljb24vaW5uZXItaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItdG9hc3QnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGJ1dHRvbjogYW55O1xuICBASW5wdXQoKSBjbGVhcjogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZmFkZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGdsb3c6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpZGVCdXR0b246IGFueTtcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogSWNvbjtcbiAgQElucHV0KCkgaW5kZXg6IGFueTtcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBvdXRsaW5lOiBib29sZWFuO1xuICBASW5wdXQoKSByZWw6IHN0cmluZztcbiAgQElucHV0KCkgc3RhY2s6IHN0cmluZztcbiAgQElucHV0KCkgc3RhY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkKElubmVySWNvbkNvbXBvbmVudCkgaWNvbkNvbXBvbmVudDogSW5uZXJJY29uQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCd0b2FzdCcpIHRvYXN0RWw6IEVsZW1lbnRSZWY7XG5cbiAgaGVpZ2h0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZSxcbiAgICBwdWJsaWMgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IFRvYXN0U3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIHRoaXMucHJvcHMgPSB0aGlzO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGhlaWdodDtcblxuICAgIGlmICh0aGlzLnN0YWNrZWQpIHtcbiAgICAgIHRoaXMuc3RhY2tlZCA9IGZhbHNlO1xuICAgICAgaGVpZ2h0ID0gaG9zdC5xdWVyeVNlbGVjdG9yKCcuZmFiLXRvYXN0LXdyYXBwZXInKS5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFja2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuYWRkaXRpb25hbFByb3BzID0geyBoZWlnaHQgfTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIE1ldGhvZHNcbiAgaGlkZVRvYXN0KCkge1xuICAgIGNvbnN0IHN0YWNrID0gdGhpcy50b2FzdFNlcnZpY2Uuc3RhY2tzW3RoaXMuc3RhY2tdO1xuICAgIHRoaXMudG9hc3RTZXJ2aWNlLmhpZGVUb2FzdCh7XG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIHN0YWNrXG4gICAgfSk7XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIGdldCB0b2FzdEhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5zdGFja2VkKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWItdG9hc3Qtd3JhcHBlcicpLm9mZnNldEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=