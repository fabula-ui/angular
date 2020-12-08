/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/link/link.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';
var LinkComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LinkComponent, _super);
    function LinkComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.target = '_blank';
        _this.underline = true;
        return _this;
    }
    /**
     * @return {?}
     */
    LinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = LinkStyles;
        this.initStyles();
    };
    LinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-link',
                    template: "<a class=\"fab-link\" [attr.data-size]=\"size\" [attr.href]=\"props.href || href\" [attr.rel]=\"rel\" [attr.target]=\"target\" data-fab-component=\"link\">\n    <ng-container *ngIf=\"props.label || label\">{{props.label || label}}</ng-container>\n    <ng-content></ng-content>\n</a>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    LinkComponent.propDecorators = {
        color: [{ type: Input }],
        href: [{ type: Input }],
        label: [{ type: Input }],
        props: [{ type: Input }],
        rel: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }],
        underline: [{ type: Input }]
    };
    return LinkComponent;
}(CommonComponent));
export { LinkComponent };
if (false) {
    /** @type {?} */
    LinkComponent.prototype.color;
    /** @type {?} */
    LinkComponent.prototype.href;
    /** @type {?} */
    LinkComponent.prototype.label;
    /** @type {?} */
    LinkComponent.prototype.props;
    /** @type {?} */
    LinkComponent.prototype.rel;
    /** @type {?} */
    LinkComponent.prototype.size;
    /** @type {?} */
    LinkComponent.prototype.target;
    /** @type {?} */
    LinkComponent.prototype.underline;
    /** @type {?} */
    LinkComponent.prototype.elRef;
    /** @type {?} */
    LinkComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saW5rL2xpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sVUFBVSxNQUFNLDBDQUEwQyxDQUFDO0FBRWxFO0lBS21DLHlDQUFlO0lBVTlDLHVCQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnZDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnZCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFMOUIsWUFBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQUtPLENBQUM7Ozs7SUFFbEMsZ0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQXZCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBRXBCLHNTQUFvQzs7aUJBQ3ZDOzs7O2dCQWYyQixVQUFVO2dCQU03QixhQUFhOzs7d0JBV2pCLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFXVixvQkFBQztDQUFBLEFBeEJELENBS21DLGVBQWUsR0FtQmpEO1NBbkJZLGFBQWE7OztJQUN0Qiw4QkFBdUI7O0lBQ3ZCLDZCQUFzQjs7SUFDdEIsOEJBQXVCOztJQUN2Qiw4QkFBb0I7O0lBQ3BCLDRCQUFxQjs7SUFDckIsNkJBQXNCOztJQUN0QiwrQkFBMkI7O0lBQzNCLGtDQUEwQjs7SUFHdEIsOEJBQXdCOztJQUN4QixzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBMaW5rU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9saW5rL2xpbmsnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1saW5rJyxcbiAgICBzdHlsZVVybHM6IFsnLi9saW5rLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpbmsuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHJvcHM6IGFueTtcbiAgICBASW5wdXQoKSByZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgQElucHV0KCkgdW5kZXJsaW5lID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gTGlua1N0eWxlcztcbiAgICAgICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gICAgfVxufVxuIl19