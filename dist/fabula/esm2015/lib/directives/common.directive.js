/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/common.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
export class CommonDirective {
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
        const element = this.elRef.nativeElement;
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: this })));
    }
}
CommonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'commonDirective'
            },] }
];
/** @nocollapse */
CommonDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    CommonDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbW1vbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFLMUQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDeEIsWUFBbUIsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7Ozs7SUFFekMsZUFBZTs7Y0FDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1FBQ3hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7WUFUSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjthQUM5Qjs7OztZQVJrQyxVQUFVOzs7O0lBVTdCLGdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFV0aWxzU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvdXRpbHMvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2NvbW1vbkRpcmVjdGl2ZSdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGVsUmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzcyhVdGlsc1N0eWxlcyh7IGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wczogdGhpcyB9KSkpO1xuICAgIH1cbn1cbiJdfQ==