/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segment/segment.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
// Components
import { SelectorComponent } from '../selector/selector.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import SegmentStyles from '@fabula/core/styles/components/segment/segment';
export class SegmentComponent extends SelectorComponent {
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
    childViewInit() {
        this.styles = SegmentStyles;
        this.initStyles();
    }
}
SegmentComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
                selector: 'fab-segment',
                template: "<button class=\"fab-segment\" (click)=\"handleClick()\" *ngIf=\"!href\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-segment\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" data-fab-component=\"segment\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
            }] }
];
/** @nocollapse */
SegmentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
if (false) {
    /** @type {?} */
    SegmentComponent.prototype.elRef;
    /** @type {?} */
    SegmentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWdtZW50L3NlZ21lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUduRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sYUFBYSxNQUFNLGdEQUFnRCxDQUFDO0FBTzNFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxpQkFBaUI7Ozs7O0lBQ3JELFlBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ0osQ0FBQzs7OztJQUVsQyxhQUFhO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDMUUsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDRpQkFBdUM7YUFDeEM7Ozs7WUFmbUIsVUFBVTtZQU1yQixhQUFhOzs7O0lBWWxCLGlDQUF3Qjs7SUFDeEIseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFNlZ21lbnRTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3NlZ21lbnQvc2VnbWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNlbGVjdG9yQ29tcG9uZW50LCB1c2VFeGlzdGluZzogU2VnbWVudENvbXBvbmVudCB9XSxcbiAgc2VsZWN0b3I6ICdmYWItc2VnbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWdtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50Q29tcG9uZW50IGV4dGVuZHMgU2VsZWN0b3JDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIGNoaWxkVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBTZWdtZW50U3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG59XG4iXX0=