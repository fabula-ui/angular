/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-body/modal-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ModalBodyStyles from '@fabula/core/styles/components/modal-body/modal-body';
var ModalBodyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalBodyComponent, _super);
    function ModalBodyComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    ModalBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.additionalStyles = ModalBodyStyles;
        _super.prototype.ngOnInit.call(this);
    };
    ModalBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-modal-body',
                    template: "<div class=\"fab-modal-body fab-modal-section\" data-fab-component=\"modalBody\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    return ModalBodyComponent;
}(ModalSectionComponent));
export { ModalBodyComponent };
if (false) {
    /** @type {?} */
    ModalBodyComponent.prototype.elRef;
    /** @type {?} */
    ModalBodyComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb2RhbC1ib2R5L21vZGFsLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUc5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGVBQWUsTUFBTSxzREFBc0QsQ0FBQztBQUVuRjtJQUl3Qyw4Q0FBcUI7SUFDM0QsNEJBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFDSixDQUFDOzs7O0lBRWxDLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGtJQUEwQztpQkFDM0M7Ozs7Z0JBZDJCLFVBQVU7Z0JBTTdCLGFBQWE7O0lBbUJ0Qix5QkFBQztDQUFBLEFBZEQsQ0FJd0MscUJBQXFCLEdBVTVEO1NBVlksa0JBQWtCOzs7SUFFM0IsbUNBQXdCOztJQUN4QiwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBNb2RhbFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC1zZWN0aW9uL21vZGFsLXNlY3Rpb24uY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IE1vZGFsQm9keVN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvbW9kYWwtYm9keS9tb2RhbC1ib2R5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLW1vZGFsLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtYm9keS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQm9keUNvbXBvbmVudCBleHRlbmRzIE1vZGFsU2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRpdGlvbmFsU3R5bGVzID0gTW9kYWxCb2R5U3R5bGVzO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==