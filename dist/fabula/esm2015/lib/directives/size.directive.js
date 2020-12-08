/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/size.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
export class SizeDirective {
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
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props: this })));
    }
}
SizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[expand], [height], [width]'
            },] }
];
/** @nocollapse */
SizeDirective.ctorParameters = () => [
    { type: ElementRef }
];
SizeDirective.propDecorators = {
    expand: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SizeDirective.prototype.expand;
    /** @type {?} */
    SizeDirective.prototype.height;
    /** @type {?} */
    SizeDirective.prototype.width;
    /**
     * @type {?}
     * @private
     */
    SizeDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFLMUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFLdEIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFHLENBQUM7Ozs7SUFFekMsZUFBZTs7Y0FDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztjQUMvQixjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDO1FBRW5JLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSw2QkFBNkI7YUFDMUM7Ozs7WUFUa0MsVUFBVTs7O3FCQVd4QyxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUZOLCtCQUF5Qjs7SUFDekIsK0JBQXFCOztJQUNyQiw4QkFBb0I7Ozs7O0lBRVIsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVXRpbHNTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy91dGlscy91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2V4cGFuZF0sIFtoZWlnaHRdLCBbd2lkdGhdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaXplRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgZXhwYW5kOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGhlaWdodDogYW55O1xuICAgIEBJbnB1dCgpIHdpZHRoOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBhbmd1bGFyRWxlbWVudCA9ICEhaG9zdC5jaGlsZHJlblswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmFiLWNvbXBvbmVudCcpIHx8ICEhaG9zdC5jaGlsZHJlblswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmFiLXdyYXBwZXInKTtcblxuICAgICAgICBob3N0LmNsYXNzTGlzdC5hZGQoY3NzKFV0aWxzU3R5bGVzKHsgYW5ndWxhckVsZW1lbnQsIGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wczogdGhpcyB9KSkpO1xuICAgIH1cbn1cbiJdfQ==