/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-section/modal-section.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';
var ModalSectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalSectionComponent, _super);
    function ModalSectionComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.padding = true;
        return _this;
    }
    /**
     * @return {?}
     */
    ModalSectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = ModalSectionStyles;
        this.initStyles();
    };
    ModalSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-modal-section',
                    template: "<div class=\"fab-modal-section\" data-fab-component=\"modalSection\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalSectionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ModalSectionComponent.propDecorators = {
        adaptColor: [{ type: Input }],
        color: [{ type: Input }],
        darken: [{ type: Input }],
        divider: [{ type: Input }],
        dividerColor: [{ type: Input }],
        lighten: [{ type: Input }],
        padding: [{ type: Input }],
        parentColor: [{ type: Input }]
    };
    return ModalSectionComponent;
}(CommonComponent));
export { ModalSectionComponent };
if (false) {
    /** @type {?} */
    ModalSectionComponent.prototype.adaptColor;
    /** @type {?} */
    ModalSectionComponent.prototype.color;
    /** @type {?} */
    ModalSectionComponent.prototype.darken;
    /** @type {?} */
    ModalSectionComponent.prototype.divider;
    /** @type {?} */
    ModalSectionComponent.prototype.dividerColor;
    /** @type {?} */
    ModalSectionComponent.prototype.lighten;
    /** @type {?} */
    ModalSectionComponent.prototype.padding;
    /** @type {?} */
    ModalSectionComponent.prototype.parentColor;
    /** @type {?} */
    ModalSectionComponent.prototype.elRef;
    /** @type {?} */
    ModalSectionComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tb2RhbC1zZWN0aW9uL21vZGFsLXNlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sa0JBQWtCLE1BQU0sNERBQTRELENBQUM7QUFFNUY7SUFJMkMsaURBQWU7SUFVeEQsK0JBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUw1QixhQUFPLEdBQUcsSUFBSSxDQUFDOztJQU1TLENBQUM7Ozs7SUFFbEMsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixzSEFBNkM7aUJBQzlDOzs7O2dCQWQyQixVQUFVO2dCQU03QixhQUFhOzs7NkJBVW5CLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFXUiw0QkFBQztDQUFBLEFBdkJELENBSTJDLGVBQWUsR0FtQnpEO1NBbkJZLHFCQUFxQjs7O0lBQ2hDLDJDQUE2Qjs7SUFDN0Isc0NBQXVCOztJQUN2Qix1Q0FBeUI7O0lBQ3pCLHdDQUF5Qjs7SUFDekIsNkNBQThCOztJQUM5Qix3Q0FBMEI7O0lBQzFCLHdDQUF3Qjs7SUFDeEIsNENBQTZCOztJQUczQixzQ0FBd0I7O0lBQ3hCLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IE1vZGFsU2VjdGlvblN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvbW9kYWwtc2VjdGlvbi9tb2RhbC1zZWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLW1vZGFsLXNlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtc2VjdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWRhcHRDb2xvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZGFya2VuOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXZpZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpdmlkZXJDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsaWdodGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBwYWRkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFyZW50Q29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gTW9kYWxTZWN0aW9uU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG59XG4iXX0=