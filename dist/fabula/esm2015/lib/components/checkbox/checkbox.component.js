/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/checkbox/checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CheckboxStyles from '@fabula/core/styles/components/checkbox/checkbox';
export class CheckboxComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.readOnly = false;
        this.rounded = false;
        this.size = 'md';
        this.change = new EventEmitter();
        this.check = new EventEmitter();
        this.uncheck = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = CheckboxStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?=} e
     * @return {?}
     */
    handleChange(e) {
        if (!this.disabled && !this.readOnly) {
            this.checked = !!e ? e.target.checked : !this.checked;
            this.indeterminate = !!e ? e.target.indeterminate : false;
        }
        this.handleEvents();
    }
    /**
     * @return {?}
     */
    handleEvents() {
        this.change.emit();
        if (this.checked) {
            this.check.emit();
        }
        if (!this.checked) {
            this.uncheck.emit();
        }
    }
    /**
     * @return {?}
     */
    get currentIcon() {
        return this.indeterminate ? { name: 'minus' } : { name: 'check' };
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-checkbox',
                template: "<div class=\"fab-checkbox-wrapper\" data-fab-wrapper=\"checkbox\">\n  <div class=\"fab-checkbox\" [attr.data-checked]=\"checked\" [attr.data-disabled]=\"disabled\"\n    [attr.data-indeterminate]=\"indeterminate\" [attr.data-read-only]=\"readOnly\" data-fab-component=\"checkbox\">\n    <div class=\"fab-checkbox__square\" (click)=\"handleChange()\">\n      <fab-icon [props]=\"currentIcon\"></fab-icon>\n    </div>\n    <label class=\"fab-checkbox__label\">\n      <input [checked]=\"checked\" [disabled]=\"disabled\" [indeterminate]=\"indeterminate\" (change)=\"handleChange($event)\"\n        type=\"checkbox\">\n      <ng-container *ngIf=\"label\">{{label}}</ng-container>\n      <ng-container *ngIf=\"!label\">\n        <ng-content></ng-content>\n      </ng-container>\n    </label>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFNakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGNBQWMsTUFBTSxrREFBa0QsQ0FBQztBQU05RSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTs7Ozs7SUFnQnBELFlBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBaEI1QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFFWCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUt6QixDQUFDOzs7O0lBRWxDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBR0QsWUFBWSxDQUFDLENBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUFFO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUFFO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQTtJQUNuRSxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixnekJBQXdDO2FBQ3pDOzs7O1lBakJtQixVQUFVO1lBU3JCLGFBQWE7OzswQkFVbkIsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFFTCxNQUFNO29CQUNOLE1BQU07c0JBQ04sTUFBTTs7OztJQWJQLHdDQUE2Qjs7SUFDN0Isb0NBQXlCOztJQUN6QixrQ0FBdUI7O0lBQ3ZCLHFDQUEwQjs7SUFDMUIsMENBQStCOztJQUMvQiwwQ0FBK0I7O0lBQy9CLGtDQUF1Qjs7SUFDdkIscUNBQTBCOztJQUMxQixvQ0FBeUI7O0lBQ3pCLGlDQUFxQjs7SUFFckIsbUNBQXlEOztJQUN6RCxrQ0FBd0Q7O0lBQ3hELG9DQUEwRDs7SUFHeEQsa0NBQXdCOztJQUN4QiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBNb2RlbHNcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbi5tb2RlbCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBDaGVja2JveFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFjdGl2ZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBpbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlYWRPbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZSA9ICdtZCc7XG5cbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGVjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB1bmNoZWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQ2hlY2tib3hTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cblxuICAvLyBNZXRob2RzXG4gIGhhbmRsZUNoYW5nZShlPykge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5jaGVja2VkID0gISFlID8gZS50YXJnZXQuY2hlY2tlZCA6ICF0aGlzLmNoZWNrZWQ7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSAhIWUgPyBlLnRhcmdldC5pbmRldGVybWluYXRlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVFdmVudHMoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50cygpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XG5cbiAgICBpZiAodGhpcy5jaGVja2VkKSB7IHRoaXMuY2hlY2suZW1pdCgpOyB9XG4gICAgaWYgKCF0aGlzLmNoZWNrZWQpIHsgdGhpcy51bmNoZWNrLmVtaXQoKTsgfVxuICB9XG5cbiAgZ2V0IGN1cnJlbnRJY29uKCk6IEljb24ge1xuICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB7IG5hbWU6ICdtaW51cycgfSA6IHsgbmFtZTogJ2NoZWNrJyB9XG4gIH1cbn1cbiJdfQ==