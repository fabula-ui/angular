/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/padding.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var PaddingDirective = /** @class */ (function () {
    function PaddingDirective(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    PaddingDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        /** @type {?} */
        var props = {
            p: this.p,
            pb: this.pb,
            pl: this.pl,
            pr: this.pr,
            pt: this.pt,
            px: this.px,
            py: this.py
        };
        host.classList.add(css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
    };
    PaddingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[p],[pb],[pl],[pr],[pt],[px],[py]'
                },] }
    ];
    /** @nocollapse */
    PaddingDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PaddingDirective.propDecorators = {
        p: [{ type: Input }],
        pb: [{ type: Input }],
        pl: [{ type: Input }],
        pr: [{ type: Input }],
        pt: [{ type: Input }],
        px: [{ type: Input }],
        py: [{ type: Input }]
    };
    return PaddingDirective;
}());
export { PaddingDirective };
if (false) {
    /** @type {?} */
    PaddingDirective.prototype.p;
    /** @type {?} */
    PaddingDirective.prototype.pb;
    /** @type {?} */
    PaddingDirective.prototype.pl;
    /** @type {?} */
    PaddingDirective.prototype.pr;
    /** @type {?} */
    PaddingDirective.prototype.pt;
    /** @type {?} */
    PaddingDirective.prototype.px;
    /** @type {?} */
    PaddingDirective.prototype.py;
    /**
     * @type {?}
     * @private
     */
    PaddingDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wYWRkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFMUQ7SUFZSSwwQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7Ozs7SUFFMUMsMENBQWU7OztJQUFmOztZQUNVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O1lBQy9CLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7O1lBQzdILEtBQUssR0FBRztZQUNWLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNkO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Z0JBNUJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUNBQW1DO2lCQUNoRDs7OztnQkFSa0MsVUFBVTs7O29CQVV4QyxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLOztJQW9CVix1QkFBQztDQUFBLEFBOUJELElBOEJDO1NBM0JZLGdCQUFnQjs7O0lBQ3pCLDZCQUFnQjs7SUFDaEIsOEJBQWlCOztJQUNqQiw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsOEJBQWlCOztJQUNqQiw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7Ozs7SUFFTCxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVXRpbHNTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy91dGlscy91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BdLFtwYl0sW3BsXSxbcHJdLFtwdF0sW3B4XSxbcHldJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWRkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgcDogYW55O1xuICAgIEBJbnB1dCgpIHBiOiBhbnk7XG4gICAgQElucHV0KCkgcGw6IGFueTtcbiAgICBASW5wdXQoKSBwcjogYW55O1xuICAgIEBJbnB1dCgpIHB0OiBhbnk7XG4gICAgQElucHV0KCkgcHg6IGFueTtcbiAgICBASW5wdXQoKSBweTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGFuZ3VsYXJFbGVtZW50ID0gISFob3N0LmNoaWxkcmVuWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS1mYWItY29tcG9uZW50JykgfHwgISFob3N0LmNoaWxkcmVuWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS1mYWItd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHA6IHRoaXMucCxcbiAgICAgICAgICAgIHBiOiB0aGlzLnBiLFxuICAgICAgICAgICAgcGw6IHRoaXMucGwsXG4gICAgICAgICAgICBwcjogdGhpcy5wcixcbiAgICAgICAgICAgIHB0OiB0aGlzLnB0LFxuICAgICAgICAgICAgcHg6IHRoaXMucHgsXG4gICAgICAgICAgICBweTogdGhpcy5weVxuICAgICAgICB9O1xuXG4gICAgICAgIGhvc3QuY2xhc3NMaXN0LmFkZChjc3MoVXRpbHNTdHlsZXMoeyBhbmd1bGFyRWxlbWVudCwgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzIH0pKSk7XG4gICAgfVxuXG59XG4iXX0=