/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/grow.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var GrowDirective = /** @class */ (function () {
    function GrowDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    GrowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');
        /** @type {?} */
        var props = {
            grow: this.grow
        };
        host.classList.add(css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
    };
    GrowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[grow]'
                },] }
    ];
    /** @nocollapse */
    GrowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    GrowDirective.propDecorators = {
        grow: [{ type: Input }]
    };
    return GrowDirective;
}());
export { GrowDirective };
if (false) {
    /** @type {?} */
    GrowDirective.prototype.grow;
    /**
     * @type {?}
     * @private
     */
    GrowDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    GrowDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Jvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9ncm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlCLE9BQU8sV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBRzFEO0lBTUksdUJBQ1ksS0FBaUIsRUFDakIsUUFBbUI7UUFEbkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzNCLENBQUM7Ozs7SUFFTCx1Q0FBZTs7O0lBQWY7O1lBQ1UsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTs7WUFDL0IsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7O1lBQzNHLEtBQUssR0FBRztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxjQUFjLGdCQUFBLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFGLENBQUM7O2dCQXBCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7aUJBQ3JCOzs7O2dCQVRrQyxVQUFVO2dCQUFTLFNBQVM7Ozt1QkFXMUQsS0FBSzs7SUFrQlYsb0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQW5CWSxhQUFhOzs7SUFDdEIsNkJBQW1COzs7OztJQUdmLDhCQUF5Qjs7Ozs7SUFDekIsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVXRpbHNTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy91dGlscy91dGlscyc7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZ3Jvd10nXG59KVxuZXhwb3J0IGNsYXNzIEdyb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBncm93OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGFuZ3VsYXJFbGVtZW50ID0gISFob3N0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZhYi1jb21wb25lbnRdJykgfHwgISFob3N0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZhYi13cmFwcGVyXScpO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIGdyb3c6IHRoaXMuZ3Jvd1xuICAgICAgICB9O1xuXG4gICAgICAgIGhvc3QuY2xhc3NMaXN0LmFkZChjc3MoVXRpbHNTdHlsZXMoeyBhbmd1bGFyRWxlbWVudCwgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzIH0pKSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==