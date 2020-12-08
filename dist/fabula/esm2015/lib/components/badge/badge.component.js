/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/badge/badge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import BadgeStyles from '@fabula/core/styles/components/badge/badge';
export class BadgeComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.circle = false;
        this.clear = false;
        this.darken = false;
        this.faded = false;
        this.glow = false;
        this.invert = false;
        this.label = '';
        this.lighten = false;
        this.outline = false;
        this.placement = '';
        this.placementX = '';
        this.placementY = '';
        this.rounded = false;
        this.size = 'md';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = BadgeStyles;
        this.initStyles();
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-badge',
                template: "<div class=\"fab-badge-wrapper\" [attr.data-has-placement]=\"!!placement\" data-fab-wrapper=\"badge\">\n  <div class=\"fab-badge\" data-fab-component=\"badge\">\n    <span *ngIf=\"label\">{{label}}</span>\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
BadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxXQUFXLE1BQU0sNENBQTRDLENBQUM7QUFPckUsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUFlOzs7OztJQW1CakQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFwQjVCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFFckIsV0FBTSxHQUFHLElBQUksQ0FBQztJQUttQixDQUFDOzs7O0lBRWxDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseVFBQXFDOzthQUV0Qzs7OztZQWZrQyxVQUFVO1lBTXBDLGFBQWE7OztxQkFXbkIsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFkTixnQ0FBd0I7O0lBQ3hCLCtCQUF1Qjs7SUFDdkIsK0JBQXVCOztJQUN2QixnQ0FBd0I7O0lBQ3hCLCtCQUF1Qjs7SUFDdkIsOEJBQXNCOztJQUN0QixnQ0FBd0I7O0lBQ3hCLCtCQUFvQjs7SUFDcEIsaUNBQXlCOztJQUN6QixpQ0FBeUI7O0lBQ3pCLG1DQUF3Qjs7SUFDeEIsb0NBQXlCOztJQUN6QixvQ0FBeUI7O0lBQ3pCLGlDQUF5Qjs7SUFDekIsOEJBQXFCOztJQUVyQixnQ0FBYzs7SUFHWiwrQkFBd0I7O0lBQ3hCLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IEJhZGdlU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9iYWRnZS9iYWRnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhZGdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaXJjbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZGFya2VuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZhZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdsb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgaW52ZXJ0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGxpZ2h0ZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGFjZW1lbnQgPSAnJztcbiAgQElucHV0KCkgcGxhY2VtZW50WCA9ICcnO1xuICBASW5wdXQoKSBwbGFjZW1lbnRZID0gJyc7XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZSA9ICdtZCc7XG5cbiAgaW5saW5lID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQmFkZ2VTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==