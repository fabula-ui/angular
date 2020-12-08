/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tab/tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Components
import { SelectorComponent } from '../selector/selector.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TabStyles from '@fabula/core/styles/components/tab/tab';
export class TabComponent extends SelectorComponent {
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
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const styles = css(TabStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
                selector: 'fab-tab',
                template: "<button class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" (click)=\"handleClick()\" *ngIf=\"!href && !link\" data-fab-component=\"tab\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" *ngIf=\"href || link\" [href]=\"href || link\" [rel]=\"rel\" [target]=\"target\" data-fab-component=\"tab\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TabComponent.propDecorators = {
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TabComponent.prototype.type;
    /** @type {?} */
    TabComponent.prototype.elRef;
    /** @type {?} */
    TabComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUduRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sU0FBUyxNQUFNLHdDQUF3QyxDQUFDO0FBTy9ELE1BQU0sT0FBTyxZQUFhLFNBQVEsaUJBQWlCOzs7OztJQUdqRCxZQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ2pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGdkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNKLENBQUM7Ozs7SUFFbEMsYUFBYTs7Y0FDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztjQUMvQixNQUFNLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLENBQUM7Z0JBQ3RFLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixxakJBQW1DO2FBQ3BDOzs7O1lBaEJtQixVQUFVO1lBT3JCLGFBQWE7OzttQkFXbkIsS0FBSzs7OztJQUFOLDRCQUFzQjs7SUFHcEIsNkJBQXdCOztJQUN4QixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9zZWxlY3Rvci9zZWxlY3Rvci5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVGFiU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy90YWIvdGFiJztcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU2VsZWN0b3JDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBUYWJDb21wb25lbnQgfV0sXG4gIHNlbGVjdG9yOiAnZmFiLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBleHRlbmRzIFNlbGVjdG9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgY2hpbGRWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHN0eWxlcyA9IGNzcyhUYWJTdHlsZXMoeyBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHM6IHRoaXMgfSkpO1xuICAgIGhvc3QuY2xhc3NMaXN0LmFkZChzdHlsZXMpO1xuICB9XG59XG4iXX0=