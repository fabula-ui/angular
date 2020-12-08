/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/inner-icon/inner-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import InnerIconStyles from '@fabula/core/styles/components/inner-icon/inner-icon';
var InnerIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InnerIconComponent, _super);
    function InnerIconComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    InnerIconComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.additionalProps = {
            icon: this.icon,
            parentProps: this.parentProps
        };
        this.styles = InnerIconStyles;
        this.initStyles();
    };
    InnerIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-inner-icon',
                    template: "<span class=\"fab-inner-icon\"></span>"
                }] }
    ];
    /** @nocollapse */
    InnerIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    InnerIconComponent.propDecorators = {
        color: [{ type: Input }],
        icon: [{ type: Input }],
        parentProps: [{ type: Input }]
    };
    return InnerIconComponent;
}(CommonComponent));
export { InnerIconComponent };
if (false) {
    /** @type {?} */
    InnerIconComponent.prototype.color;
    /** @type {?} */
    InnerIconComponent.prototype.icon;
    /** @type {?} */
    InnerIconComponent.prototype.parentProps;
    /** @type {?} */
    InnerIconComponent.prototype.elRef;
    /** @type {?} */
    InnerIconComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbm5lci1pY29uL2lubmVyLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGVBQWUsTUFBTSxzREFBc0QsQ0FBQztBQUVuRjtJQUl3Qyw4Q0FBZTtJQUtuRCw0QkFDVyxLQUFpQixFQUNqQixhQUE0QjtRQUZ2QyxZQUdJLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUZ2QixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUNOLENBQUM7Ozs7SUFFbEMsNENBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDaEMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFyQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGtEQUEwQztpQkFDN0M7Ozs7Z0JBZG1CLFVBQVU7Z0JBTXJCLGFBQWE7Ozt3QkFVakIsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBZVYseUJBQUM7Q0FBQSxBQXRCRCxDQUl3QyxlQUFlLEdBa0J0RDtTQWxCWSxrQkFBa0I7OztJQUMzQixtQ0FBdUI7O0lBQ3ZCLGtDQUFtQjs7SUFDbkIseUNBQTBCOztJQUd0QixtQ0FBd0I7O0lBQ3hCLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBJbm5lckljb25TdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2lubmVyLWljb24vaW5uZXItaWNvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLWlubmVyLWljb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbm5lci1pY29uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbm5lckljb25Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGljb246IGFueTtcbiAgICBASW5wdXQoKSBwYXJlbnRQcm9wczogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFByb3BzID0ge1xuICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuICAgICAgICAgICAgcGFyZW50UHJvcHM6IHRoaXMucGFyZW50UHJvcHNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBJbm5lckljb25TdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cbn1cbiJdfQ==