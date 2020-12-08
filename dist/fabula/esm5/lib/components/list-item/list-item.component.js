/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list-item/list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Component
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';
var ListItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListItemComponent, _super);
    function ListItemComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.button = false;
        _this.item = { button: false };
        _this.striped = false;
        _this.target = '_blank';
        _this.clicked = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ListItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.additionalProps = tslib_1.__assign({}, this.item);
        this.styles = ListItemStyles;
        this.initStyles();
    };
    // Methods
    // Methods
    /**
     * @return {?}
     */
    ListItemComponent.prototype.handleClick = 
    // Methods
    /**
     * @return {?}
     */
    function () {
        this.clicked.emit();
    };
    ListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-list-item',
                    template: "<div class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" *ngIf=\"!button && !href\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</div>\n\n<button class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" (click)=\"handleClick()\" *ngIf=\"!!button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</button>\n\n<a class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" [attr.href]=\"href\" [attr.rel]=\"rel\" [attr.target]=\"target\" *ngIf=\"!!href && !button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ListItemComponent.propDecorators = {
        button: [{ type: Input }],
        color: [{ type: Input }],
        divider: [{ type: Input }],
        href: [{ type: Input }],
        item: [{ type: Input }],
        label: [{ type: Input }],
        padding: [{ type: Input }],
        props: [{ type: Input }],
        rel: [{ type: Input }],
        striped: [{ type: Input }],
        target: [{ type: Input }],
        clicked: [{ type: Output }]
    };
    return ListItemComponent;
}(CommonComponent));
export { ListItemComponent };
if (false) {
    /** @type {?} */
    ListItemComponent.prototype.button;
    /** @type {?} */
    ListItemComponent.prototype.color;
    /** @type {?} */
    ListItemComponent.prototype.divider;
    /** @type {?} */
    ListItemComponent.prototype.href;
    /** @type {?} */
    ListItemComponent.prototype.item;
    /** @type {?} */
    ListItemComponent.prototype.label;
    /** @type {?} */
    ListItemComponent.prototype.padding;
    /** @type {?} */
    ListItemComponent.prototype.props;
    /** @type {?} */
    ListItemComponent.prototype.rel;
    /** @type {?} */
    ListItemComponent.prototype.striped;
    /** @type {?} */
    ListItemComponent.prototype.target;
    /** @type {?} */
    ListItemComponent.prototype.clicked;
    /** @type {?} */
    ListItemComponent.prototype.elRef;
    /** @type {?} */
    ListItemComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxjQUFjLE1BQU0sb0RBQW9ELENBQUM7QUFFaEY7SUFLdUMsNkNBQWU7SUFlcEQsMkJBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWhCNUIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUlmLFVBQUksR0FBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUs5QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxRQUFRLENBQUM7UUFFakIsYUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O0lBS04sQ0FBQzs7OztJQUVsQyxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSx3QkFBUSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7UUFFeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVOzs7OztJQUNWLHVDQUFXOzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QiwyNkJBQXlDOztpQkFFMUM7Ozs7Z0JBZm1CLFVBQVU7Z0JBTXJCLGFBQWE7Ozt5QkFXbkIsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLE1BQU07O0lBa0JULHdCQUFDO0NBQUEsQUFwQ0QsQ0FLdUMsZUFBZSxHQStCckQ7U0EvQlksaUJBQWlCOzs7SUFDNUIsbUNBQXdCOztJQUN4QixrQ0FBdUI7O0lBQ3ZCLG9DQUEwQjs7SUFDMUIsaUNBQXNCOztJQUN0QixpQ0FBdUM7O0lBQ3ZDLGtDQUF1Qjs7SUFDdkIsb0NBQTBCOztJQUMxQixrQ0FBb0I7O0lBQ3BCLGdDQUFxQjs7SUFDckIsb0NBQXlCOztJQUN6QixtQ0FBMkI7O0lBRTNCLG9DQUF1Qzs7SUFHckMsa0NBQXdCOztJQUN4QiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBMaXN0SXRlbVN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1saXN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBidXR0b24gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZGl2aWRlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtOiBhbnkgPSB7IGJ1dHRvbjogZmFsc2UgfTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvcHM6IGFueTtcbiAgQElucHV0KCkgcmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0cmlwZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxQcm9wcyA9IHsgLi4udGhpcy5pdGVtIH07XG5cbiAgICB0aGlzLnN0eWxlcyA9IExpc3RJdGVtU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG5cbiAgLy8gTWV0aG9kc1xuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmNsaWNrZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=