/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-footer/modal-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';
// Services
import { FabulaService } from '../../services/fabula.service';
var ModalFooterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalFooterComponent, _super);
    function ModalFooterComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    ModalFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    ModalFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-modal-footer',
                    template: "<div class=\"fab-modal-footer fab-modal-section\" data-fab-component=\"modalFooter\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalFooterComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    return ModalFooterComponent;
}(ModalSectionComponent));
export { ModalFooterComponent };
if (false) {
    /** @type {?} */
    ModalFooterComponent.prototype.elRef;
    /** @type {?} */
    ModalFooterComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vZGFsLWZvb3Rlci9tb2RhbC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUc5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlEO0lBSTBDLGdEQUFxQjtJQUM3RCw4QkFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUZyQyxZQUdJLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUZ6QixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUNKLENBQUM7Ozs7SUFFbEMsdUNBQVE7OztJQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHNJQUE0QztpQkFDN0M7Ozs7Z0JBWDJCLFVBQVU7Z0JBTTdCLGFBQWE7O0lBZXRCLDJCQUFDO0NBQUEsQUFiRCxDQUkwQyxxQkFBcUIsR0FTOUQ7U0FUWSxvQkFBb0I7OztJQUU3QixxQ0FBd0I7O0lBQ3hCLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IE1vZGFsU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsLXNlY3Rpb24vbW9kYWwtc2VjdGlvbi5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLW1vZGFsLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEZvb3RlckNvbXBvbmVudCBleHRlbmRzIE1vZGFsU2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19