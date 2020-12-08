/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var RowDirective = /** @class */ (function () {
    function RowDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    RowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */
        var parent = element.parentNode;
        /** @type {?} */
        var wrapper = document.createElement('div');
        wrapper.classList.add('fab-row');
        this.renderer.insertBefore(parent, wrapper, element);
        this.renderer.appendChild(wrapper, element);
        /** @type {?} */
        var props = {
            row: true
        };
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: props })));
    };
    RowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[row]'
                },] }
    ];
    /** @nocollapse */
    RowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    RowDirective.propDecorators = {
        row: [{ type: Input }]
    };
    return RowDirective;
}());
export { RowDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Jvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBMkQsTUFBTSxlQUFlLENBQUM7QUFDaEosT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFNOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFMUQ7SUFNSSxzQkFDWSxLQUFpQixFQUNqQixRQUFtQjtRQURuQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDM0IsQ0FBQzs7OztJQUVMLHNDQUFlOzs7SUFBZjs7WUFDVSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztZQUNsQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVU7O1lBQzNCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUU3QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7WUFFdEMsS0FBSyxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUk7U0FDWjtRQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0JBMUJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsT0FBTztpQkFDcEI7Ozs7Z0JBWGtDLFVBQVU7Z0JBQVMsU0FBUzs7O3NCQWExRCxLQUFLOztJQXdCVixtQkFBQztDQUFBLEFBNUJELElBNEJDO1NBekJZLFlBQVk7OztJQUNyQiwyQkFBa0I7Ozs7O0lBR2QsNkJBQXlCOzs7OztJQUN6QixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGhlbWUuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFV0aWxzU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvdXRpbHMvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tyb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSByb3c6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmYWItcm93Jyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUocGFyZW50LCB3cmFwcGVyLCBlbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh3cmFwcGVyLCBlbGVtZW50KTtcblxuICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIHJvdzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3MoVXRpbHNTdHlsZXMoeyBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHMgfSkpKTtcbiAgICB9XG5cbn1cbiJdfQ==