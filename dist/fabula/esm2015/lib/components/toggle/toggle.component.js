/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toggle/toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ToggleStyles from '@fabula/core/styles/components/toggle/toggle';
export class ToggleComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.active = false;
        this.disabled = false;
        this.rounded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ToggleStyles;
        this.initStyles();
    }
    /**
     * @return {?}
     */
    handleClick() {
        if (!this.disabled) {
            this.active = !this.active;
        }
    }
}
ToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-toggle',
                template: "<div class=\"fab-toggle-wrapper\" [attr.data-active]=\"active\" [attr.data-disabled]=\"disabled\" data-fab-wrapper=\"toggle\">\n  <div class=\"fab-toggle\" data-fab-component=\"toggle\">\n    <button class=\"fab-toggle__switch\" (click)=\"handleClick()\"></button>\n    <div class=\"fab-toggle__label\" (click)=\"handleClick()\">\n      <ng-container *ngIf=\"!label\">\n        <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n      </ng-container>\n      <ng-container *ngIf=\"label\">\n        {{label}}\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
ToggleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ToggleComponent.propDecorators = {
    active: [{ type: Input }],
    activeColor: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    inactiveColor: [{ type: Input }],
    label: [{ type: Input }],
    rounded: [{ type: Input }],
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ToggleComponent.prototype.active;
    /** @type {?} */
    ToggleComponent.prototype.activeColor;
    /** @type {?} */
    ToggleComponent.prototype.color;
    /** @type {?} */
    ToggleComponent.prototype.disabled;
    /** @type {?} */
    ToggleComponent.prototype.inactiveColor;
    /** @type {?} */
    ToggleComponent.prototype.label;
    /** @type {?} */
    ToggleComponent.prototype.rounded;
    /** @type {?} */
    ToggleComponent.prototype.size;
    /** @type {?} */
    ToggleComponent.prototype.elRef;
    /** @type {?} */
    ToggleComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxZQUFZLE1BQU0sOENBQThDLENBQUM7QUFPeEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZUFBZTs7Ozs7SUFVbEQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQU1RLENBQUM7Ozs7SUFFbEMsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FBRTtJQUNyRCxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUV0Qix5b0JBQXNDOzthQUN2Qzs7OztZQWZrQyxVQUFVO1lBTXBDLGFBQWE7OztxQkFXbkIsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLOzs7O0lBUE4saUNBQXdCOztJQUN4QixzQ0FBNkI7O0lBQzdCLGdDQUF1Qjs7SUFDdkIsbUNBQTBCOztJQUMxQix3Q0FBK0I7O0lBQy9CLGdDQUF1Qjs7SUFDdkIsa0NBQXlCOztJQUN6QiwrQkFBc0I7O0lBR3BCLGdDQUF3Qjs7SUFDeEIsd0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVG9nZ2xlU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLXRvZ2dsZScsXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSByb3VuZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gVG9nZ2xlU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7IHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlOyB9XG4gIH1cbn1cbiJdfQ==