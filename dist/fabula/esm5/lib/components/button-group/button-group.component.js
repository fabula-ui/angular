/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button-group/button-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';
var ButtonGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonGroupComponent, _super);
    function ButtonGroupComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.divider = true;
        _this.dividerColor = '';
        _this.layout = 'h';
        _this.inline = true;
        return _this;
    }
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = ButtonGroupStyles;
        this.initStyles();
    };
    ButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-button-group',
                    template: "<div class=\"fab-button-group\" data-fab-component=\"buttonGroup\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{display:inline-block}:host .fab-button-group-wrapper{display:block}"]
                }] }
    ];
    /** @nocollapse */
    ButtonGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ButtonGroupComponent.propDecorators = {
        color: [{ type: Input }],
        divider: [{ type: Input }],
        dividerColor: [{ type: Input }],
        layout: [{ type: Input }]
    };
    return ButtonGroupComponent;
}(CommonComponent));
export { ButtonGroupComponent };
if (false) {
    /** @type {?} */
    ButtonGroupComponent.prototype.color;
    /** @type {?} */
    ButtonGroupComponent.prototype.divider;
    /** @type {?} */
    ButtonGroupComponent.prototype.dividerColor;
    /** @type {?} */
    ButtonGroupComponent.prototype.layout;
    /** @type {?} */
    ButtonGroupComponent.prototype.inline;
    /** @type {?} */
    ButtonGroupComponent.prototype.elRef;
    /** @type {?} */
    ButtonGroupComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8saUJBQWlCLE1BQU0sMERBQTBELENBQUM7QUFFekY7SUFLMEMsZ0RBQWU7SUFRdkQsOEJBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVI1QixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsWUFBTSxHQUFHLEdBQUcsQ0FBQztRQUV0QixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQUttQixDQUFDOzs7O0lBRWxDLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFFNUIsc0hBQTRDOztpQkFDN0M7Ozs7Z0JBbEJDLFVBQVU7Z0JBU0gsYUFBYTs7O3dCQVduQixLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQWFSLDJCQUFDO0NBQUEsQUF0QkQsQ0FLMEMsZUFBZSxHQWlCeEQ7U0FqQlksb0JBQW9COzs7SUFDL0IscUNBQXVCOztJQUN2Qix1Q0FBd0I7O0lBQ3hCLDRDQUEyQjs7SUFDM0Isc0NBQXNCOztJQUV0QixzQ0FBYzs7SUFHWixxQ0FBd0I7O0lBQ3hCLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBCdXR0b25Hcm91cFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1idXR0b24tZ3JvdXAnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXZpZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgZGl2aWRlckNvbG9yID0gJyc7XG4gIEBJbnB1dCgpIGxheW91dCA9ICdoJztcblxuICBpbmxpbmUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBCdXR0b25Hcm91cFN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19