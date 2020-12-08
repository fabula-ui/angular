/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-image/card-image.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';
export class CardImageComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.adaptColor = false;
        this.cover = false;
        this.darken = false;
        this.faded = false;
        this.icon = {
            name: 'image'
        };
        this.lighten = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = CardImageStyles;
        this.initStyles();
    }
}
CardImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-card-image',
                template: "<div class=\"fab-card-image\" [attr.data-layout]=\"layout\"\n  data-fab-component=\"cardImage\">\n  <fab-icon [props]=\"icon\"></fab-icon>\n  <img [src]=\"src\" *ngIf=\"src\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
CardImageComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXJkLWltYWdlL2NhcmQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBTWpGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxlQUFlLE1BQU0sc0RBQXNELENBQUM7QUFNbkYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7Ozs7O0lBZXJELFlBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBaEI1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUVkLFNBQUksR0FBUztZQUNwQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFFTyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBT1EsQ0FBQzs7OztJQUVsQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZ09BQTBDO2FBQzNDOzs7O1lBakJtQixVQUFVO1lBU3JCLGFBQWE7Ozt5QkFVbkIsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFHTCxLQUFLO3NCQUNMLEtBQUs7a0JBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBWk4sd0NBQTRCOztJQUM1QixtQ0FBdUI7O0lBQ3ZCLG1DQUF1Qjs7SUFDdkIsb0NBQXdCOztJQUN4QixtQ0FBdUI7O0lBQ3ZCLG9DQUFxQjs7SUFDckIsa0NBRUU7O0lBQ0Ysb0NBQXdCOztJQUN4QixxQ0FBeUI7O0lBQ3pCLGlDQUFxQjs7SUFDckIsbUNBQW9COztJQUdsQixtQ0FBd0I7O0lBQ3hCLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ljb24ubW9kZWwnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ2FyZEltYWdlU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9jYXJkLWltYWdlL2NhcmQtaW1hZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItY2FyZC1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWltYWdlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhZGFwdENvbG9yID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRhcmtlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmYWRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBoZWlnaHQ6IGFueTtcbiAgQElucHV0KCkgaWNvbjogSWNvbiA9IHtcbiAgICBuYW1lOiAnaW1hZ2UnXG4gIH07XG4gIEBJbnB1dCgpIGxheW91dDogc3RyaW5nO1xuICBASW5wdXQoKSBsaWdodGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSB3aWR0aDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBDYXJkSW1hZ2VTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==