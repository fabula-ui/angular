/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content/content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';
export class ContentComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.active = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ContentStyles;
        this.initStyles();
    }
}
ContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-content',
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
ContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ContentComponent.propDecorators = {
    active: [{ type: Input }],
    name: [{ type: Input }],
    scope: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContentComponent.prototype.active;
    /** @type {?} */
    ContentComponent.prototype.name;
    /** @type {?} */
    ContentComponent.prototype.scope;
    /** @type {?} */
    ContentComponent.prototype.contentClass;
    /** @type {?} */
    ContentComponent.prototype.elRef;
    /** @type {?} */
    ContentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxhQUFhLE1BQU0sZ0RBQWdELENBQUM7QUFNM0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQWU7Ozs7O0lBT25ELFlBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBUjVCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFTUyxDQUFDOzs7O0lBRWxDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNkxBQXVDO2FBQ3hDOzs7O1lBZDJCLFVBQVU7WUFNN0IsYUFBYTs7O3FCQVVuQixLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUZOLGtDQUF3Qjs7SUFDeEIsZ0NBQXNCOztJQUN0QixpQ0FBdUI7O0lBRXZCLHdDQUFxQjs7SUFHbkIsaUNBQXdCOztJQUN4Qix5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBDb250ZW50U3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNjb3BlOiBzdHJpbmc7XG5cbiAgY29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IENvbnRlbnRTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==