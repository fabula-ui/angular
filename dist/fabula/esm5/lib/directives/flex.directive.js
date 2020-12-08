/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/flex.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var FlexDirective = /** @class */ (function () {
    function FlexDirective(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    FlexDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        /** @type {?} */
        var props = {
            basis: this.basis,
            direction: this.direction,
            flex: host.hasAttribute('flex') || this.flex,
            flow: this.flow,
            grow: this.grow,
            shrink: this.shrink,
            wrap: this.wrap
        };
        host.classList.add(css(UtilsStyles({ angularElement: angularElement, framework: 'angular', props: props })));
    };
    FlexDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[basis], [flex], [flow], [grow], [shrink], [wrap]'
                },] }
    ];
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FlexDirective.propDecorators = {
        basis: [{ type: Input }],
        direction: [{ type: Input }],
        flex: [{ type: Input }],
        flow: [{ type: Input }],
        grow: [{ type: Input }],
        shrink: [{ type: Input }],
        wrap: [{ type: Input }]
    };
    return FlexDirective;
}());
export { FlexDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mbGV4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFMUQ7SUFZSSx1QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7Ozs7SUFFMUMsdUNBQWU7OztJQUFmOztZQUNVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O1lBQy9CLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7O1lBQzdILEtBQUssR0FBRztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUk7WUFDNUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxjQUFjLGdCQUFBLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O2dCQTVCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1EQUFtRDtpQkFDaEU7Ozs7Z0JBUmtDLFVBQVU7Ozt3QkFVeEMsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUFtQlYsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTFCWSxhQUFhOzs7SUFDdEIsOEJBQW9COztJQUNwQixrQ0FBMkI7O0lBQzNCLDZCQUFtQjs7SUFDbkIsNkJBQXNCOztJQUN0Qiw2QkFBbUI7O0lBQ25CLCtCQUFxQjs7SUFDckIsNkJBQXNCOzs7OztJQUVWLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBVdGlsc1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL3V0aWxzL3V0aWxzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYmFzaXNdLCBbZmxleF0sIFtmbG93XSwgW2dyb3ddLCBbc2hyaW5rXSwgW3dyYXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBGbGV4RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgYmFzaXM6IGFueTtcbiAgICBASW5wdXQoKSBkaXJlY3Rpb246IHN0cmluZztcbiAgICBASW5wdXQoKSBmbGV4OiBhbnk7XG4gICAgQElucHV0KCkgZmxvdzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGdyb3c6IGFueTtcbiAgICBASW5wdXQoKSBzaHJpbms6IGFueTtcbiAgICBASW5wdXQoKSB3cmFwOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgYW5ndWxhckVsZW1lbnQgPSAhIWhvc3QuY2hpbGRyZW5bMF0uaGFzQXR0cmlidXRlKCdkYXRhLWZhYi1jb21wb25lbnQnKSB8fCAhIWhvc3QuY2hpbGRyZW5bMF0uaGFzQXR0cmlidXRlKCdkYXRhLWZhYi13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgYmFzaXM6IHRoaXMuYmFzaXMsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgZmxleDogaG9zdC5oYXNBdHRyaWJ1dGUoJ2ZsZXgnKSB8fCB0aGlzLmZsZXgsXG4gICAgICAgICAgICBmbG93OiB0aGlzLmZsb3csXG4gICAgICAgICAgICBncm93OiB0aGlzLmdyb3csXG4gICAgICAgICAgICBzaHJpbms6IHRoaXMuc2hyaW5rLFxuICAgICAgICAgICAgd3JhcDogdGhpcy53cmFwXG4gICAgICAgIH07XG5cbiAgICAgICAgaG9zdC5jbGFzc0xpc3QuYWRkKGNzcyhVdGlsc1N0eWxlcyh7IGFuZ3VsYXJFbGVtZW50LCBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHMgfSkpKTtcbiAgICB9XG59XG4iXX0=