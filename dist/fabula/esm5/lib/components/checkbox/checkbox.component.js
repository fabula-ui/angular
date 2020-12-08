/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CheckboxStyles from '@fabula/core/styles/components/checkbox/checkbox';
var CheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxComponent, _super);
    function CheckboxComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.checked = false;
        _this.disabled = false;
        _this.indeterminate = false;
        _this.readOnly = false;
        _this.rounded = false;
        _this.size = 'md';
        _this.change = new EventEmitter();
        _this.check = new EventEmitter();
        _this.uncheck = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = CheckboxStyles;
        this.initStyles();
    };
    // Methods
    // Methods
    /**
     * @param {?=} e
     * @return {?}
     */
    CheckboxComponent.prototype.handleChange = 
    // Methods
    /**
     * @param {?=} e
     * @return {?}
     */
    function (e) {
        if (!this.disabled && !this.readOnly) {
            this.checked = !!e ? e.target.checked : !this.checked;
            this.indeterminate = !!e ? e.target.indeterminate : false;
        }
        this.handleEvents();
    };
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.handleEvents = /**
     * @return {?}
     */
    function () {
        this.change.emit();
        if (this.checked) {
            this.check.emit();
        }
        if (!this.checked) {
            this.uncheck.emit();
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "currentIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.indeterminate ? { name: 'minus' } : { name: 'check' };
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-checkbox',
                    template: "<div class=\"fab-checkbox-wrapper\" data-fab-wrapper=\"checkbox\">\n  <div class=\"fab-checkbox\" [attr.data-checked]=\"checked\" [attr.data-disabled]=\"disabled\"\n    [attr.data-indeterminate]=\"indeterminate\" [attr.data-read-only]=\"readOnly\" data-fab-component=\"checkbox\">\n    <div class=\"fab-checkbox__square\" (click)=\"handleChange()\">\n      <fab-icon [props]=\"currentIcon\"></fab-icon>\n    </div>\n    <label class=\"fab-checkbox__label\">\n      <input [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" (change)=\"handleChange($event)\"\n        type=\"checkbox\">\n      <ng-container *ngIf=\"label\">{{label}}</ng-container>\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </label>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CheckboxComponent.propDecorators = {
        activeColor: [{ type: Input }],
        checked: [{ type: Input }],
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        inactiveColor: [{ type: Input }],
        indeterminate: [{ type: Input }],
        label: [{ type: Input }],
        readOnly: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }],
        change: [{ type: Output }],
        check: [{ type: Output }],
        uncheck: [{ type: Output }]
    };
    return CheckboxComponent;
}(CommonComponent));
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.activeColor;
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /** @type {?} */
    CheckboxComponent.prototype.color;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.inactiveColor;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    CheckboxComponent.prototype.label;
    /** @type {?} */
    CheckboxComponent.prototype.readOnly;
    /** @type {?} */
    CheckboxComponent.prototype.rounded;
    /** @type {?} */
    CheckboxComponent.prototype.size;
    /** @type {?} */
    CheckboxComponent.prototype.change;
    /** @type {?} */
    CheckboxComponent.prototype.check;
    /** @type {?} */
    CheckboxComponent.prototype.uncheck;
    /** @type {?} */
    CheckboxComponent.prototype.elRef;
    /** @type {?} */
    CheckboxComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBTWpGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxjQUFjLE1BQU0sa0RBQWtELENBQUM7QUFFOUU7SUFJdUMsNkNBQWU7SUFnQnBELDJCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFoQjVCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUVYLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsYUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQUt6QixDQUFDOzs7O0lBRWxDLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVTs7Ozs7O0lBQ1Ysd0NBQVk7Ozs7OztJQUFaLFVBQWEsQ0FBRTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtJQUM3QyxDQUFDO0lBRUQsc0JBQUksMENBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFBO1FBQ25FLENBQUM7OztPQUFBOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixnekJBQXdDO2lCQUN6Qzs7OztnQkFqQm1CLFVBQVU7Z0JBU3JCLGFBQWE7Ozs4QkFVbkIsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFFTCxNQUFNO3dCQUNOLE1BQU07MEJBQ04sTUFBTTs7SUFnQ1Qsd0JBQUM7Q0FBQSxBQWxERCxDQUl1QyxlQUFlLEdBOENyRDtTQTlDWSxpQkFBaUI7OztJQUM1Qix3Q0FBNkI7O0lBQzdCLG9DQUF5Qjs7SUFDekIsa0NBQXVCOztJQUN2QixxQ0FBMEI7O0lBQzFCLDBDQUErQjs7SUFDL0IsMENBQStCOztJQUMvQixrQ0FBdUI7O0lBQ3ZCLHFDQUEwQjs7SUFDMUIsb0NBQXlCOztJQUN6QixpQ0FBcUI7O0lBRXJCLG1DQUF5RDs7SUFDekQsa0NBQXdEOztJQUN4RCxvQ0FBMEQ7O0lBR3hELGtDQUF3Qjs7SUFDeEIsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24ubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ2hlY2tib3hTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhY3RpdmVDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGluYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSByZWFkT25seSA9IGZhbHNlO1xuICBASW5wdXQoKSByb3VuZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemUgPSAnbWQnO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hlY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdW5jaGVjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IENoZWNrYm94U3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG5cbiAgLy8gTWV0aG9kc1xuICBoYW5kbGVDaGFuZ2UoZT8pIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9ICEhZSA/IGUudGFyZ2V0LmNoZWNrZWQgOiAhdGhpcy5jaGVja2VkO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gISFlID8gZS50YXJnZXQuaW5kZXRlcm1pbmF0ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlRXZlbnRzKCk7XG4gIH1cblxuICBoYW5kbGVFdmVudHMoKSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCgpO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tlZCkgeyB0aGlzLmNoZWNrLmVtaXQoKTsgfVxuICAgIGlmICghdGhpcy5jaGVja2VkKSB7IHRoaXMudW5jaGVjay5lbWl0KCk7IH1cbiAgfVxuXG4gIGdldCBjdXJyZW50SWNvbigpOiBJY29uIHtcbiAgICByZXR1cm4gdGhpcy5pbmRldGVybWluYXRlID8geyBuYW1lOiAnbWludXMnIH0gOiB7IG5hbWU6ICdjaGVjaycgfVxuICB9XG59XG4iXX0=