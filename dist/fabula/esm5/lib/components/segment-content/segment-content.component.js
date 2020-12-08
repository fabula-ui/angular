/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segment-content/segment-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
// Components
import { ContentComponent } from '../content/content.component';
// Services
import { FabulaService } from '../../services/fabula.service';
var SegmentContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SegmentContentComponent, _super);
    function SegmentContentComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.contentClass = 'fab-segment-content';
        return _this;
    }
    /**
     * @return {?}
     */
    SegmentContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    SegmentContentComponent.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                    selector: 'fab-segment-content'
                }] }
    ];
    /** @nocollapse */
    SegmentContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    return SegmentContentComponent;
}(ContentComponent));
export { SegmentContentComponent };
if (false) {
    /** @type {?} */
    SegmentContentComponent.prototype.elRef;
    /** @type {?} */
    SegmentContentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlZ21lbnQtY29udGVudC9zZWdtZW50LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUc5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlEO0lBSTZDLG1EQUFnQjtJQUMzRCxpQ0FDUyxLQUFpQixFQUNqQixhQUE0QjtRQUZyQyxZQUlFLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FFNUI7UUFMUSxXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBR25DLEtBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUM7O0lBQzVDLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsNkxBQWdEO29CQUNoRCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7OztnQkFYbUIsVUFBVTtnQkFNckIsYUFBYTs7SUFrQnRCLDhCQUFDO0NBQUEsQUFoQkQsQ0FJNkMsZ0JBQWdCLEdBWTVEO1NBWlksdUJBQXVCOzs7SUFFaEMsd0NBQXdCOztJQUN4QixnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udGVudC9jb250ZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzZWxlY3RvcjogJ2ZhYi1zZWdtZW50LWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnRDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7XG4gICAgdGhpcy5jb250ZW50Q2xhc3MgPSAnZmFiLXNlZ21lbnQtY29udGVudCc7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG4iXX0=