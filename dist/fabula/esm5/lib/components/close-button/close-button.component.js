/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/close-button/close-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';
var CloseButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CloseButtonComponent, _super);
    function CloseButtonComponent(cdRef, elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.cdRef = cdRef;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    CloseButtonComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // Set and apply styles
        this.styles = CloseButtonStyles;
        this.initStyles();
        // Detect changes
        this.cdRef.detectChanges();
    };
    CloseButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-close-button',
                    template: "<button class=\"fab-close-button\">\n    <fab-icon name=\"x\"></fab-icon>\n</button>"
                }] }
    ];
    /** @nocollapse */
    CloseButtonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CloseButtonComponent.propDecorators = {
        color: [{ type: Input }],
        parentColor: [{ type: Input }],
        size: [{ type: Input }]
    };
    return CloseButtonComponent;
}(CommonComponent));
export { CloseButtonComponent };
if (false) {
    /** @type {?} */
    CloseButtonComponent.prototype.color;
    /** @type {?} */
    CloseButtonComponent.prototype.parentColor;
    /** @type {?} */
    CloseButtonComponent.prototype.size;
    /** @type {?} */
    CloseButtonComponent.prototype.cdRef;
    /** @type {?} */
    CloseButtonComponent.prototype.elRef;
    /** @type {?} */
    CloseButtonComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGlCQUFpQixNQUFNLDBEQUEwRCxDQUFDO0FBRXpGO0lBSTBDLGdEQUFlO0lBS3JELDhCQUNXLEtBQXdCLEVBQ3hCLEtBQWlCLEVBQ2pCLGFBQTRCO1FBSHZDLFlBSUksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBSHZCLFdBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBQ04sQ0FBQzs7OztJQUVsQyw4Q0FBZTs7O0lBQWY7UUFDSSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBdEJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixnR0FBNEM7aUJBQy9DOzs7O2dCQWRzQyxpQkFBaUI7Z0JBQXBDLFVBQVU7Z0JBTXJCLGFBQWE7Ozt3QkFVakIsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBZ0JWLDJCQUFDO0NBQUEsQUF2QkQsQ0FJMEMsZUFBZSxHQW1CeEQ7U0FuQlksb0JBQW9COzs7SUFDN0IscUNBQXVCOztJQUN2QiwyQ0FBNkI7O0lBQzdCLG9DQUFzQjs7SUFHbEIscUNBQStCOztJQUMvQixxQ0FBd0I7O0lBQ3hCLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ2xvc2VCdXR0b25TdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1jbG9zZS1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbG9zZS1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBwYXJlbnRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvLyBTZXQgYW5kIGFwcGx5IHN0eWxlc1xuICAgICAgICB0aGlzLnN0eWxlcyA9IENsb3NlQnV0dG9uU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcblxuICAgICAgICAvLyBEZXRlY3QgY2hhbmdlc1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iXX0=