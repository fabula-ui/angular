/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-section/card-section.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';
var CardSectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CardSectionComponent, _super);
    function CardSectionComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.darken = false;
        _this.expand = false;
        _this.faded = false;
        _this.layout = 'vertical';
        _this.lighten = false;
        return _this;
    }
    /**
     * @return {?}
     */
    CardSectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = CardSectionStyles;
        this.initStyles();
    };
    CardSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-card-section',
                    template: "<div class=\"fab-card-section\" [attr.data-layout]=\"layout\" data-fab-component=\"cardSection\">\n  <ng-content></ng-content>\n</div>\n\n"
                }] }
    ];
    /** @nocollapse */
    CardSectionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CardSectionComponent.propDecorators = {
        color: [{ type: Input }],
        darken: [{ type: Input }],
        divider: [{ type: Input }],
        expand: [{ type: Input }],
        faded: [{ type: Input }],
        layout: [{ type: Input }],
        lighten: [{ type: Input }],
        padding: [{ type: Input }]
    };
    return CardSectionComponent;
}(CommonComponent));
export { CardSectionComponent };
if (false) {
    /** @type {?} */
    CardSectionComponent.prototype.color;
    /** @type {?} */
    CardSectionComponent.prototype.darken;
    /** @type {?} */
    CardSectionComponent.prototype.divider;
    /** @type {?} */
    CardSectionComponent.prototype.expand;
    /** @type {?} */
    CardSectionComponent.prototype.faded;
    /** @type {?} */
    CardSectionComponent.prototype.layout;
    /** @type {?} */
    CardSectionComponent.prototype.lighten;
    /** @type {?} */
    CardSectionComponent.prototype.padding;
    /** @type {?} */
    CardSectionComponent.prototype.elRef;
    /** @type {?} */
    CardSectionComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhcmQtc2VjdGlvbi9jYXJkLXNlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8saUJBQWlCLE1BQU0sMERBQTBELENBQUM7QUFFekY7SUFJMEMsZ0RBQWU7SUFVdkQsOEJBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVY1QixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxZQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBTVEsQ0FBQzs7OztJQUVsQyx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHNKQUE0QztpQkFDN0M7Ozs7Z0JBZG1CLFVBQVU7Z0JBTXJCLGFBQWE7Ozt3QkFVbkIsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQVdSLDJCQUFDO0NBQUEsQUF2QkQsQ0FJMEMsZUFBZSxHQW1CeEQ7U0FuQlksb0JBQW9COzs7SUFDL0IscUNBQXVCOztJQUN2QixzQ0FBd0I7O0lBQ3hCLHVDQUF5Qjs7SUFDekIsc0NBQXdCOztJQUN4QixxQ0FBdUI7O0lBQ3ZCLHNDQUE2Qjs7SUFDN0IsdUNBQXlCOztJQUN6Qix1Q0FBaUI7O0lBR2YscUNBQXdCOztJQUN4Qiw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBDYXJkU2VjdGlvblN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvY2FyZC1zZWN0aW9uL2NhcmQtc2VjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1jYXJkLXNlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1zZWN0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkU2VjdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhcmtlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXZpZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4cGFuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBsYXlvdXQgPSAndmVydGljYWwnO1xuICBASW5wdXQoKSBsaWdodGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZGRpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IENhcmRTZWN0aW9uU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG59XG4iXX0=