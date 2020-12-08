/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tag/tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';
/**
 * @record
 */
function Placement() { }
if (false) {
    /** @type {?} */
    Placement.prototype.x;
    /** @type {?} */
    Placement.prototype.y;
}
export class TagComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = false;
        this.clear = false;
        this.faded = false;
        this.glow = false;
        this.invert = false;
        this.outline = false;
        this.rounded = false;
        this.size = 'md';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.styles = TagStyles;
        this.initStyles();
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tag',
                template: "<div class=\"fab-tag\" *ngIf=\"!button && !href\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n\n<button class=\"fab-tag\" *ngIf=\"button\" [attr.data-placement-x]=\"!!placement && placement.x\"\n  [attr.data-placement-y]=\"!!placement && placement.y\" data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tag\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>"
            }] }
];
/** @nocollapse */
TagComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TagComponent.propDecorators = {
    button: [{ type: Input }],
    color: [{ type: Input }],
    clear: [{ type: Input }],
    faded: [{ type: Input }],
    glow: [{ type: Input }],
    href: [{ type: Input }],
    invert: [{ type: Input }],
    link: [{ type: Input }],
    outline: [{ type: Input }],
    placement: [{ type: Input }],
    rel: [{ type: Input }],
    rounded: [{ type: Input }],
    size: [{ type: Input }],
    target: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TagComponent.prototype.button;
    /** @type {?} */
    TagComponent.prototype.color;
    /** @type {?} */
    TagComponent.prototype.clear;
    /** @type {?} */
    TagComponent.prototype.faded;
    /** @type {?} */
    TagComponent.prototype.glow;
    /** @type {?} */
    TagComponent.prototype.href;
    /** @type {?} */
    TagComponent.prototype.invert;
    /** @type {?} */
    TagComponent.prototype.link;
    /** @type {?} */
    TagComponent.prototype.outline;
    /** @type {?} */
    TagComponent.prototype.placement;
    /** @type {?} */
    TagComponent.prototype.rel;
    /** @type {?} */
    TagComponent.prototype.rounded;
    /** @type {?} */
    TagComponent.prototype.size;
    /** @type {?} */
    TagComponent.prototype.target;
    /** @type {?} */
    TagComponent.prototype.inline;
    /** @type {?} */
    TagComponent.prototype.elRef;
    /** @type {?} */
    TagComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sU0FBUyxNQUFNLHdDQUF3QyxDQUFDOzs7O0FBRS9ELHdCQUdDOzs7SUFGQyxzQkFBVTs7SUFDVixzQkFBVTs7QUFPWixNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQWU7Ozs7O0lBa0IvQyxZQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ2pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGdkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQW5CNUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUViLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUdyQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBS21CLENBQUM7Ozs7SUFFbEMsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiwwNEJBQW1DO2FBQ3BDOzs7O1lBbkJtQixVQUFVO1lBTXJCLGFBQWE7OztxQkFlbkIsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztrQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBYk4sOEJBQXdCOztJQUN4Qiw2QkFBdUI7O0lBQ3ZCLDZCQUF1Qjs7SUFDdkIsNkJBQXVCOztJQUN2Qiw0QkFBc0I7O0lBQ3RCLDRCQUFzQjs7SUFDdEIsOEJBQXdCOztJQUN4Qiw0QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsaUNBQThCOztJQUM5QiwyQkFBcUI7O0lBQ3JCLCtCQUF5Qjs7SUFDekIsNEJBQXFCOztJQUNyQiw4QkFBd0I7O0lBRXhCLDhCQUFjOztJQUdaLDZCQUF3Qjs7SUFDeEIscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFRhZ1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvdGFnL3RhZyc7XG5cbmludGVyZmFjZSBQbGFjZW1lbnQge1xuICB4OiBzdHJpbmc7XG4gIHk6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYnV0dG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZhZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdsb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBpbnZlcnQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGluazogc3RyaW5nO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuICBASW5wdXQoKSByZWw6IHN0cmluZztcbiAgQElucHV0KCkgcm91bmRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaXplID0gJ21kJztcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG5cbiAgaW5saW5lID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IFRhZ1N0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19