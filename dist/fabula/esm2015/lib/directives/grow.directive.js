/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/grow.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
export class GrowDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');
        /** @type {?} */
        const props = {
            grow: this.grow
        };
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
GrowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[grow]'
            },] }
];
/** @nocollapse */
GrowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
GrowDirective.propDecorators = {
    grow: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Jvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9ncm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlCLE9BQU8sV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBTTFELE1BQU0sT0FBTyxhQUFhOzs7OztJQUd0QixZQUNZLEtBQWlCLEVBQ2pCLFFBQW1CO1FBRG5CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMzQixDQUFDOzs7O0lBRUwsZUFBZTs7Y0FDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztjQUMvQixjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FDM0csS0FBSyxHQUFHO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2xCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFGLENBQUM7OztZQXBCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFFBQVE7YUFDckI7Ozs7WUFUa0MsVUFBVTtZQUFTLFNBQVM7OzttQkFXMUQsS0FBSzs7OztJQUFOLDZCQUFtQjs7Ozs7SUFHZiw4QkFBeUI7Ozs7O0lBQ3pCLGlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFV0aWxzU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvdXRpbHMvdXRpbHMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2dyb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBHcm93RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgZ3JvdzogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICApIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBhbmd1bGFyRWxlbWVudCA9ICEhaG9zdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mYWItY29tcG9uZW50XScpIHx8ICEhaG9zdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mYWItd3JhcHBlcl0nKTtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBncm93OiB0aGlzLmdyb3dcbiAgICAgICAgfTtcblxuICAgICAgICBob3N0LmNsYXNzTGlzdC5hZGQoY3NzKFV0aWxzU3R5bGVzKHsgYW5ndWxhckVsZW1lbnQsIGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wcyB9KSkpO1xuXG4gICAgfVxuXG59XG4iXX0=