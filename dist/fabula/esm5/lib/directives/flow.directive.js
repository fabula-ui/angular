/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/flow.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
var FlowDirective = /** @class */ (function () {
    function FlowDirective(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    FlowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */
        var props = {
            flow: this.flow,
        };
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: props })));
    };
    FlowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[flow]'
                },] }
    ];
    /** @nocollapse */
    FlowDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FlowDirective.propDecorators = {
        flow: [{ type: Input }]
    };
    return FlowDirective;
}());
export { FlowDirective };
if (false) {
    /** @type {?} */
    FlowDirective.prototype.flow;
    /**
     * @type {?}
     * @private
     */
    FlowDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mbG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFFMUQ7SUFNSSx1QkFDWSxLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQ3pCLENBQUM7Ozs7SUFFTCx1Q0FBZTs7O0lBQWY7O1lBQ1UsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTs7WUFDbEMsS0FBSyxHQUFHO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOztnQkFqQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxRQUFRO2lCQUNyQjs7OztnQkFSa0MsVUFBVTs7O3VCQVV4QyxLQUFLOztJQWNWLG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FmWSxhQUFhOzs7SUFDdEIsNkJBQW1COzs7OztJQUdmLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBVdGlsc1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL3V0aWxzL3V0aWxzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbZmxvd10nXG59KVxuZXhwb3J0IGNsYXNzIEZsb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBmbG93OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZlxuICAgICkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgZmxvdzogdGhpcy5mbG93LFxuICAgICAgICB9O1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3MoVXRpbHNTdHlsZXMoeyBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHMgfSkpKTtcbiAgICB9XG59XG4iXX0=