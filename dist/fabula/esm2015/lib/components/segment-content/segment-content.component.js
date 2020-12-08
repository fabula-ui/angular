/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segment-content/segment-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
// Components
import { ContentComponent } from '../content/content.component';
// Services
import { FabulaService } from '../../services/fabula.service';
export class SegmentContentComponent extends ContentComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.contentClass = 'fab-segment-content';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
}
SegmentContentComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                selector: 'fab-segment-content'
            }] }
];
/** @nocollapse */
SegmentContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
if (false) {
    /** @type {?} */
    SegmentContentComponent.prototype.elRef;
    /** @type {?} */
    SegmentContentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlZ21lbnQtY29udGVudC9zZWdtZW50LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUdoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFNOUQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFnQjs7Ozs7SUFDM0QsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUVuQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSHJCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFHbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsNkxBQWdEO2dCQUNoRCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7O1lBWG1CLFVBQVU7WUFNckIsYUFBYTs7OztJQVFsQix3Q0FBd0I7O0lBQ3hCLGdEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4uL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHNlbGVjdG9yOiAnZmFiLXNlZ21lbnQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudENvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTtcbiAgICB0aGlzLmNvbnRlbnRDbGFzcyA9ICdmYWItc2VnbWVudC1jb250ZW50JztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==