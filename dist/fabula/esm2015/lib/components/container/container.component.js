/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/container/container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ContainerStyles from '@fabula/core/styles/components/container/container';
export class ContainerComponent extends CommonComponent {
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
    ngOnInit() {
        this.styles = ContainerStyles;
        this.initStyles();
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-container',
                template: "<div class=\"fab-container\" data-fab-component=\"container\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
if (false) {
    /** @type {?} */
    ContainerComponent.prototype.elRef;
    /** @type {?} */
    ContainerComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGVBQWUsTUFBTSxvREFBb0QsQ0FBQztBQU9qRixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTs7Ozs7SUFDckQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDSixDQUFDOzs7O0lBRWxDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixpSEFBeUM7O2FBRTFDOzs7O1lBZm1CLFVBQVU7WUFNckIsYUFBYTs7OztJQVlsQixtQ0FBd0I7O0lBQ3hCLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ29udGFpbmVyU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQ29udGFpbmVyU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG59XG4iXX0=