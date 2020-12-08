/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tab-content/tab-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
// Components
import { ContentComponent } from '../content/content.component';
// Services
import { FabulaService } from '../../services/fabula.service';
export class TabContentComponent extends ContentComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.contentClass = 'fab-tab-content';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
}
TabContentComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                selector: 'fab-tab-content'
            }] }
];
/** @nocollapse */
TabContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
if (false) {
    /** @type {?} */
    TabContentComponent.prototype.elRef;
    /** @type {?} */
    TabContentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFiLWNvbnRlbnQvdGFiLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUdoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFNOUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjs7Ozs7SUFDdkQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUVuQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSHJCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFJbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULDZMQUFnRDtnQkFDaEQsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQVgyQixVQUFVO1lBTTdCLGFBQWE7Ozs7SUFRbEIsb0NBQXdCOztJQUN4Qiw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udGVudC9jb250ZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzZWxlY3RvcjogJ2ZhYi10YWItY29udGVudCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnRDb21wb25lbnQgZXh0ZW5kcyBDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTtcblxuICAgIHRoaXMuY29udGVudENsYXNzID0gJ2ZhYi10YWItY29udGVudCc7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbn1cbiJdfQ==