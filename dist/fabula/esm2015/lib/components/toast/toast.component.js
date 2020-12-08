/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
import { ToastService } from '../../services/toast.service';
// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';
import { InnerIconComponent } from '../inner-icon/inner-icon.component';
export class ToastComponent extends CommonComponent {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     * @param {?} fabulaService
     * @param {?} toastService
     */
    constructor(cdRef, elRef, fabulaService, toastService) {
        super(elRef, fabulaService);
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.toastService = toastService;
        this.hiding = false;
        this.stacked = false;
        this.height = 0;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.styles = ToastStyles;
        this.initStyles();
        this.props = this;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        let height;
        if (this.stacked) {
            this.stacked = false;
            height = host.querySelector('.fab-toast-wrapper').offsetHeight;
        }
        this.stacked = true;
        this.additionalProps = { height };
        this.height = height;
        this.cdRef.detectChanges();
    }
    // Methods
    /**
     * @return {?}
     */
    hideToast() {
        /** @type {?} */
        const stack = this.toastService.stacks[this.stack];
        this.toastService.hideToast({
            index: this.index,
            stack
        });
    }
    // Getters
    /**
     * @return {?}
     */
    get toastHeight() {
        if (this.stacked) {
            return this.elRef.nativeElement.querySelector('.fab-toast-wrapper').offsetHeight;
        }
        else {
            return null;
        }
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toast',
                template: "<div class=\"fab-toast-wrapper\" data-fab-wrapper=\"toast\" [attr.data-hiding]=\"hiding\"\n  [attr.data-stacked]=\"stacked\" [ngStyle]=\"{ 'height': toastHeight }\">\n  <div class=\"fab-toast\" data-fab-component=\"toast\">\n    <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n    <span class=\"fab-toast__message\" *ngIf=\"message\">{{message}}</span>\n    <ng-content></ng-content>\n    <div class=\"fab-toast__button\" *ngIf=\"!!button || !!hideButton\">\n      <fab-button (click)=\"hideToast()\" [props]=\"hideButton\" size=\"sm\" *ngIf=\"!!hideButton && !button\"></fab-button>\n      <fab-button [props]=\"button\" size=\"sm\" *ngIf=\"button\"></fab-button>\n    </div>\n  </div>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService },
    { type: ToastService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUdMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBTWpGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRzVELE9BQU8sV0FBVyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBT3hFLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBZTs7Ozs7OztJQXVCakQsWUFDUyxLQUF3QixFQUN4QixLQUFpQixFQUNqQixhQUE0QixFQUM1QixZQUEwQjtRQUMvQixLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSnZCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFuQjFCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFPZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBTXpCLFdBQU0sR0FBRyxDQUFDLENBQUM7SUFPc0IsQ0FBQzs7OztJQUVsQyxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNQLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O1lBQ2pDLE1BQU07UUFFVixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUdELFNBQVM7O2NBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUs7U0FDTixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUdELElBQUksV0FBVztRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUNsRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7OztZQXpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBRXJCLHlzQkFBcUM7O2FBQ3RDOzs7O1lBMUJDLGlCQUFpQjtZQUdqQixVQUFVO1lBWUgsYUFBYTtZQUNiLFlBQVk7OztxQkFZbEIsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7a0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSzs0QkFFTCxZQUFZLFNBQUMsa0JBQWtCO3NCQUMvQixTQUFTLFNBQUMsT0FBTzs7OztJQWxCbEIsZ0NBQXFCOztJQUNyQiwrQkFBd0I7O0lBQ3hCLCtCQUF1Qjs7SUFDdkIsK0JBQXdCOztJQUN4Qiw4QkFBdUI7O0lBQ3ZCLG9DQUF5Qjs7SUFDekIsOEJBQXNCOztJQUN0QixnQ0FBd0I7O0lBQ3hCLDhCQUFvQjs7SUFDcEIsK0JBQW9COztJQUNwQixpQ0FBeUI7O0lBQ3pCLGlDQUEwQjs7SUFDMUIsNkJBQXFCOztJQUNyQiwrQkFBdUI7O0lBQ3ZCLGlDQUF5Qjs7SUFDekIsZ0NBQXdCOztJQUV4Qix1Q0FBb0U7O0lBQ3BFLGlDQUF3Qzs7SUFFeEMsZ0NBQVc7O0lBR1QsK0JBQStCOztJQUMvQiwrQkFBd0I7O0lBQ3hCLHVDQUFtQzs7SUFDbkMsc0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24ubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0LnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBUb2FzdFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QnO1xuaW1wb3J0IHsgSW5uZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5uZXItaWNvbi9pbm5lci1pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi10b2FzdCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYnV0dG9uOiBhbnk7XG4gIEBJbnB1dCgpIGNsZWFyOiBib29sZWFuO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBmYWRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZ2xvdzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlkZUJ1dHRvbjogYW55O1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uOiBJY29uO1xuICBASW5wdXQoKSBpbmRleDogYW55O1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG91dGxpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzdGFjazogc3RyaW5nO1xuICBASW5wdXQoKSBzdGFja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGQoSW5uZXJJY29uQ29tcG9uZW50KSBpY29uQ29tcG9uZW50OiBJbm5lckljb25Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RvYXN0JykgdG9hc3RFbDogRWxlbWVudFJlZjtcblxuICBoZWlnaHQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlLFxuICAgIHB1YmxpYyB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gVG9hc3RTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gICAgdGhpcy5wcm9wcyA9IHRoaXM7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgaGVpZ2h0O1xuXG4gICAgaWYgKHRoaXMuc3RhY2tlZCkge1xuICAgICAgdGhpcy5zdGFja2VkID0gZmFsc2U7XG4gICAgICBoZWlnaHQgPSBob3N0LnF1ZXJ5U2VsZWN0b3IoJy5mYWItdG9hc3Qtd3JhcHBlcicpLm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLnN0YWNrZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5hZGRpdGlvbmFsUHJvcHMgPSB7IGhlaWdodCB9O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gTWV0aG9kc1xuICBoaWRlVG9hc3QoKSB7XG4gICAgY29uc3Qgc3RhY2sgPSB0aGlzLnRvYXN0U2VydmljZS5zdGFja3NbdGhpcy5zdGFja107XG4gICAgdGhpcy50b2FzdFNlcnZpY2UuaGlkZVRvYXN0KHtcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgc3RhY2tcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgZ2V0IHRvYXN0SGVpZ2h0KCkge1xuICAgIGlmICh0aGlzLnN0YWNrZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZhYi10b2FzdC13cmFwcGVyJykub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==