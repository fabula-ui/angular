/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tooltip/tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import TooltipStyles from '@fabula/core/styles/components/tooltip/tooltip';
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(elRef) {
        this.elRef = elRef;
        this.placement = 'top';
    }
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var styles = css(TooltipStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    };
    TooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tooltip',
                    template: "<div class=\"fab-tooltip\" [attr.data-placement]=\"placement\">\n  <span class=\"fab-tooltip__label\">{{label}}</span>\n</div>"
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TooltipComponent.propDecorators = {
        color: [{ type: Input }],
        label: [{ type: Input }],
        offset: [{ type: Input }],
        placement: [{ type: Input }]
    };
    return TooltipComponent;
}());
export { TooltipComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLGFBQWEsTUFBTSxnREFBZ0QsQ0FBQztBQUUzRTtJQVVFLDBCQUFtQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBRjNCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFFYSxDQUFDOzs7O0lBRXpDLDBDQUFlOzs7SUFBZjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztZQUMvQixNQUFNLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMElBQXVDO2lCQUN4Qzs7OztnQkFUa0MsVUFBVTs7O3dCQVcxQyxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOztJQVVSLHVCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FkWSxnQkFBZ0I7OztJQUMzQixpQ0FBdUI7O0lBQ3ZCLGlDQUF1Qjs7SUFDdkIsa0NBQXFCOztJQUNyQixxQ0FBMkI7O0lBRWYsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFRvb2x0aXBTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9mZnNldDogYW55O1xuICBASW5wdXQoKSBwbGFjZW1lbnQgPSAndG9wJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHN0eWxlcyA9IGNzcyhUb29sdGlwU3R5bGVzKHsgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzOiB0aGlzIH0pKTtcblxuICAgIGhvc3QuY2xhc3NMaXN0LmFkZChzdHlsZXMpO1xuICB9XG59XG4iXX0=