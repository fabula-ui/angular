/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/avatar/avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Methods
import getInitials from '@fabula/core/methods/misc/getInitials';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';
var AvatarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AvatarComponent, _super);
    function AvatarComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.color = '';
        _this.darken = false;
        _this.faded = false;
        _this.icon = {
            name: 'image'
        };
        _this.lighten = false;
        _this.rounded = false;
        _this.showInitials = '';
        _this.size = 'md';
        _this.src = '';
        _this.inline = true;
        return _this;
    }
    /**
     * @return {?}
     */
    AvatarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = AvatarStyles;
        this.initStyles();
    };
    Object.defineProperty(AvatarComponent.prototype, "initials", {
        // Getters
        get: 
        // Getters
        /**
         * @return {?}
         */
        function () {
            return getInitials(this.showInitials);
        },
        enumerable: true,
        configurable: true
    });
    AvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-avatar',
                    template: "<div class=\"fab-avatar-wrapper\" data-fab-wrapper=\"avatar\" [attr.data-rounded]=\"rounded\">\n  <div class=\"fab-avatar\" [attr.data-color]=\"color\" [attr.data-rounded]=\"rounded\" [attr.data-size]=\"size\">\n    <fab-icon *ngIf=\"!showInitials && icon\" [props]=\"icon\"></fab-icon>\n    <span class=\"fab-avatar__initials\" *ngIf=\"showInitials\">{{initials}}</span>\n    <div class=\"fab-avatar__image\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\" *ngIf=\"src\"></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    AvatarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    AvatarComponent.propDecorators = {
        color: [{ type: Input }],
        darken: [{ type: Input }],
        faded: [{ type: Input }],
        icon: [{ type: Input }],
        lighten: [{ type: Input }],
        rounded: [{ type: Input }],
        showInitials: [{ type: Input }],
        size: [{ type: Input }],
        src: [{ type: Input }]
    };
    return AvatarComponent;
}(CommonComponent));
export { AvatarComponent };
if (false) {
    /** @type {?} */
    AvatarComponent.prototype.color;
    /** @type {?} */
    AvatarComponent.prototype.darken;
    /** @type {?} */
    AvatarComponent.prototype.faded;
    /** @type {?} */
    AvatarComponent.prototype.icon;
    /** @type {?} */
    AvatarComponent.prototype.lighten;
    /** @type {?} */
    AvatarComponent.prototype.rounded;
    /** @type {?} */
    AvatarComponent.prototype.showInitials;
    /** @type {?} */
    AvatarComponent.prototype.size;
    /** @type {?} */
    AvatarComponent.prototype.src;
    /** @type {?} */
    AvatarComponent.prototype.inline;
    /** @type {?} */
    AvatarComponent.prototype.elRef;
    /** @type {?} */
    AvatarComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLFdBQVcsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFNaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLFlBQVksTUFBTSw4Q0FBOEMsQ0FBQztBQUV4RTtJQUtxQywyQ0FBZTtJQWVsRCx5QkFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUZyQyxZQUdNLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUYzQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBaEI1QixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxVQUFJLEdBQVM7WUFDcEIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ08sYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixTQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFlBQU0sR0FBRyxJQUFJLENBQUM7O0lBS3FCLENBQUM7Ozs7SUFFcEMsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHRCxzQkFBSSxxQ0FBUTtRQURaLFVBQVU7Ozs7OztRQUNWO1lBQ0UsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUV0QixraUJBQXNDOztpQkFDdkM7Ozs7Z0JBckJtQixVQUFVO2dCQVlyQixhQUFhOzs7d0JBV25CLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBR0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLOztJQWtCUixzQkFBQztDQUFBLEFBbENELENBS3FDLGVBQWUsR0E2Qm5EO1NBN0JZLGVBQWU7OztJQUMxQixnQ0FBb0I7O0lBQ3BCLGlDQUF3Qjs7SUFDeEIsZ0NBQXVCOztJQUN2QiwrQkFFRTs7SUFDRixrQ0FBeUI7O0lBQ3pCLGtDQUF5Qjs7SUFDekIsdUNBQTJCOztJQUMzQiwrQkFBcUI7O0lBQ3JCLDhCQUFrQjs7SUFFbEIsaUNBQWM7O0lBR1osZ0NBQXdCOztJQUN4Qix3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIE1ldGhvZHNcbmltcG9ydCBnZXRJbml0aWFscyBmcm9tICdAZmFidWxhL2NvcmUvbWV0aG9kcy9taXNjL2dldEluaXRpYWxzJztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24ubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQXZhdGFyU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLWF2YXRhcicsXG4gIHN0eWxlVXJsczogWycuL2F2YXRhci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvciA9ICcnO1xuICBASW5wdXQoKSBkYXJrZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmFkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogSWNvbiA9IHtcbiAgICBuYW1lOiAnaW1hZ2UnXG4gIH07XG4gIEBJbnB1dCgpIGxpZ2h0ZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcm91bmRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93SW5pdGlhbHMgPSAnJztcbiAgQElucHV0KCkgc2l6ZSA9ICdtZCc7XG4gIEBJbnB1dCgpIHNyYyA9ICcnO1xuXG4gIGlubGluZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQXZhdGFyU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBnZXQgaW5pdGlhbHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0SW5pdGlhbHModGhpcy5zaG93SW5pdGlhbHMpO1xuICB9XG59XG4iXX0=