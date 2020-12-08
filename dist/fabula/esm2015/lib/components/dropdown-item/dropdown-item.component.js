/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-item/dropdown-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';
export class DropdownItemComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = false;
        this.clickToClose = false;
        this.invert = false;
        this.props = { button: false };
        this.target = '_blank';
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.props && this.props.clickToClose || this.clickToClose) {
            this.button = true;
            this.props.button = true;
        }
        this.styles = DropdownItemStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @return {?}
     */
    handleClick() {
        this.clicked.emit();
    }
}
DropdownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-item',
                template: "<a class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</a>\n\n<button class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" (click)=\"handleClick()\"\n  *ngIf=\"(button || props.button) && !href && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</button>\n\n<div class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" *ngIf=\"!button && !href && !props.button && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
DropdownItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
DropdownItemComponent.propDecorators = {
    button: [{ type: Input }],
    color: [{ type: Input }],
    clickToClose: [{ type: Input }],
    href: [{ type: Input }],
    invert: [{ type: Input }],
    label: [{ type: Input }],
    parentColor: [{ type: Input }],
    props: [{ type: Input }],
    rel: [{ type: Input }],
    size: [{ type: Input }],
    target: [{ type: Input }],
    clicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DropdownItemComponent.prototype.button;
    /** @type {?} */
    DropdownItemComponent.prototype.color;
    /** @type {?} */
    DropdownItemComponent.prototype.clickToClose;
    /** @type {?} */
    DropdownItemComponent.prototype.href;
    /** @type {?} */
    DropdownItemComponent.prototype.invert;
    /** @type {?} */
    DropdownItemComponent.prototype.label;
    /** @type {?} */
    DropdownItemComponent.prototype.parentColor;
    /** @type {?} */
    DropdownItemComponent.prototype.props;
    /** @type {?} */
    DropdownItemComponent.prototype.rel;
    /** @type {?} */
    DropdownItemComponent.prototype.size;
    /** @type {?} */
    DropdownItemComponent.prototype.target;
    /** @type {?} */
    DropdownItemComponent.prototype.clicked;
    /** @type {?} */
    DropdownItemComponent.prototype.elRef;
    /** @type {?} */
    DropdownItemComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVILFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7O0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGtCQUFrQixNQUFNLDREQUE0RCxDQUFDO0FBTzVGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlOzs7OztJQWV0RCxZQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGckIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWhCOUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixVQUFLLEdBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFHL0IsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUVqQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtOLENBQUM7Ozs7SUFFbEMsZUFBZTtRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBR0QsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBdENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUU3Qix1eUNBQTZDOzthQUNoRDs7OztZQW5CRyxVQUFVO1lBVUwsYUFBYTs7O3FCQVdqQixLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBRUwsTUFBTTs7OztJQVpQLHVDQUF3Qjs7SUFDeEIsc0NBQXVCOztJQUN2Qiw2Q0FBOEI7O0lBQzlCLHFDQUFzQjs7SUFDdEIsdUNBQXdCOztJQUN4QixzQ0FBdUI7O0lBQ3ZCLDRDQUE2Qjs7SUFDN0Isc0NBQXdDOztJQUN4QyxvQ0FBcUI7O0lBQ3JCLHFDQUFzQjs7SUFDdEIsdUNBQTJCOztJQUUzQix3Q0FBdUM7O0lBR25DLHNDQUF3Qjs7SUFDeEIsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgRHJvcGRvd25JdGVtU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1kcm9wZG93bi1pdGVtJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkl0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBidXR0b24gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsaWNrVG9DbG9zZSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbnZlcnQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBhcmVudENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHJvcHM6IGFueSA9IHsgYnV0dG9uOiBmYWxzZSB9O1xuICAgIEBJbnB1dCgpIHJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0YXJnZXQgPSAnX2JsYW5rJztcblxuICAgIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMuY2xpY2tUb0Nsb3NlIHx8IHRoaXMuY2xpY2tUb0Nsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmJ1dHRvbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0eWxlcyA9IERyb3Bkb3duSXRlbVN0eWxlcztcbiAgICAgICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kc1xuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLmNsaWNrZWQuZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==