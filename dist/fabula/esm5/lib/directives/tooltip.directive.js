/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
// Components
import { TooltipComponent } from '../components/tooltip/tooltip.component';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(appRef, elRef, injector, resolver) {
        this.appRef = appRef;
        this.elRef = elRef;
        this.injector = injector;
        this.resolver = resolver;
    }
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var portal = document.querySelector('.fab-tooltip-portal');
        if (!portal) {
            this.createPortal();
        }
        this.handleTooltip();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.createPortal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var portal = document.createElement('div');
        portal.classList.add('fab-tooltip-portal');
        document.body.append(portal);
    };
    /**
     * @param {?} host
     * @return {?}
     */
    TooltipDirective.prototype.createTooltip = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        /** @type {?} */
        var coords = this.getCoords(host);
        /** @type {?} */
        var element;
        /** @type {?} */
        var portal;
        this.componentRef = this.resolver.resolveComponentFactory(TooltipComponent).create(this.injector);
        this.componentRef.instance.color = this.tooltip.color;
        this.componentRef.instance.label = this.tooltip.label;
        this.componentRef.instance.offset = this.tooltip.offset;
        this.componentRef.instance.placement = this.tooltip.placement || 'top';
        this.appRef.attachView(this.componentRef.hostView);
        element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        portal = document.querySelector('.fab-tooltip-portal');
        element.setAttribute('data-placement', this.tooltip.placement || 'top');
        element.setAttribute('data-ready', 'true');
        element.style.left = coords.left + "px";
        element.style.top = coords.top + "px";
        portal.appendChild(element);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.destroyTooltip = /**
     * @return {?}
     */
    function () {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    };
    /**
     * @param {?} host
     * @return {?}
     */
    TooltipDirective.prototype.getCoords = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        var _a = host.getBoundingClientRect(), height = _a.height, width = _a.width, x = _a.x, y = _a.y;
        /** @type {?} */
        var left;
        /** @type {?} */
        var top;
        if (this.tooltip.placement === 'bottom') {
            left = x + width / 2;
            top = y + height;
        }
        else if (this.tooltip.placement === 'left') {
            left = x;
            top = y + height / 2;
        }
        else if (this.tooltip.placement === 'right') {
            left = x + width;
            top = y + height / 2;
        }
        else {
            left = x + width / 2;
            top = y;
        }
        return { left: left, top: top };
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.handleTooltip = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var component = host.querySelector('[data-fab-component]');
        /** @type {?} */
        var target = component || host;
        target.addEventListener('mouseenter', (/**
         * @return {?}
         */
        function () {
            _this.createTooltip(target);
        }));
        target.addEventListener('mouseleave', (/**
         * @return {?}
         */
        function () {
            _this.destroyTooltip();
        }));
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tooltip],[tooltipColor],[tooltipLabel],[tooltipOffset],[tooltipPlacement]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: ElementRef },
        { type: Injector },
        { type: ComponentFactoryResolver }
    ]; };
    TooltipDirective.propDecorators = {
        tooltip: [{ type: Input }],
        tooltipColor: [{ type: Input }],
        tooltipLabel: [{ type: Input }],
        tooltipOffset: [{ type: Input }],
        tooltipPlacement: [{ type: Input }]
    };
    return TooltipDirective;
}());
export { TooltipDirective };
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.tooltip;
    /** @type {?} */
    TooltipDirective.prototype.tooltipColor;
    /** @type {?} */
    TooltipDirective.prototype.tooltipLabel;
    /** @type {?} */
    TooltipDirective.prototype.tooltipOffset;
    /** @type {?} */
    TooltipDirective.prototype.tooltipPlacement;
    /** @type {?} */
    TooltipDirective.prototype.componentRef;
    /** @type {?} */
    TooltipDirective.prototype.left;
    /** @type {?} */
    TooltipDirective.prototype.top;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBbUIsTUFBTSxlQUFlLENBQUM7O0FBR2pKLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBY0ksMEJBQ1ksTUFBc0IsRUFDdEIsS0FBaUIsRUFDakIsUUFBa0IsRUFDbEIsUUFBa0M7UUFIbEMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQzFDLENBQUM7Ozs7SUFFTCwwQ0FBZTs7O0lBQWY7O1lBQ1UsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFNUQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsdUNBQVk7OztJQUFaOztZQUNVLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsd0NBQWE7Ozs7SUFBYixVQUFjLElBQUk7O1lBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFB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RCx3Q0FBYTs7O0lBQWI7UUFBQSxpQkFZQzs7WUFYUyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztZQUMvQixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQzs7WUFDdEQsTUFBTSxHQUFHLFNBQVMsSUFBSSxJQUFJO1FBRWhDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZOzs7UUFBRTtZQUNsQyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7OztRQUFFO1lBQ2xDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXJHSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDRFQUE0RTtpQkFDekY7Ozs7Z0JBUHlGLGNBQWM7Z0JBQXJFLFVBQVU7Z0JBQW1DLFFBQVE7Z0JBQWxDLHdCQUF3Qjs7OzBCQVN6RSxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO21DQUNMLEtBQUs7O0lBK0ZWLHVCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0FwR1ksZ0JBQWdCOzs7SUFDekIsbUNBQXNCOztJQUN0Qix3Q0FBOEI7O0lBQzlCLHdDQUE4Qjs7SUFDOUIseUNBQTRCOztJQUM1Qiw0Q0FBa0M7O0lBRWxDLHdDQUFhOztJQUNiLGdDQUFLOztJQUNMLCtCQUFJOzs7OztJQUdBLGtDQUE4Qjs7Ozs7SUFDOUIsaUNBQXlCOzs7OztJQUN6QixvQ0FBMEI7Ozs7O0lBQzFCLG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIEFwcGxpY2F0aW9uUmVmLCBFbWJlZGRlZFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLFt0b29sdGlwQ29sb3JdLFt0b29sdGlwTGFiZWxdLFt0b29sdGlwT2Zmc2V0XSxbdG9vbHRpcFBsYWNlbWVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSB0b29sdGlwOiBhbnk7XG4gICAgQElucHV0KCkgdG9vbHRpcENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdG9vbHRpcExhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdG9vbHRpcE9mZnNldDogYW55O1xuICAgIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZztcblxuICAgIGNvbXBvbmVudFJlZjtcbiAgICBsZWZ0O1xuICAgIHRvcDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICApIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBwb3J0YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFiLXRvb2x0aXAtcG9ydGFsJyk7XG5cbiAgICAgICAgaWYgKCFwb3J0YWwpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9ydGFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVRvb2x0aXAoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQb3J0YWwoKSB7XG4gICAgICAgIGNvbnN0IHBvcnRhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3J0YWwuY2xhc3NMaXN0LmFkZCgnZmFiLXRvb2x0aXAtcG9ydGFsJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocG9ydGFsKTtcbiAgICB9XG5cbiAgICBjcmVhdGVUb29sdGlwKGhvc3QpIHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5nZXRDb29yZHMoaG9zdCk7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBsZXQgcG9ydGFsO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUb29sdGlwQ29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbG9yID0gdGhpcy50b29sdGlwLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5sYWJlbCA9IHRoaXMudG9vbHRpcC5sYWJlbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uub2Zmc2V0ID0gdGhpcy50b29sdGlwLm9mZnNldDtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UucGxhY2VtZW50ID0gdGhpcy50b29sdGlwLnBsYWNlbWVudCB8fCAndG9wJztcblxuICAgICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgICAgICBlbGVtZW50ID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHBvcnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWItdG9vbHRpcC1wb3J0YWwnKTtcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZW1lbnQnLCB0aGlzLnRvb2x0aXAucGxhY2VtZW50IHx8ICd0b3AnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhZHknLCAndHJ1ZScpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtjb29yZHMubGVmdH1weGA7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7Y29vcmRzLnRvcH1weGA7XG5cbiAgICAgICAgcG9ydGFsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lUb29sdGlwKCkge1xuICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGdldENvb3Jkcyhob3N0KSB7XG4gICAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCwgeCwgeSB9ID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IGxlZnQ7XG4gICAgICAgIGxldCB0b3A7XG5cbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcC5wbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBsZWZ0ID0geCArIHdpZHRoIC8gMjtcbiAgICAgICAgICAgIHRvcCA9IHkgKyBoZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b29sdGlwLnBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0ID0geDtcbiAgICAgICAgICAgIHRvcCA9IHkgKyBoZWlnaHQgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC5wbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGxlZnQgPSB4ICsgd2lkdGg7XG4gICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0IC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlZnQgPSB4ICsgd2lkdGggLyAyO1xuICAgICAgICAgICAgdG9wID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGxlZnQsIHRvcCB9O1xuICAgIH1cblxuICAgIGhhbmRsZVRvb2x0aXAoKSB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGhvc3QucXVlcnlTZWxlY3RvcignW2RhdGEtZmFiLWNvbXBvbmVudF0nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gY29tcG9uZW50IHx8IGhvc3Q7XG5cbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvb2x0aXAodGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19