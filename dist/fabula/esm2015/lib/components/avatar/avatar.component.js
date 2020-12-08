/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/avatar/avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Methods
import getInitials from '@fabula/core/methods/misc/getInitials';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import AvatarStyles from '@fabula/core/styles/components/avatar/avatar';
export class AvatarComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.color = '';
        this.darken = false;
        this.faded = false;
        this.icon = {
            name: 'image'
        };
        this.lighten = false;
        this.rounded = false;
        this.showInitials = '';
        this.size = 'md';
        this.src = '';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = AvatarStyles;
        this.initStyles();
    }
    // Getters
    /**
     * @return {?}
     */
    get initials() {
        return getInitials(this.showInitials);
    }
}
AvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-avatar',
                template: "<div class=\"fab-avatar-wrapper\" data-fab-wrapper=\"avatar\" [attr.data-rounded]=\"rounded\">\n  <div class=\"fab-avatar\" [attr.data-color]=\"color\" [attr.data-rounded]=\"rounded\" [attr.data-size]=\"size\">\n    <fab-icon *ngIf=\"!showInitials && icon\" [props]=\"icon\"></fab-icon>\n    <span class=\"fab-avatar__initials\" *ngIf=\"showInitials\">{{initials}}</span>\n    <div class=\"fab-avatar__image\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\" *ngIf=\"src\"></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
AvatarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sV0FBVyxNQUFNLHVDQUF1QyxDQUFDOztBQU1oRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sWUFBWSxNQUFNLDhDQUE4QyxDQUFDO0FBT3hFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQWU7Ozs7O0lBZWxELFlBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFDL0IsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ6QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBaEI1QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxTQUFJLEdBQVM7WUFDcEIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBQ08sWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFLcUIsQ0FBQzs7OztJQUVwQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBR0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBRXRCLGtpQkFBc0M7O2FBQ3ZDOzs7O1lBckJtQixVQUFVO1lBWXJCLGFBQWE7OztvQkFXbkIsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFHTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7Ozs7SUFWTixnQ0FBb0I7O0lBQ3BCLGlDQUF3Qjs7SUFDeEIsZ0NBQXVCOztJQUN2QiwrQkFFRTs7SUFDRixrQ0FBeUI7O0lBQ3pCLGtDQUF5Qjs7SUFDekIsdUNBQTJCOztJQUMzQiwrQkFBcUI7O0lBQ3JCLDhCQUFrQjs7SUFFbEIsaUNBQWM7O0lBR1osZ0NBQXdCOztJQUN4Qix3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIE1ldGhvZHNcbmltcG9ydCBnZXRJbml0aWFscyBmcm9tICdAZmFidWxhL2NvcmUvbWV0aG9kcy9taXNjL2dldEluaXRpYWxzJztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24ubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQXZhdGFyU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLWF2YXRhcicsXG4gIHN0eWxlVXJsczogWycuL2F2YXRhci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvciA9ICcnO1xuICBASW5wdXQoKSBkYXJrZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmFkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbjogSWNvbiA9IHtcbiAgICBuYW1lOiAnaW1hZ2UnXG4gIH07XG4gIEBJbnB1dCgpIGxpZ2h0ZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcm91bmRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93SW5pdGlhbHMgPSAnJztcbiAgQElucHV0KCkgc2l6ZSA9ICdtZCc7XG4gIEBJbnB1dCgpIHNyYyA9ICcnO1xuXG4gIGlubGluZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQXZhdGFyU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBnZXQgaW5pdGlhbHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0SW5pdGlhbHModGhpcy5zaG93SW5pdGlhbHMpO1xuICB9XG59XG4iXX0=