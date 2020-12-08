/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-header/dropdown-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';
export class DropdownHeaderComponent extends CommonComponent {
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
    ngAfterViewInit() {
        this.styles = DropdownHeaderStyles;
        this.initStyles();
    }
}
DropdownHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-header',
                template: "<div class=\"fab-dropdown-header\" data-fab-component=\"dropdownHeader\">\n  <ng-container *ngIf=\"label\">{{label}}</ng-container>\n  <ng-container *ngIf=\"!label\">\n    <ng-content></ng-content>\n  </ng-container>\n</div>"
            }] }
];
/** @nocollapse */
DropdownHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
DropdownHeaderComponent.propDecorators = {
    color: [{ type: Input }],
    label: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropdownHeaderComponent.prototype.color;
    /** @type {?} */
    DropdownHeaderComponent.prototype.label;
    /** @type {?} */
    DropdownHeaderComponent.prototype.elRef;
    /** @type {?} */
    DropdownHeaderComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Ryb3Bkb3duLWhlYWRlci9kcm9wZG93bi1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVILFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNSLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxvQkFBb0IsTUFBTSxnRUFBZ0UsQ0FBQztBQU1sRyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZUFBZTs7Ozs7SUFJeEQsWUFDVyxLQUFpQixFQUNqQixhQUE0QjtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnJCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDTixDQUFDOzs7O0lBRWxDLGVBQWU7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFoQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDRPQUErQzthQUNsRDs7OztZQWhCRyxVQUFVO1lBUUwsYUFBYTs7O29CQVVqQixLQUFLO29CQUNMLEtBQUs7Ozs7SUFETix3Q0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFHbkIsd0NBQXdCOztJQUN4QixnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgRHJvcGRvd25IZWFkZXJTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duLWhlYWRlci9kcm9wZG93bi1oZWFkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1kcm9wZG93bi1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkhlYWRlckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IERyb3Bkb3duSGVhZGVyU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgICB9XG59XG4iXX0=