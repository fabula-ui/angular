/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/margin.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var MarginDirective = /** @class */ (function () {
    function MarginDirective(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    MarginDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var props = {
            m: this.m,
            mb: this.mb,
            ml: this.ml,
            mr: this.mr,
            mt: this.mt,
            mx: this.mx,
            my: this.my
        };
        host.classList.add(css(UtilsStyles({ framework: 'angular', props: props })));
    };
    MarginDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[m],[mb],[ml],[mr],[mt],[mx],[my]'
                },] }
    ];
    /** @nocollapse */
    MarginDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MarginDirective.propDecorators = {
        m: [{ type: Input }],
        mb: [{ type: Input }],
        ml: [{ type: Input }],
        mr: [{ type: Input }],
        mt: [{ type: Input }],
        mx: [{ type: Input }],
        my: [{ type: Input }]
    };
    return MarginDirective;
}());
export { MarginDirective };
if (false) {
    /** @type {?} */
    MarginDirective.prototype.m;
    /** @type {?} */
    MarginDirective.prototype.mb;
    /** @type {?} */
    MarginDirective.prototype.ml;
    /** @type {?} */
    MarginDirective.prototype.mr;
    /** @type {?} */
    MarginDirective.prototype.mt;
    /** @type {?} */
    MarginDirective.prototype.mx;
    /** @type {?} */
    MarginDirective.prototype.my;
    /**
     * @type {?}
     * @private
     */
    MarginDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyZ2luLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hcmdpbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlCLE9BQU8sV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBRTFEO0lBWUkseUJBQ1ksS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUN6QixDQUFDOzs7O0lBRUwseUNBQWU7OztJQUFmOztZQUNVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O1lBQy9CLEtBQUssR0FBRztZQUNWLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNkO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOztnQkE3QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQ0FBbUM7aUJBQ2hEOzs7O2dCQVJrQyxVQUFVOzs7b0JBVXhDLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7O0lBb0JWLHNCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0EzQlksZUFBZTs7O0lBQ3hCLDRCQUFnQjs7SUFDaEIsNkJBQWlCOztJQUNqQiw2QkFBaUI7O0lBQ2pCLDZCQUFpQjs7SUFDakIsNkJBQWlCOztJQUNqQiw2QkFBaUI7O0lBQ2pCLDZCQUFpQjs7Ozs7SUFHYixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVXRpbHNTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy91dGlscy91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW21dLFttYl0sW21sXSxbbXJdLFttdF0sW214XSxbbXldJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXJnaW5EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBtOiBhbnk7XG4gICAgQElucHV0KCkgbWI6IGFueTtcbiAgICBASW5wdXQoKSBtbDogYW55O1xuICAgIEBJbnB1dCgpIG1yOiBhbnk7XG4gICAgQElucHV0KCkgbXQ6IGFueTtcbiAgICBASW5wdXQoKSBteDogYW55O1xuICAgIEBJbnB1dCgpIG15OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZlxuICAgICkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgbTogdGhpcy5tLFxuICAgICAgICAgICAgbWI6IHRoaXMubWIsXG4gICAgICAgICAgICBtbDogdGhpcy5tbCxcbiAgICAgICAgICAgIG1yOiB0aGlzLm1yLFxuICAgICAgICAgICAgbXQ6IHRoaXMubXQsXG4gICAgICAgICAgICBteDogdGhpcy5teCxcbiAgICAgICAgICAgIG15OiB0aGlzLm15XG4gICAgICAgIH07XG5cbiAgICAgICAgaG9zdC5jbGFzc0xpc3QuYWRkKGNzcyhVdGlsc1N0eWxlcyh7IGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wcyB9KSkpO1xuICAgIH1cbn1cbiJdfQ==