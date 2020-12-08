/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/inner-icon/inner-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import InnerIconStyles from '@fabula/core/styles/components/inner-icon/inner-icon';
export class InnerIconComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.additionalProps = {
            icon: this.icon,
            parentProps: this.parentProps
        };
        this.styles = InnerIconStyles;
        this.initStyles();
    }
}
InnerIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-inner-icon',
                template: "<span class=\"fab-inner-icon\"></span>"
            }] }
];
/** @nocollapse */
InnerIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
InnerIconComponent.propDecorators = {
    color: [{ type: Input }],
    icon: [{ type: Input }],
    parentProps: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbm5lci1pY29uL2lubmVyLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sZUFBZSxNQUFNLHNEQUFzRCxDQUFDO0FBTW5GLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlOzs7OztJQUtuRCxZQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGckIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNOLENBQUM7Ozs7SUFFbEMsZUFBZTtRQUNYLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBckJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixrREFBMEM7YUFDN0M7Ozs7WUFkbUIsVUFBVTtZQU1yQixhQUFhOzs7b0JBVWpCLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBRk4sbUNBQXVCOztJQUN2QixrQ0FBbUI7O0lBQ25CLHlDQUEwQjs7SUFHdEIsbUNBQXdCOztJQUN4QiwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgSW5uZXJJY29uU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9pbm5lci1pY29uL2lubmVyLWljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1pbm5lci1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5uZXItaWNvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5uZXJJY29uQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBpY29uOiBhbnk7XG4gICAgQElucHV0KCkgcGFyZW50UHJvcHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcbiAgICAgICAgICAgIHBhcmVudFByb3BzOiB0aGlzLnBhcmVudFByb3BzXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGVzID0gSW5uZXJJY29uU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgICB9XG59XG4iXX0=