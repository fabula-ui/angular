/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-section/card-section.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';
export class CardSectionComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.darken = false;
        this.expand = false;
        this.faded = false;
        this.layout = 'vertical';
        this.lighten = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = CardSectionStyles;
        this.initStyles();
    }
}
CardSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-card-section',
                template: "<div class=\"fab-card-section\" [attr.data-layout]=\"layout\" data-fab-component=\"cardSection\">\n  <ng-content></ng-content>\n</div>\n\n"
            }] }
];
/** @nocollapse */
CardSectionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhcmQtc2VjdGlvbi9jYXJkLXNlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxpQkFBaUIsTUFBTSwwREFBMEQsQ0FBQztBQU16RixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTs7Ozs7SUFVdkQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFWNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBTVEsQ0FBQzs7OztJQUVsQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixzSkFBNEM7YUFDN0M7Ozs7WUFkbUIsVUFBVTtZQU1yQixhQUFhOzs7b0JBVW5CLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQVBOLHFDQUF1Qjs7SUFDdkIsc0NBQXdCOztJQUN4Qix1Q0FBeUI7O0lBQ3pCLHNDQUF3Qjs7SUFDeEIscUNBQXVCOztJQUN2QixzQ0FBNkI7O0lBQzdCLHVDQUF5Qjs7SUFDekIsdUNBQWlCOztJQUdmLHFDQUF3Qjs7SUFDeEIsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ2FyZFNlY3Rpb25TdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2NhcmQtc2VjdGlvbi9jYXJkLXNlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItY2FyZC1zZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtc2VjdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFNlY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBkYXJrZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGl2aWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBleHBhbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgZmFkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGF5b3V0ID0gJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgbGlnaHRlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWRkaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBDYXJkU2VjdGlvblN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19