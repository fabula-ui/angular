/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-group/input-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import InputGroupStyles from '@fabula/core/styles/components/input-group/input-group';
var InputGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputGroupComponent, _super);
    function InputGroupComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.layout = 'horizontal';
        return _this;
    }
    /**
     * @return {?}
     */
    InputGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = InputGroupStyles;
        this.initStyles();
    };
    InputGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-input-group',
                    template: "<div class=\"fab-input-group-wrapper\" data-fab-wrapper=\"inputGroup\">\n  <div class=\"fab-input-group\" data-fab-component=\"inputGroup\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    InputGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    InputGroupComponent.propDecorators = {
        layout: [{ type: Input }]
    };
    return InputGroupComponent;
}(CommonComponent));
export { InputGroupComponent };
if (false) {
    /** @type {?} */
    InputGroupComponent.prototype.layout;
    /** @type {?} */
    InputGroupComponent.prototype.elRef;
    /** @type {?} */
    InputGroupComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sZ0JBQWdCLE1BQU0sd0RBQXdELENBQUM7QUFFdEY7SUFJeUMsK0NBQWU7SUFHdEQsNkJBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUo1QixZQUFNLEdBQUcsWUFBWSxDQUFDOztJQUtFLENBQUM7Ozs7SUFFbEMsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJNQUEyQztpQkFDNUM7Ozs7Z0JBZG1CLFVBQVU7Z0JBTXJCLGFBQWE7Ozt5QkFVbkIsS0FBSzs7SUFXUiwwQkFBQztDQUFBLEFBaEJELENBSXlDLGVBQWUsR0FZdkQ7U0FaWSxtQkFBbUI7OztJQUM5QixxQ0FBK0I7O0lBRzdCLG9DQUF3Qjs7SUFDeEIsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgSW5wdXRHcm91cFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItaW5wdXQtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IElucHV0R3JvdXBTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==