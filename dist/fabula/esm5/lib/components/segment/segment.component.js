/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segment/segment.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
// Components
import { SelectorComponent } from '../selector/selector.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import SegmentStyles from '@fabula/core/styles/components/segment/segment';
var SegmentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SegmentComponent, _super);
    function SegmentComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    SegmentComponent.prototype.childViewInit = /**
     * @return {?}
     */
    function () {
        this.styles = SegmentStyles;
        this.initStyles();
    };
    SegmentComponent.decorators = [
        { type: Component, args: [{
                    providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
                    selector: 'fab-segment',
                    template: "<button class=\"fab-segment\" (click)=\"handleClick()\" *ngIf=\"!href\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-segment\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
                }] }
    ];
    /** @nocollapse */
    SegmentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    return SegmentComponent;
}(SelectorComponent));
export { SegmentComponent };
if (false) {
    /** @type {?} */
    SegmentComponent.prototype.elRef;
    /** @type {?} */
    SegmentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWdtZW50L3NlZ21lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGFBQWEsTUFBTSxnREFBZ0QsQ0FBQztBQUUzRTtJQUtzQyw0Q0FBaUI7SUFDckQsMEJBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFDSixDQUFDOzs7O0lBRWxDLHdDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLENBQUM7b0JBQzFFLFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw0aUJBQXVDO2lCQUN4Qzs7OztnQkFmbUIsVUFBVTtnQkFNckIsYUFBYTs7SUFvQnRCLHVCQUFDO0NBQUEsQUFmRCxDQUtzQyxpQkFBaUIsR0FVdEQ7U0FWWSxnQkFBZ0I7OztJQUV6QixpQ0FBd0I7O0lBQ3hCLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL3NlbGVjdG9yL3NlbGVjdG9yLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBTZWdtZW50U3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9zZWdtZW50L3NlZ21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTZWxlY3RvckNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IFNlZ21lbnRDb21wb25lbnQgfV0sXG4gIHNlbGVjdG9yOiAnZmFiLXNlZ21lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VnbWVudC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudENvbXBvbmVudCBleHRlbmRzIFNlbGVjdG9yQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBjaGlsZFZpZXdJbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gU2VnbWVudFN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19