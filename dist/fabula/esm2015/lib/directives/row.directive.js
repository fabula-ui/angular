/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
export class RowDirective {
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
        const element = this.elRef.nativeElement;
        /** @type {?} */
        const parent = element.parentNode;
        /** @type {?} */
        const wrapper = document.createElement('div');
        wrapper.classList.add('fab-row');
        this.renderer.insertBefore(parent, wrapper, element);
        this.renderer.appendChild(wrapper, element);
        /** @type {?} */
        const props = {
            row: true
        };
        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[row]'
            },] }
];
/** @nocollapse */
RowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
RowDirective.propDecorators = {
    row: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RowDirective.prototype.row;
    /**
     * @type {?}
     * @private
     */
    RowDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    RowDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Jvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBMkQsTUFBTSxlQUFlLENBQUM7QUFDaEosT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFNOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFLMUQsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBR3JCLFlBQ1ksS0FBaUIsRUFDakIsUUFBbUI7UUFEbkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzNCLENBQUM7Ozs7SUFFTCxlQUFlOztjQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O2NBQ2xDLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVTs7Y0FDM0IsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRTdDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztjQUV0QyxLQUFLLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSTtTQUNaO1FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBMUJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsT0FBTzthQUNwQjs7OztZQVhrQyxVQUFVO1lBQVMsU0FBUzs7O2tCQWExRCxLQUFLOzs7O0lBQU4sMkJBQWtCOzs7OztJQUdkLDZCQUF5Qjs7Ozs7SUFDekIsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBVdGlsc1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL3V0aWxzL3V0aWxzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcm93XSdcbn0pXG5leHBvcnQgY2xhc3MgUm93RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgcm93OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZmFiLXJvdycpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHBhcmVudCwgd3JhcHBlciwgZWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgZWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICByb3c6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzKFV0aWxzU3R5bGVzKHsgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzIH0pKSk7XG4gICAgfVxuXG59XG4iXX0=