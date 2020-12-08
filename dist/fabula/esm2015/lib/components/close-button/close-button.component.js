/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/close-button/close-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';
export class CloseButtonComponent extends CommonComponent {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(cdRef, elRef, fabulaService) {
        super(elRef, fabulaService);
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.fabulaService = fabulaService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Set and apply styles
        this.styles = CloseButtonStyles;
        this.initStyles();
        // Detect changes
        this.cdRef.detectChanges();
    }
}
CloseButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-close-button',
                template: "<button class=\"fab-close-button\">\n    <fab-icon name=\"x\"></fab-icon>\n</button>"
            }] }
];
/** @nocollapse */
CloseButtonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService }
];
CloseButtonComponent.propDecorators = {
    color: [{ type: Input }],
    parentColor: [{ type: Input }],
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CloseButtonComponent.prototype.color;
    /** @type {?} */
    CloseButtonComponent.prototype.parentColor;
    /** @type {?} */
    CloseButtonComponent.prototype.size;
    /** @type {?} */
    CloseButtonComponent.prototype.cdRef;
    /** @type {?} */
    CloseButtonComponent.prototype.elRef;
    /** @type {?} */
    CloseButtonComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8saUJBQWlCLE1BQU0sMERBQTBELENBQUM7QUFNekYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7Ozs7OztJQUtyRCxZQUNXLEtBQXdCLEVBQ3hCLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFIckIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNOLENBQUM7Ozs7SUFFbEMsZUFBZTtRQUNYLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUF0QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGdHQUE0QzthQUMvQzs7OztZQWRzQyxpQkFBaUI7WUFBcEMsVUFBVTtZQU1yQixhQUFhOzs7b0JBVWpCLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLOzs7O0lBRk4scUNBQXVCOztJQUN2QiwyQ0FBNkI7O0lBQzdCLG9DQUFzQjs7SUFHbEIscUNBQStCOztJQUMvQixxQ0FBd0I7O0lBQ3hCLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQ2xvc2VCdXR0b25TdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1jbG9zZS1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbG9zZS1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBwYXJlbnRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvLyBTZXQgYW5kIGFwcGx5IHN0eWxlc1xuICAgICAgICB0aGlzLnN0eWxlcyA9IENsb3NlQnV0dG9uU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcblxuICAgICAgICAvLyBEZXRlY3QgY2hhbmdlc1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iXX0=