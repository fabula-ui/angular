/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-toggle/dropdown-toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
// Components
import { ButtonComponent } from '../button/button.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';
var DropdownToggleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownToggleComponent, _super);
    function DropdownToggleComponent(cdRef, elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.cdRef = cdRef;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.arrow = true;
        _this.isOpen = false;
        _this.toggle = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    DropdownToggleComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    DropdownToggleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.props = tslib_1.__assign({}, this);
        this.styles = DropdownToggleStyles;
        this.initStyles();
    };
    /**
     * @return {?}
     */
    DropdownToggleComponent.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        this.toggle.emit(true);
    };
    Object.defineProperty(DropdownToggleComponent.prototype, "arrowIsOnlyChild", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.labelEl && this.labelEl.nativeElement && this.labelEl.nativeElement.childNodes) {
                return !this.labelEl.nativeElement.childNodes.length;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dropdown-toggle',
                    template: "<div class=\"fab-dropdown-toggle\" (click)=\"handleClick()\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\">\n  <fab-button [props]=\"props\">\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"!label\" #label>\n      <ng-content></ng-content>\n    </span>\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"label\">{{ label }}</span>\n    <span class=\"fab-dropdown-toggle__chevron\" *ngIf=\"arrow\" [attr.data-only-child]=\"arrowIsOnlyChild\">\n      <fab-icon name=\"chevron-down\"></fab-icon>\n    </span>\n  </fab-button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DropdownToggleComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownToggleComponent.propDecorators = {
        arrow: [{ type: Input }],
        direction: [{ type: Input }],
        icon: [{ type: Input }],
        label: [{ type: Input }],
        isOpen: [{ type: Input }],
        toggle: [{ type: Output }],
        labelEl: [{ type: ViewChild, args: ['label',] }]
    };
    return DropdownToggleComponent;
}(ButtonComponent));
export { DropdownToggleComponent };
if (false) {
    /** @type {?} */
    DropdownToggleComponent.prototype.arrow;
    /** @type {?} */
    DropdownToggleComponent.prototype.direction;
    /** @type {?} */
    DropdownToggleComponent.prototype.icon;
    /** @type {?} */
    DropdownToggleComponent.prototype.label;
    /** @type {?} */
    DropdownToggleComponent.prototype.isOpen;
    /** @type {?} */
    DropdownToggleComponent.prototype.toggle;
    /** @type {?} */
    DropdownToggleComponent.prototype.labelEl;
    /** @type {?} */
    DropdownToggleComponent.prototype.cdRef;
    /** @type {?} */
    DropdownToggleComponent.prototype.elRef;
    /** @type {?} */
    DropdownToggleComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Ryb3Bkb3duLXRvZ2dsZS9kcm9wZG93bi10b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7O0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFNN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLG9CQUFvQixNQUFNLGdFQUFnRSxDQUFDO0FBRWxHO0lBSTZDLG1EQUFlO0lBV3hELGlDQUNXLEtBQXdCLEVBQ3hCLEtBQWlCLEVBQ2pCLGFBQTRCO1FBSHZDLFlBSU0sa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBSHpCLFdBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFiOUIsV0FBSyxHQUFHLElBQUksQ0FBQztRQUliLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFFZCxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBUXRCLENBQUM7Ozs7SUFFcEMsb0RBQWtCOzs7SUFBbEI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyx3QkFBUSxJQUFJLENBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFJLHFEQUFnQjs7OztRQUFwQjtZQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JGLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNILE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQzs7O09BQUE7O2dCQXpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNmpCQUErQztpQkFDbEQ7Ozs7Z0JBekJHLGlCQUFpQjtnQkFFakIsVUFBVTtnQkFlTCxhQUFhOzs7d0JBVWpCLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFFTCxNQUFNOzBCQUVOLFNBQVMsU0FBQyxPQUFPOztJQTZCdEIsOEJBQUM7Q0FBQSxBQTFDRCxDQUk2QyxlQUFlLEdBc0MzRDtTQXRDWSx1QkFBdUI7OztJQUNoQyx3Q0FBc0I7O0lBQ3RCLDRDQUEyQjs7SUFDM0IsdUNBQW9COztJQUNwQix3Q0FBdUI7O0lBQ3ZCLHlDQUF3Qjs7SUFFeEIseUNBQXlEOztJQUV6RCwwQ0FBd0M7O0lBR3BDLHdDQUErQjs7SUFDL0Isd0NBQXdCOztJQUN4QixnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0NoZWNrZWQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5cbi8vIE1vZGVsc1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL21vZGVscy9pY29uLm1vZGVsJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IERyb3Bkb3duVG9nZ2xlU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9kcm9wZG93bi10b2dnbGUvZHJvcGRvd24tdG9nZ2xlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWItZHJvcGRvd24tdG9nZ2xlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Ub2dnbGVDb21wb25lbnQgZXh0ZW5kcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIGFycm93ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBkaXJlY3Rpb246IHN0cmluZztcbiAgICBASW5wdXQoKSBpY29uOiBJY29uO1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2xhYmVsJykgbGFiZWxFbDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb3BzID0geyAuLi50aGlzIH07XG4gICAgICAgIHRoaXMuc3R5bGVzID0gRHJvcGRvd25Ub2dnbGVTdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZS5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIGdldCBhcnJvd0lzT25seUNoaWxkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5sYWJlbEVsICYmIHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50ICYmIHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=