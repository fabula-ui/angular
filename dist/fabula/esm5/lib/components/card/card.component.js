/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card/card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
// Components
import { CardImageComponent } from '../card-image/card-image.component';
import { CardSectionComponent } from '../card-section/card-section.component';
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CardStyles from '@fabula/core/styles/components/card/card';
var CardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CardComponent, _super);
    function CardComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.glow = false;
        _this.layout = 'v';
        _this.padding = false;
        return _this;
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cardImageComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            child.layout = _this.layout;
            child.ngOnInit();
        }));
        this.cardSectionComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            child.layout = _this.layout;
            child.ngOnInit();
        }));
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = CardStyles;
        this.initStyles();
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-card',
                    template: "<div class=\"fab-card\" data-fab-component=\"card\">\n    <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CardComponent.propDecorators = {
        cardImageComponents: [{ type: ContentChildren, args: [CardImageComponent,] }],
        cardSectionComponents: [{ type: ContentChildren, args: [CardSectionComponent,] }],
        color: [{ type: Input }],
        glow: [{ type: Input }],
        layout: [{ type: Input }],
        padding: [{ type: Input }]
    };
    return CardComponent;
}(CommonComponent));
export { CardComponent };
if (false) {
    /** @type {?} */
    CardComponent.prototype.cardImageComponents;
    /** @type {?} */
    CardComponent.prototype.cardSectionComponents;
    /** @type {?} */
    CardComponent.prototype.color;
    /** @type {?} */
    CardComponent.prototype.glow;
    /** @type {?} */
    CardComponent.prototype.layout;
    /** @type {?} */
    CardComponent.prototype.padding;
    /** @type {?} */
    CardComponent.prototype.elRef;
    /** @type {?} */
    CardComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxlQUFlLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sVUFBVSxNQUFNLDBDQUEwQyxDQUFDO0FBRWxFO0lBSW1DLHlDQUFlO0lBU2hELHVCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFONUIsVUFBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixhQUFPLEdBQUcsS0FBSyxDQUFDOztJQUtRLENBQUM7Ozs7SUFFbEMsdUNBQWU7OztJQUFmO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBeUI7WUFDekQsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUEyQjtZQUM3RCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix5R0FBb0M7aUJBQ3JDOzs7O2dCQWhCbUIsVUFBVTtnQkFRckIsYUFBYTs7O3NDQVVuQixlQUFlLFNBQUMsa0JBQWtCO3dDQUNsQyxlQUFlLFNBQUMsb0JBQW9CO3dCQUVwQyxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQXVCUixvQkFBQztDQUFBLEFBbENELENBSW1DLGVBQWUsR0E4QmpEO1NBOUJZLGFBQWE7OztJQUN4Qiw0Q0FBd0Y7O0lBQ3hGLDhDQUE4Rjs7SUFFOUYsOEJBQXVCOztJQUN2Qiw2QkFBc0I7O0lBQ3RCLCtCQUFzQjs7SUFDdEIsZ0NBQXlCOztJQUd2Qiw4QkFBd0I7O0lBQ3hCLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ2FyZEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FyZC1pbWFnZS9jYXJkLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NhcmQtc2VjdGlvbi9jYXJkLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ2FyZFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvY2FyZC9jYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKENhcmRJbWFnZUNvbXBvbmVudCkgY2FyZEltYWdlQ29tcG9uZW50czogUXVlcnlMaXN0PENhcmRJbWFnZUNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGRyZW4oQ2FyZFNlY3Rpb25Db21wb25lbnQpIGNhcmRTZWN0aW9uQ29tcG9uZW50czogUXVlcnlMaXN0PENhcmRTZWN0aW9uQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBnbG93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxheW91dCA9ICd2JztcbiAgQElucHV0KCkgcGFkZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2FyZEltYWdlQ29tcG9uZW50cy5mb3JFYWNoKChjaGlsZDogQ2FyZEltYWdlQ29tcG9uZW50KSA9PiB7XG4gICAgICBjaGlsZC5sYXlvdXQgPSB0aGlzLmxheW91dDtcbiAgICAgIGNoaWxkLm5nT25Jbml0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNhcmRTZWN0aW9uQ29tcG9uZW50cy5mb3JFYWNoKChjaGlsZDogQ2FyZFNlY3Rpb25Db21wb25lbnQpID0+IHtcbiAgICAgIGNoaWxkLmxheW91dCA9IHRoaXMubGF5b3V0O1xuICAgICAgY2hpbGQubmdPbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQ2FyZFN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19