/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-image/card-image.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';
var CardImageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CardImageComponent, _super);
    function CardImageComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.adaptColor = false;
        _this.cover = false;
        _this.darken = false;
        _this.faded = false;
        _this.icon = {
            name: 'image'
        };
        _this.lighten = false;
        return _this;
    }
    /**
     * @return {?}
     */
    CardImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = CardImageStyles;
        this.initStyles();
    };
    CardImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-card-image',
                    template: "<div class=\"fab-card-image\" [attr.data-layout]=\"layout\"\n  data-fab-component=\"cardImage\">\n  <fab-icon [props]=\"icon\"></fab-icon>\n  <img [src]=\"src\" *ngIf=\"src\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CardImageComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    CardImageComponent.propDecorators = {
        adaptColor: [{ type: Input }],
        color: [{ type: Input }],
        cover: [{ type: Input }],
        darken: [{ type: Input }],
        faded: [{ type: Input }],
        height: [{ type: Input }],
        icon: [{ type: Input }],
        layout: [{ type: Input }],
        lighten: [{ type: Input }],
        src: [{ type: Input }],
        width: [{ type: Input }]
    };
    return CardImageComponent;
}(CommonComponent));
export { CardImageComponent };
if (false) {
    /** @type {?} */
    CardImageComponent.prototype.adaptColor;
    /** @type {?} */
    CardImageComponent.prototype.color;
    /** @type {?} */
    CardImageComponent.prototype.cover;
    /** @type {?} */
    CardImageComponent.prototype.darken;
    /** @type {?} */
    CardImageComponent.prototype.faded;
    /** @type {?} */
    CardImageComponent.prototype.height;
    /** @type {?} */
    CardImageComponent.prototype.icon;
    /** @type {?} */
    CardImageComponent.prototype.layout;
    /** @type {?} */
    CardImageComponent.prototype.lighten;
    /** @type {?} */
    CardImageComponent.prototype.src;
    /** @type {?} */
    CardImageComponent.prototype.width;
    /** @type {?} */
    CardImageComponent.prototype.elRef;
    /** @type {?} */
    CardImageComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXJkLWltYWdlL2NhcmQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQU1qRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sZUFBZSxNQUFNLHNEQUFzRCxDQUFDO0FBRW5GO0lBSXdDLDhDQUFlO0lBZXJELDRCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFoQjVCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLFdBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLFVBQUksR0FBUztZQUNwQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFFTyxhQUFPLEdBQUcsS0FBSyxDQUFDOztJQU9RLENBQUM7Ozs7SUFFbEMscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ09BQTBDO2lCQUMzQzs7OztnQkFqQm1CLFVBQVU7Z0JBU3JCLGFBQWE7Ozs2QkFVbkIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFHTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQVdSLHlCQUFDO0NBQUEsQUE1QkQsQ0FJd0MsZUFBZSxHQXdCdEQ7U0F4Qlksa0JBQWtCOzs7SUFDN0Isd0NBQTRCOztJQUM1QixtQ0FBdUI7O0lBQ3ZCLG1DQUF1Qjs7SUFDdkIsb0NBQXdCOztJQUN4QixtQ0FBdUI7O0lBQ3ZCLG9DQUFxQjs7SUFDckIsa0NBRUU7O0lBQ0Ysb0NBQXdCOztJQUN4QixxQ0FBeUI7O0lBQ3pCLGlDQUFxQjs7SUFDckIsbUNBQW9COztJQUdsQixtQ0FBd0I7O0lBQ3hCLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24ubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ2FyZEltYWdlU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9jYXJkLWltYWdlL2NhcmQtaW1hZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItY2FyZC1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWltYWdlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhZGFwdENvbG9yID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRhcmtlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBoZWlnaHQ6IGFueTtcbiAgQElucHV0KCkgaWNvbjogSWNvbiA9IHtcbiAgICBuYW1lOiAnaW1hZ2UnXG4gIH07XG4gIEBJbnB1dCgpIGxheW91dDogc3RyaW5nO1xuICBASW5wdXQoKSBsaWdodGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSB3aWR0aDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBDYXJkSW1hZ2VTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==