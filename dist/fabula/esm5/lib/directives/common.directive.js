/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/common.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var CommonDirective = /** @class */ (function () {
    function CommonDirective(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    CommonDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: this })));
    };
    CommonDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'commonDirective'
                },] }
    ];
    /** @nocollapse */
    CommonDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return CommonDirective;
}());
export { CommonDirective };
if (false) {
    /** @type {?} */
    CommonDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbW1vbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFMUQ7SUFJSSx5QkFBbUIsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7Ozs7SUFFekMseUNBQWU7OztJQUFmOztZQUNVLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFDeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2dCQVRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM5Qjs7OztnQkFSa0MsVUFBVTs7SUFnQjdDLHNCQUFDO0NBQUEsQUFWRCxJQVVDO1NBUFksZUFBZTs7O0lBQ1osZ0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVXRpbHNTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy91dGlscy91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnY29tbW9uRGlyZWN0aXZlJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzKFV0aWxzU3R5bGVzKHsgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzOiB0aGlzIH0pKSk7XG4gICAgfVxufVxuIl19