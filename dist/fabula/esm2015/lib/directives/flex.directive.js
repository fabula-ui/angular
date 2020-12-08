/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/flex.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
export class FlexDirective {
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
            basis: this.basis,
            direction: this.direction,
            flex: host.hasAttribute('flex') || this.flex,
            flow: this.flow,
            grow: this.grow,
            shrink: this.shrink,
            wrap: this.wrap
        };
        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
FlexDirective.decorators = [
    { type: Directive, args: [{
                selector: '[basis], [flex], [flow], [grow], [shrink], [wrap]'
            },] }
];
/** @nocollapse */
FlexDirective.ctorParameters = () => [
    { type: ElementRef }
];
FlexDirective.propDecorators = {
    basis: [{ type: Input }],
    direction: [{ type: Input }],
    flex: [{ type: Input }],
    flow: [{ type: Input }],
    grow: [{ type: Input }],
    shrink: [{ type: Input }],
    wrap: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FlexDirective.prototype.basis;
    /** @type {?} */
    FlexDirective.prototype.direction;
    /** @type {?} */
    FlexDirective.prototype.flex;
    /** @type {?} */
    FlexDirective.prototype.flow;
    /** @type {?} */
    FlexDirective.prototype.grow;
    /** @type {?} */
    FlexDirective.prototype.shrink;
    /** @type {?} */
    FlexDirective.prototype.wrap;
    /**
     * @type {?}
     * @private
     */
    FlexDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mbGV4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFLMUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFTdEIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7Ozs7SUFFMUMsZUFBZTs7Y0FDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztjQUMvQixjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDOztjQUM3SCxLQUFLLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQzVDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbEI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7O1lBNUJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbURBQW1EO2FBQ2hFOzs7O1lBUmtDLFVBQVU7OztvQkFVeEMsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQU5OLDhCQUFvQjs7SUFDcEIsa0NBQTJCOztJQUMzQiw2QkFBbUI7O0lBQ25CLDZCQUFzQjs7SUFDdEIsNkJBQW1COztJQUNuQiwrQkFBcUI7O0lBQ3JCLDZCQUFzQjs7Ozs7SUFFViw4QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVXRpbHNTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy91dGlscy91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2Jhc2lzXSwgW2ZsZXhdLCBbZmxvd10sIFtncm93XSwgW3Nocmlua10sIFt3cmFwXSdcbn0pXG5leHBvcnQgY2xhc3MgRmxleERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGJhc2lzOiBhbnk7XG4gICAgQElucHV0KCkgZGlyZWN0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmxleDogYW55O1xuICAgIEBJbnB1dCgpIGZsb3c6IHN0cmluZztcbiAgICBASW5wdXQoKSBncm93OiBhbnk7XG4gICAgQElucHV0KCkgc2hyaW5rOiBhbnk7XG4gICAgQElucHV0KCkgd3JhcDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGFuZ3VsYXJFbGVtZW50ID0gISFob3N0LmNoaWxkcmVuWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS1mYWItY29tcG9uZW50JykgfHwgISFob3N0LmNoaWxkcmVuWzBdLmhhc0F0dHJpYnV0ZSgnZGF0YS1mYWItd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIGJhc2lzOiB0aGlzLmJhc2lzLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbixcbiAgICAgICAgICAgIGZsZXg6IGhvc3QuaGFzQXR0cmlidXRlKCdmbGV4JykgfHwgdGhpcy5mbGV4LFxuICAgICAgICAgICAgZmxvdzogdGhpcy5mbG93LFxuICAgICAgICAgICAgZ3JvdzogdGhpcy5ncm93LFxuICAgICAgICAgICAgc2hyaW5rOiB0aGlzLnNocmluayxcbiAgICAgICAgICAgIHdyYXA6IHRoaXMud3JhcFxuICAgICAgICB9O1xuXG4gICAgICAgIGhvc3QuY2xhc3NMaXN0LmFkZChjc3MoVXRpbHNTdHlsZXMoeyBhbmd1bGFyRWxlbWVudCwgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzIH0pKSk7XG4gICAgfVxufVxuIl19