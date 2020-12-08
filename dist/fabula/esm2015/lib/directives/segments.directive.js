/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/segments.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import SegmentContentStyles from '@fabula/core/styles/components/segment-content/segment-content';
export class SegmentsDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.segmentIsActive = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        host.setAttribute('data-segment-is-active', this.segmentIsActive);
        host.setAttribute('data-segment-name', this.segmentName);
        host.setAttribute('data-segment-scope', this.segmentScope);
        host.classList.add(css(SegmentContentStyles({ framework: 'angular', props: {} })));
    }
}
SegmentsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[segmentIsActive], [segmentName], [segmentScope]'
            },] }
];
/** @nocollapse */
SegmentsDirective.ctorParameters = () => [
    { type: ElementRef }
];
SegmentsDirective.propDecorators = {
    segmentIsActive: [{ type: Input }],
    segmentName: [{ type: Input }],
    segmentScope: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvc2VnbWVudHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLG9CQUFvQixNQUFNLGdFQUFnRSxDQUFDO0FBS2xHLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFLMUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUo1QixvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUlPLENBQUM7Ozs7SUFFekMsZUFBZTs7Y0FDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1FBRXJDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7OztZQWxCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtEQUFrRDthQUMvRDs7OztZQVJrQyxVQUFVOzs7OEJBVXhDLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzs7O0lBRk4sNENBQWlDOztJQUNqQyx3Q0FBNkI7O0lBQzdCLHlDQUE4Qjs7Ozs7SUFFbEIsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFNlZ21lbnRDb250ZW50U3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9zZWdtZW50LWNvbnRlbnQvc2VnbWVudC1jb250ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc2VnbWVudElzQWN0aXZlXSwgW3NlZ21lbnROYW1lXSwgW3NlZ21lbnRTY29wZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnRzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgc2VnbWVudElzQWN0aXZlID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2VnbWVudE5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzZWdtZW50U2NvcGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaG9zdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VnbWVudC1pcy1hY3RpdmUnLCB0aGlzLnNlZ21lbnRJc0FjdGl2ZSk7XG4gICAgICAgIGhvc3Quc2V0QXR0cmlidXRlKCdkYXRhLXNlZ21lbnQtbmFtZScsIHRoaXMuc2VnbWVudE5hbWUpO1xuICAgICAgICBob3N0LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWdtZW50LXNjb3BlJywgdGhpcy5zZWdtZW50U2NvcGUpO1xuXG4gICAgICAgIGhvc3QuY2xhc3NMaXN0LmFkZChjc3MoU2VnbWVudENvbnRlbnRTdHlsZXMoeyBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHM6IHt9IH0pKSk7XG4gICAgfVxuXG59XG4iXX0=