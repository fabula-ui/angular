/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/padding.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
export class PaddingDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        /** @type {?} */
        const props = {
            p: this.p,
            pb: this.pb,
            pl: this.pl,
            pr: this.pr,
            pt: this.pt,
            px: this.px,
            py: this.py
        };
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
PaddingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[p],[pb],[pl],[pr],[pt],[px],[py]'
            },] }
];
/** @nocollapse */
PaddingDirective.ctorParameters = () => [
    { type: ElementRef }
];
PaddingDirective.propDecorators = {
    p: [{ type: Input }],
    pb: [{ type: Input }],
    pl: [{ type: Input }],
    pr: [{ type: Input }],
    pt: [{ type: Input }],
    px: [{ type: Input }],
    py: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9wYWRkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFLMUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVN6QixZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQzs7OztJQUUxQyxlQUFlOztjQUNMLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O2NBQy9CLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7O2NBQzdILEtBQUssR0FBRztZQUNWLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNkO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7OztZQTVCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1DQUFtQzthQUNoRDs7OztZQVJrQyxVQUFVOzs7Z0JBVXhDLEtBQUs7aUJBQ0wsS0FBSztpQkFDTCxLQUFLO2lCQUNMLEtBQUs7aUJBQ0wsS0FBSztpQkFDTCxLQUFLO2lCQUNMLEtBQUs7Ozs7SUFOTiw2QkFBZ0I7O0lBQ2hCLDhCQUFpQjs7SUFDakIsOEJBQWlCOztJQUNqQiw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsOEJBQWlCOztJQUNqQiw4QkFBaUI7Ozs7O0lBRUwsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFV0aWxzU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvdXRpbHMvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twXSxbcGJdLFtwbF0sW3ByXSxbcHRdLFtweF0sW3B5XSdcbn0pXG5leHBvcnQgY2xhc3MgUGFkZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIHA6IGFueTtcbiAgICBASW5wdXQoKSBwYjogYW55O1xuICAgIEBJbnB1dCgpIHBsOiBhbnk7XG4gICAgQElucHV0KCkgcHI6IGFueTtcbiAgICBASW5wdXQoKSBwdDogYW55O1xuICAgIEBJbnB1dCgpIHB4OiBhbnk7XG4gICAgQElucHV0KCkgcHk6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBhbmd1bGFyRWxlbWVudCA9ICEhaG9zdC5jaGlsZHJlblswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmFiLWNvbXBvbmVudCcpIHx8ICEhaG9zdC5jaGlsZHJlblswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmFiLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBwOiB0aGlzLnAsXG4gICAgICAgICAgICBwYjogdGhpcy5wYixcbiAgICAgICAgICAgIHBsOiB0aGlzLnBsLFxuICAgICAgICAgICAgcHI6IHRoaXMucHIsXG4gICAgICAgICAgICBwdDogdGhpcy5wdCxcbiAgICAgICAgICAgIHB4OiB0aGlzLnB4LFxuICAgICAgICAgICAgcHk6IHRoaXMucHlcbiAgICAgICAgfTtcblxuICAgICAgICBob3N0LmNsYXNzTGlzdC5hZGQoY3NzKFV0aWxzU3R5bGVzKHsgYW5ndWxhckVsZW1lbnQsIGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wcyB9KSkpO1xuICAgIH1cblxufVxuIl19