/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button-group/button-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ButtonGroupStyles from '@fabula/core/styles/components/button-group/button-group';
export class ButtonGroupComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.divider = true;
        this.dividerColor = '';
        this.layout = 'h';
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = ButtonGroupStyles;
        this.initStyles();
    }
}
ButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-button-group',
                template: "<div class=\"fab-button-group\" data-fab-component=\"buttonGroup\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{display:inline-block}:host .fab-button-group-wrapper{display:block}"]
            }] }
];
/** @nocollapse */
ButtonGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
ButtonGroupComponent.propDecorators = {
    color: [{ type: Input }],
    divider: [{ type: Input }],
    dividerColor: [{ type: Input }],
    layout: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ButtonGroupComponent.prototype.color;
    /** @type {?} */
    ButtonGroupComponent.prototype.divider;
    /** @type {?} */
    ButtonGroupComponent.prototype.dividerColor;
    /** @type {?} */
    ButtonGroupComponent.prototype.layout;
    /** @type {?} */
    ButtonGroupComponent.prototype.inline;
    /** @type {?} */
    ButtonGroupComponent.prototype.elRef;
    /** @type {?} */
    ButtonGroupComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxpQkFBaUIsTUFBTSwwREFBMEQsQ0FBQztBQU96RixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTs7Ozs7SUFRdkQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFSNUIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFdEIsV0FBTSxHQUFHLElBQUksQ0FBQztJQUttQixDQUFDOzs7O0lBRWxDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLHNIQUE0Qzs7YUFDN0M7Ozs7WUFsQkMsVUFBVTtZQVNILGFBQWE7OztvQkFXbkIsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUhOLHFDQUF1Qjs7SUFDdkIsdUNBQXdCOztJQUN4Qiw0Q0FBMkI7O0lBQzNCLHNDQUFzQjs7SUFFdEIsc0NBQWM7O0lBR1oscUNBQXdCOztJQUN4Qiw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgQnV0dG9uR3JvdXBTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItYnV0dG9uLWdyb3VwJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZGl2aWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIGRpdmlkZXJDb2xvciA9ICcnO1xuICBASW5wdXQoKSBsYXlvdXQgPSAnaCc7XG5cbiAgaW5saW5lID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQnV0dG9uR3JvdXBTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==