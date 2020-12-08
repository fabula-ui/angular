/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input/input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import InputStyles from '@fabula/core/styles/components/input/input';
export class InputComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.focused = false;
        this.disabled = false;
        this.expand = false;
        this.glow = false;
        this.passwordToggle = false;
        this.placeholder = '';
        this.rounded = false;
        this.size = 'md';
        this.textarea = false;
        this.type = 'text';
        this.hasFocus = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = InputStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?} hasFocus
     * @return {?}
     */
    handleFocus(hasFocus) {
        this.focused = hasFocus;
        this.hasFocus = hasFocus;
    }
    /**
     * @param {?} subject
     * @return {?}
     */
    isObject(subject) {
        return typeof subject === 'object';
    }
    /**
     * @return {?}
     */
    toggleType() {
        this.type = this.type === 'text' ? 'password' : 'text';
    }
    /**
     * @return {?}
     */
    get toggleIcon() {
        return this.type === 'text' ? 'eye-off' : 'eye';
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-input',
                template: "<div class=\"fab-input-wrapper\" [attr.data-focus]=\"hasFocus\" data-fab-wrapper=\"input\">\n  <div class=\"fab-input\" [attr.data-disabled]=\"disabled\" [attr.data-focus]=\"hasFocus\" [attr.data-textarea]=\"!!textarea\"\n    [attr.data-variant]=\"variant\" data-fab-component=\"input\">\n    <div class=\"fab-input__icon\" data-placement=\"start\" *ngIf=\"icon || iconStart\">\n      <fab-icon [props]=\"icon\" *ngIf=\"icon\"></fab-icon>\n      <fab-icon [props]=\"iconStart\" *ngIf=\"iconStart\"></fab-icon>\n    </div>\n\n    <input class=\"fab-input__field\" [disabled]=\"disabled\" (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\"\n      [attr.placeholder]=\"placeholder\" [attr.type]=\"type\" *ngIf=\"!textarea\">\n\n    <textarea class=\"fab-input__field\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\" [attr.type]=\"type\"\n      (blur)=\"handleFocus(false)\" (focus)=\"handleFocus(true)\" *ngIf=\"textarea\"></textarea>\n\n    <div class=\"fab-input__icon\" data-placement=\"end\" *ngIf=\"iconEnd && !passwordToggle\">\n      <fab-icon [props]=\"iconEnd\"></fab-icon>\n    </div>\n\n    <button class=\"fab-input__password-toggle\" (click)=\"toggleType()\" [attr.data-toggled]=\"type === 'text'\"\n      *ngIf=\"passwordToggle\">\n      <fab-icon [name]=\"toggleIcon\"></fab-icon>\n    </button>\n\n    <div class=\"fab-input__elements\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-input__message\" *ngIf=\"message && message.text\">\n    <span>{{message.text}}</span>\n  </div>\n</div>",
                styles: [":host{display:block}:host[data-focus=true]{z-index:1}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
InputComponent.propDecorators = {
    focused: [{ type: HostBinding, args: ['attr.data-focus',] }],
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    expand: [{ type: Input }],
    glow: [{ type: Input }],
    has: [{ type: Input }],
    icon: [{ type: Input }],
    iconEnd: [{ type: Input }],
    iconStart: [{ type: Input }],
    message: [{ type: Input }],
    passwordToggle: [{ type: Input }],
    placeholder: [{ type: Input }],
    rounded: [{ type: Input }],
    size: [{ type: Input }],
    status: [{ type: Input }],
    textarea: [{ type: Input }],
    type: [{ type: Input }],
    variant: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputComponent.prototype.focused;
    /** @type {?} */
    InputComponent.prototype.color;
    /** @type {?} */
    InputComponent.prototype.disabled;
    /** @type {?} */
    InputComponent.prototype.expand;
    /** @type {?} */
    InputComponent.prototype.glow;
    /** @type {?} */
    InputComponent.prototype.has;
    /** @type {?} */
    InputComponent.prototype.icon;
    /** @type {?} */
    InputComponent.prototype.iconEnd;
    /** @type {?} */
    InputComponent.prototype.iconStart;
    /** @type {?} */
    InputComponent.prototype.message;
    /** @type {?} */
    InputComponent.prototype.passwordToggle;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.rounded;
    /** @type {?} */
    InputComponent.prototype.size;
    /** @type {?} */
    InputComponent.prototype.status;
    /** @type {?} */
    InputComponent.prototype.textarea;
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.variant;
    /** @type {?} */
    InputComponent.prototype.hasFocus;
    /** @type {?} */
    InputComponent.prototype.host;
    /** @type {?} */
    InputComponent.prototype.elRef;
    /** @type {?} */
    InputComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFUixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQU9qRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sV0FBVyxNQUFNLDRDQUE0QyxDQUFDO0FBT3JFLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBZTs7Ozs7SUF3Qi9DLFlBQ1csS0FBaUIsRUFDakIsYUFBNEI7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZyQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBekJQLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHdkMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsU0FBSSxHQUFHLEtBQUssQ0FBQztRQU1iLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUVaLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUd2QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBTWdCLENBQUM7Ozs7SUFFbEMsUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFHRCxXQUFXLENBQUMsUUFBaUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBTztRQUNaLE9BQU8sT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BELENBQUM7OztZQXZESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBRXJCLDZoREFBcUM7O2FBQ3hDOzs7O1lBdkJHLFVBQVU7WUFjTCxhQUFhOzs7c0JBV2pCLFdBQVcsU0FBQyxpQkFBaUI7b0JBRTdCLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQWxCTixpQ0FBZ0Q7O0lBRWhELCtCQUF1Qjs7SUFDdkIsa0NBQTBCOztJQUMxQixnQ0FBd0I7O0lBQ3hCLDhCQUFzQjs7SUFDdEIsNkJBQXFCOztJQUNyQiw4QkFBb0I7O0lBQ3BCLGlDQUF1Qjs7SUFDdkIsbUNBQXlCOztJQUN6QixpQ0FBMEI7O0lBQzFCLHdDQUFnQzs7SUFDaEMscUNBQTBCOztJQUMxQixpQ0FBeUI7O0lBQ3pCLDhCQUFxQjs7SUFDckIsZ0NBQXdCOztJQUN4QixrQ0FBMEI7O0lBQzFCLDhCQUF1Qjs7SUFDdkIsaUNBQXlCOztJQUV6QixrQ0FBaUI7O0lBQ2pCLDhCQUFLOztJQUdELCtCQUF3Qjs7SUFDeEIsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBNb2RlbHNcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL21lc3NhZ2UubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgSW5wdXRTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2lucHV0L2lucHV0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWItaW5wdXQnLFxuICAgIHN0eWxlVXJsczogWydpbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1mb2N1cycpIGZvY3VzZWQgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBleHBhbmQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBnbG93ID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGFzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaWNvbjogSWNvbjtcbiAgICBASW5wdXQoKSBpY29uRW5kOiBJY29uO1xuICAgIEBJbnB1dCgpIGljb25TdGFydDogSWNvbjtcbiAgICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xuICAgIEBJbnB1dCgpIHBhc3N3b3JkVG9nZ2xlID0gZmFsc2U7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgICBASW5wdXQoKSByb3VuZGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2l6ZSA9ICdtZCc7XG4gICAgQElucHV0KCkgc3RhdHVzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGV4dGFyZWEgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICAgIEBJbnB1dCgpIHZhcmlhbnQ6IHN0cmluZztcblxuICAgIGhhc0ZvY3VzID0gZmFsc2U7XG4gICAgaG9zdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gSW5wdXRTdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZHNcbiAgICBoYW5kbGVGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBoYXNGb2N1cztcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGhhc0ZvY3VzO1xuICAgIH1cblxuICAgIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JztcbiAgICB9XG5cbiAgICB0b2dnbGVUeXBlKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUgPT09ICd0ZXh0JyA/ICdwYXNzd29yZCcgOiAndGV4dCc7XG4gICAgfVxuXG4gICAgZ2V0IHRvZ2dsZUljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ3RleHQnID8gJ2V5ZS1vZmYnIDogJ2V5ZSc7XG4gICAgfVxuXG59XG4iXX0=