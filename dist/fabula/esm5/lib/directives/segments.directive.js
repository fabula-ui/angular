/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/segments.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import SegmentContentStyles from '@fabula/core/styles/components/segment-content/segment-content';
var SegmentsDirective = /** @class */ (function () {
    function SegmentsDirective(elRef) {
        this.elRef = elRef;
        this.segmentIsActive = false;
    }
    /**
     * @return {?}
     */
    SegmentsDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        host.setAttribute('data-segment-is-active', this.segmentIsActive);
        host.setAttribute('data-segment-name', this.segmentName);
        host.setAttribute('data-segment-scope', this.segmentScope);
        host.classList.add(css(SegmentContentStyles({ framework: 'angular', props: {} })));
    };
    SegmentsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[segmentIsActive], [segmentName], [segmentScope]'
                },] }
    ];
    /** @nocollapse */
    SegmentsDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SegmentsDirective.propDecorators = {
        segmentIsActive: [{ type: Input }],
        segmentName: [{ type: Input }],
        segmentScope: [{ type: Input }]
    };
    return SegmentsDirective;
}());
export { SegmentsDirective };
if (false) {
    /** @type {?} */
    SegmentsDirective.prototype.segmentIsActive;
    /** @type {?} */
    SegmentsDirective.prototype.segmentName;
    /** @type {?} */
    SegmentsDirective.prototype.segmentScope;
    /**
     * @type {?}
     * @private
     */
    SegmentsDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvc2VnbWVudHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLG9CQUFvQixNQUFNLGdFQUFnRSxDQUFDO0FBRWxHO0lBUUksMkJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFKNUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFJTyxDQUFDOzs7O0lBRXpDLDJDQUFlOzs7SUFBZjs7WUFDVSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1FBRXJDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O2dCQWxCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtEQUFrRDtpQkFDL0Q7Ozs7Z0JBUmtDLFVBQVU7OztrQ0FVeEMsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7O0lBY1Ysd0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWpCWSxpQkFBaUI7OztJQUMxQiw0Q0FBaUM7O0lBQ2pDLHdDQUE2Qjs7SUFDN0IseUNBQThCOzs7OztJQUVsQixrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgU2VnbWVudENvbnRlbnRTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3NlZ21lbnQtY29udGVudC9zZWdtZW50LWNvbnRlbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tzZWdtZW50SXNBY3RpdmVdLCBbc2VnbWVudE5hbWVdLCBbc2VnbWVudFNjb3BlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudHNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBzZWdtZW50SXNBY3RpdmUgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzZWdtZW50TmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNlZ21lbnRTY29wZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBob3N0LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWdtZW50LWlzLWFjdGl2ZScsIHRoaXMuc2VnbWVudElzQWN0aXZlKTtcbiAgICAgICAgaG9zdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VnbWVudC1uYW1lJywgdGhpcy5zZWdtZW50TmFtZSk7XG4gICAgICAgIGhvc3Quc2V0QXR0cmlidXRlKCdkYXRhLXNlZ21lbnQtc2NvcGUnLCB0aGlzLnNlZ21lbnRTY29wZSk7XG5cbiAgICAgICAgaG9zdC5jbGFzc0xpc3QuYWRkKGNzcyhTZWdtZW50Q29udGVudFN0eWxlcyh7IGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wczoge30gfSkpKTtcbiAgICB9XG5cbn1cbiJdfQ==