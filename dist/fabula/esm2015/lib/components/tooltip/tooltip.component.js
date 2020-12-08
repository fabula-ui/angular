/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tooltip/tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import TooltipStyles from '@fabula/core/styles/components/tooltip/tooltip';
export class TooltipComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.placement = 'top';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const styles = css(TooltipStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tooltip',
                template: "<div class=\"fab-tooltip\" [attr.data-placement]=\"placement\">\n  <span class=\"fab-tooltip__label\">{{label}}</span>\n</div>"
            }] }
];
/** @nocollapse */
TooltipComponent.ctorParameters = () => [
    { type: ElementRef }
];
TooltipComponent.propDecorators = {
    color: [{ type: Input }],
    label: [{ type: Input }],
    offset: [{ type: Input }],
    placement: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TooltipComponent.prototype.color;
    /** @type {?} */
    TooltipComponent.prototype.label;
    /** @type {?} */
    TooltipComponent.prototype.offset;
    /** @type {?} */
    TooltipComponent.prototype.placement;
    /** @type {?} */
    TooltipComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLGFBQWEsTUFBTSxnREFBZ0QsQ0FBQztBQU0zRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBTTNCLFlBQW1CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFGM0IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVhLENBQUM7Ozs7SUFFekMsZUFBZTs7Y0FDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztjQUMvQixNQUFNLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMElBQXVDO2FBQ3hDOzs7O1lBVGtDLFVBQVU7OztvQkFXMUMsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7OztJQUhOLGlDQUF1Qjs7SUFDdkIsaUNBQXVCOztJQUN2QixrQ0FBcUI7O0lBQ3JCLHFDQUEyQjs7SUFFZixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVG9vbHRpcFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgb2Zmc2V0OiBhbnk7XG4gIEBJbnB1dCgpIHBsYWNlbWVudCA9ICd0b3AnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc3R5bGVzID0gY3NzKFRvb2x0aXBTdHlsZXMoeyBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHM6IHRoaXMgfSkpO1xuXG4gICAgaG9zdC5jbGFzc0xpc3QuYWRkKHN0eWxlcyk7XG4gIH1cbn1cbiJdfQ==