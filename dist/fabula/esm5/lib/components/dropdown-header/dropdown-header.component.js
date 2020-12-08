/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-header/dropdown-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';
var DropdownHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownHeaderComponent, _super);
    function DropdownHeaderComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    DropdownHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.styles = DropdownHeaderStyles;
        this.initStyles();
    };
    DropdownHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dropdown-header',
                    template: "<div class=\"fab-dropdown-header\" data-fab-component=\"dropdownHeader\">\n  <ng-container *ngIf=\"label\">{{label}}</ng-container>\n  <ng-container *ngIf=\"!label\">\n    <ng-content></ng-content>\n  </ng-container>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DropdownHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownHeaderComponent.propDecorators = {
        color: [{ type: Input }],
        label: [{ type: Input }]
    };
    return DropdownHeaderComponent;
}(CommonComponent));
export { DropdownHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Ryb3Bkb3duLWhlYWRlci9kcm9wZG93bi1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDUixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sb0JBQW9CLE1BQU0sZ0VBQWdFLENBQUM7QUFFbEc7SUFJNkMsbURBQWU7SUFJeEQsaUNBQ1csS0FBaUIsRUFDakIsYUFBNEI7UUFGdkMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGdkIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFDTixDQUFDOzs7O0lBRWxDLGlEQUFlOzs7SUFBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWhCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNE9BQStDO2lCQUNsRDs7OztnQkFoQkcsVUFBVTtnQkFRTCxhQUFhOzs7d0JBVWpCLEtBQUs7d0JBQ0wsS0FBSzs7SUFXViw4QkFBQztDQUFBLEFBakJELENBSTZDLGVBQWUsR0FhM0Q7U0FiWSx1QkFBdUI7OztJQUNoQyx3Q0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFHbkIsd0NBQXdCOztJQUN4QixnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgRHJvcGRvd25IZWFkZXJTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duLWhlYWRlci9kcm9wZG93bi1oZWFkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1kcm9wZG93bi1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkhlYWRlckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IERyb3Bkb3duSGVhZGVyU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgICB9XG59XG4iXX0=