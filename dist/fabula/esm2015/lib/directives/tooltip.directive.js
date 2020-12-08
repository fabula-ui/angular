/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
// Components
import { TooltipComponent } from '../components/tooltip/tooltip.component';
export class TooltipDirective {
    /**
     * @param {?} appRef
     * @param {?} elRef
     * @param {?} injector
     * @param {?} resolver
     */
    constructor(appRef, elRef, injector, resolver) {
        this.appRef = appRef;
        this.elRef = elRef;
        this.injector = injector;
        this.resolver = resolver;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const portal = document.querySelector('.fab-tooltip-portal');
        if (!portal) {
            this.createPortal();
        }
        this.handleTooltip();
    }
    /**
     * @return {?}
     */
    createPortal() {
        /** @type {?} */
        const portal = document.createElement('div');
        portal.classList.add('fab-tooltip-portal');
        document.body.append(portal);
    }
    /**
     * @param {?} host
     * @return {?}
     */
    createTooltip(host) {
        /** @type {?} */
        const coords = this.getCoords(host);
        /** @type {?} */
        let element;
        /** @type {?} */
        let portal;
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
        element.style.left = `${coords.left}px`;
        element.style.top = `${coords.top}px`;
        portal.appendChild(element);
    }
    /**
     * @return {?}
     */
    destroyTooltip() {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }
    /**
     * @param {?} host
     * @return {?}
     */
    getCoords(host) {
        const { height, width, x, y } = host.getBoundingClientRect();
        /** @type {?} */
        let left;
        /** @type {?} */
        let top;
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
        return { left, top };
    }
    /**
     * @return {?}
     */
    handleTooltip() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const component = host.querySelector('[data-fab-component]');
        /** @type {?} */
        const target = component || host;
        target.addEventListener('mouseenter', (/**
         * @return {?}
         */
        () => {
            this.createTooltip(target);
        }));
        target.addEventListener('mouseleave', (/**
         * @return {?}
         */
        () => {
            this.destroyTooltip();
        }));
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip],[tooltipColor],[tooltipLabel],[tooltipOffset],[tooltipPlacement]'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ElementRef },
    { type: Injector },
    { type: ComponentFactoryResolver }
];
TooltipDirective.propDecorators = {
    tooltip: [{ type: Input }],
    tooltipColor: [{ type: Input }],
    tooltipLabel: [{ type: Input }],
    tooltipOffset: [{ type: Input }],
    tooltipPlacement: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBbUIsTUFBTSxlQUFlLENBQUM7O0FBR2pKLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBSzNFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFXekIsWUFDWSxNQUFzQixFQUN0QixLQUFpQixFQUNqQixRQUFrQixFQUNsQixRQUFrQztRQUhsQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFDMUMsQ0FBQzs7OztJQUVMLGVBQWU7O2NBQ0wsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFNUQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDRixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDNUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUzQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFJOztjQUNSLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUks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QUFhOztjQUNILElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O2NBQy9CLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDOztjQUN0RCxNQUFNLEdBQUcsU0FBUyxJQUFJLElBQUk7UUFFaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7OztRQUFFLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7OztRQUFFLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFyR0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSw0RUFBNEU7YUFDekY7Ozs7WUFQeUYsY0FBYztZQUFyRSxVQUFVO1lBQW1DLFFBQVE7WUFBbEMsd0JBQXdCOzs7c0JBU3pFLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSzs7OztJQUpOLG1DQUFzQjs7SUFDdEIsd0NBQThCOztJQUM5Qix3Q0FBOEI7O0lBQzlCLHlDQUE0Qjs7SUFDNUIsNENBQWtDOztJQUVsQyx3Q0FBYTs7SUFDYixnQ0FBSzs7SUFDTCwrQkFBSTs7Ozs7SUFHQSxrQ0FBOEI7Ozs7O0lBQzlCLGlDQUF5Qjs7Ozs7SUFDekIsb0NBQTBCOzs7OztJQUMxQixvQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLCBBcHBsaWNhdGlvblJlZiwgRW1iZWRkZWRWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0b29sdGlwXSxbdG9vbHRpcENvbG9yXSxbdG9vbHRpcExhYmVsXSxbdG9vbHRpcE9mZnNldF0sW3Rvb2x0aXBQbGFjZW1lbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgdG9vbHRpcDogYW55O1xuICAgIEBJbnB1dCgpIHRvb2x0aXBDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRvb2x0aXBMYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRvb2x0aXBPZmZzZXQ6IGFueTtcbiAgICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmc7XG5cbiAgICBjb21wb25lbnRSZWY7XG4gICAgbGVmdDtcbiAgICB0b3A7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgcG9ydGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhYi10b29sdGlwLXBvcnRhbCcpO1xuXG4gICAgICAgIGlmICghcG9ydGFsKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBvcnRhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVUb29sdGlwKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlUG9ydGFsKCkge1xuICAgICAgICBjb25zdCBwb3J0YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9ydGFsLmNsYXNzTGlzdC5hZGQoJ2ZhYi10b29sdGlwLXBvcnRhbCcpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvcnRhbCk7XG4gICAgfVxuXG4gICAgY3JlYXRlVG9vbHRpcChob3N0KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuZ2V0Q29vcmRzKGhvc3QpO1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgbGV0IHBvcnRhbDtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoVG9vbHRpcENvbXBvbmVudCkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb2xvciA9IHRoaXMudG9vbHRpcC5jb2xvcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UubGFiZWwgPSB0aGlzLnRvb2x0aXAubGFiZWw7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLm9mZnNldCA9IHRoaXMudG9vbHRpcC5vZmZzZXQ7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnBsYWNlbWVudCA9IHRoaXMudG9vbHRpcC5wbGFjZW1lbnQgfHwgJ3RvcCc7XG5cbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAgICAgZWxlbWVudCA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBwb3J0YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFiLXRvb2x0aXAtcG9ydGFsJyk7XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2VtZW50JywgdGhpcy50b29sdGlwLnBsYWNlbWVudCB8fCAndG9wJyk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXJlYWR5JywgJ3RydWUnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7Y29vcmRzLmxlZnR9cHhgO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke2Nvb3Jkcy50b3B9cHhgO1xuXG4gICAgICAgIHBvcnRhbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBkZXN0cm95VG9vbHRpcCgpIHtcbiAgICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBnZXRDb29yZHMoaG9zdCkge1xuICAgICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGgsIHgsIHkgfSA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBsZWZ0O1xuICAgICAgICBsZXQgdG9wO1xuXG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXAucGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgbGVmdCA9IHggKyB3aWR0aCAvIDI7XG4gICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC5wbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgbGVmdCA9IHg7XG4gICAgICAgICAgICB0b3AgPSB5ICsgaGVpZ2h0IC8gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAucGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZWZ0ID0geCArIHdpZHRoO1xuICAgICAgICAgICAgdG9wID0geSArIGhlaWdodCAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZWZ0ID0geCArIHdpZHRoIC8gMjtcbiAgICAgICAgICAgIHRvcCA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBsZWZ0LCB0b3AgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVUb29sdGlwKCkge1xuICAgICAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBob3N0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZhYi1jb21wb25lbnRdJyk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNvbXBvbmVudCB8fCBob3N0O1xuXG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb29sdGlwKHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==