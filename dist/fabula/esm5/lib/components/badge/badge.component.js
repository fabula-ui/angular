/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/badge/badge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import BadgeStyles from '@fabula/core/styles/components/badge/badge';
var BadgeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BadgeComponent, _super);
    function BadgeComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.circle = false;
        _this.clear = false;
        _this.darken = false;
        _this.faded = false;
        _this.glow = false;
        _this.invert = false;
        _this.label = '';
        _this.lighten = false;
        _this.outline = false;
        _this.placement = '';
        _this.placementX = '';
        _this.placementY = '';
        _this.rounded = false;
        _this.size = 'md';
        _this.inline = true;
        return _this;
    }
    /**
     * @return {?}
     */
    BadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = BadgeStyles;
        this.initStyles();
    };
    BadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-badge',
                    template: "<div class=\"fab-badge-wrapper\" [attr.data-has-placement]=\"!!placement\" data-fab-wrapper=\"badge\">\n  <div class=\"fab-badge\" data-fab-component=\"badge\">\n    <span *ngIf=\"label\">{{label}}</span>\n    <ng-content></ng-content>\n  </div>\n</div>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    BadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    BadgeComponent.propDecorators = {
        circle: [{ type: Input }],
        clear: [{ type: Input }],
        color: [{ type: Input }],
        darken: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        invert: [{ type: Input }],
        label: [{ type: Input }],
        lighten: [{ type: Input }],
        outline: [{ type: Input }],
        placement: [{ type: Input }],
        placementX: [{ type: Input }],
        placementY: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }]
    };
    return BadgeComponent;
}(CommonComponent));
export { BadgeComponent };
if (false) {
    /** @type {?} */
    BadgeComponent.prototype.circle;
    /** @type {?} */
    BadgeComponent.prototype.clear;
    /** @type {?} */
    BadgeComponent.prototype.color;
    /** @type {?} */
    BadgeComponent.prototype.darken;
    /** @type {?} */
    BadgeComponent.prototype.faded;
    /** @type {?} */
    BadgeComponent.prototype.glow;
    /** @type {?} */
    BadgeComponent.prototype.invert;
    /** @type {?} */
    BadgeComponent.prototype.label;
    /** @type {?} */
    BadgeComponent.prototype.lighten;
    /** @type {?} */
    BadgeComponent.prototype.outline;
    /** @type {?} */
    BadgeComponent.prototype.placement;
    /** @type {?} */
    BadgeComponent.prototype.placementX;
    /** @type {?} */
    BadgeComponent.prototype.placementY;
    /** @type {?} */
    BadgeComponent.prototype.rounded;
    /** @type {?} */
    BadgeComponent.prototype.size;
    /** @type {?} */
    BadgeComponent.prototype.inline;
    /** @type {?} */
    BadgeComponent.prototype.elRef;
    /** @type {?} */
    BadgeComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sV0FBVyxNQUFNLDRDQUE0QyxDQUFDO0FBRXJFO0lBS29DLDBDQUFlO0lBbUJqRCx3QkFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUZyQyxZQUdJLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUZ6QixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBcEI1QixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVkLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsVUFBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFckIsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUFLbUIsQ0FBQzs7OztJQUVsQyxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseVFBQXFDOztpQkFFdEM7Ozs7Z0JBZmtDLFVBQVU7Z0JBTXBDLGFBQWE7Ozt5QkFXbkIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBYVIscUJBQUM7Q0FBQSxBQWpDRCxDQUtvQyxlQUFlLEdBNEJsRDtTQTVCWSxjQUFjOzs7SUFDekIsZ0NBQXdCOztJQUN4QiwrQkFBdUI7O0lBQ3ZCLCtCQUF1Qjs7SUFDdkIsZ0NBQXdCOztJQUN4QiwrQkFBdUI7O0lBQ3ZCLDhCQUFzQjs7SUFDdEIsZ0NBQXdCOztJQUN4QiwrQkFBb0I7O0lBQ3BCLGlDQUF5Qjs7SUFDekIsaUNBQXlCOztJQUN6QixtQ0FBd0I7O0lBQ3hCLG9DQUF5Qjs7SUFDekIsb0NBQXlCOztJQUN6QixpQ0FBeUI7O0lBQ3pCLDhCQUFxQjs7SUFFckIsZ0NBQWM7O0lBR1osK0JBQXdCOztJQUN4Qix1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBCYWRnZVN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2lyY2xlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhcmtlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBnbG93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGludmVydCA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBsaWdodGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2VtZW50ID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlbWVudFggPSAnJztcbiAgQElucHV0KCkgcGxhY2VtZW50WSA9ICcnO1xuICBASW5wdXQoKSByb3VuZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemUgPSAnbWQnO1xuXG4gIGlubGluZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IEJhZGdlU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG59XG4iXX0=