/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list-item/list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Component
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';
export class ListItemComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = false;
        this.item = { button: false };
        this.striped = false;
        this.target = '_blank';
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.additionalProps = Object.assign({}, this.item);
        this.styles = ListItemStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @return {?}
     */
    handleClick() {
        this.clicked.emit();
    }
}
ListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-list-item',
                template: "<div class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" *ngIf=\"!button && !href\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</div>\n\n<button class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" (click)=\"handleClick()\" *ngIf=\"!!button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</button>\n\n<a class=\"fab-list-item\" [attr.data-divider]=\"divider\" [attr.data-striped]=\"striped\" data-fab-component=\"listItem\" [attr.href]=\"href\" [attr.rel]=\"rel\" [attr.target]=\"target\" *ngIf=\"!!href && !button\">\n  {{item && item.label || label}}\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [""]
            }] }
];
/** @nocollapse */
ListItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGNBQWMsTUFBTSxvREFBb0QsQ0FBQztBQU9oRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTs7Ozs7SUFlcEQsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFoQjVCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFJZixTQUFJLEdBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFLOUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBRWpCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS04sQ0FBQzs7OztJQUVsQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUscUJBQVEsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRXhDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUdELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDI2QkFBeUM7O2FBRTFDOzs7O1lBZm1CLFVBQVU7WUFNckIsYUFBYTs7O3FCQVduQixLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBRUwsTUFBTTs7OztJQVpQLG1DQUF3Qjs7SUFDeEIsa0NBQXVCOztJQUN2QixvQ0FBMEI7O0lBQzFCLGlDQUFzQjs7SUFDdEIsaUNBQXVDOztJQUN2QyxrQ0FBdUI7O0lBQ3ZCLG9DQUEwQjs7SUFDMUIsa0NBQW9COztJQUNwQixnQ0FBcUI7O0lBQ3JCLG9DQUF5Qjs7SUFDekIsbUNBQTJCOztJQUUzQixvQ0FBdUM7O0lBR3JDLGtDQUF3Qjs7SUFDeEIsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgTGlzdEl0ZW1TdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYnV0dG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpdmlkZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbTogYW55ID0geyBidXR0b246IGZhbHNlIH07XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb3BzOiBhbnk7XG4gIEBJbnB1dCgpIHJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHJpcGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRpdGlvbmFsUHJvcHMgPSB7IC4uLnRoaXMuaXRlbSB9O1xuXG4gICAgdGhpcy5zdHlsZXMgPSBMaXN0SXRlbVN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxuXG4gIC8vIE1ldGhvZHNcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5jbGlja2VkLmVtaXQoKTtcbiAgfVxufVxuIl19