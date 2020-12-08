/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tag-group/tag-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { TagComponent } from '../tag/tag.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';
export class TagGroupComponent extends CommonComponent {
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
    ngAfterViewInit() {
        this.tagComponents.forEach((/**
         * @param {?} tag
         * @return {?}
         */
        (tag) => {
            if (this.color && !tag.color) {
                tag.color = this.color;
            }
            tag.ngAfterViewInit();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = TagGroupStyles;
        this.initStyles();
    }
}
TagGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-tag-group',
                template: "<div class=\"fab-tag-group-wrapper\">\n  <div class=\"fab-tag-group\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
TagGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
TagGroupComponent.propDecorators = {
    tagComponents: [{ type: ContentChildren, args: [TagComponent,] }],
    color: [{ type: Input }],
    spacing: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TagGroupComponent.prototype.tagComponents;
    /** @type {?} */
    TagGroupComponent.prototype.color;
    /** @type {?} */
    TagGroupComponent.prototype.spacing;
    /** @type {?} */
    TagGroupComponent.prototype.elRef;
    /** @type {?} */
    TagGroupComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhZy1ncm91cC90YWctZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLGVBQWUsRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdoSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUdwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sY0FBYyxNQUFNLG9EQUFvRCxDQUFDO0FBTWhGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlOzs7OztJQU1wRCxZQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ2pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGdkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNKLENBQUM7Ozs7SUFFbEMsZUFBZTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQUU7WUFDekQsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIscUlBQXlDO2FBQzFDOzs7O1lBZm1CLFVBQVU7WUFPckIsYUFBYTs7OzRCQVVuQixlQUFlLFNBQUMsWUFBWTtvQkFFNUIsS0FBSztzQkFDTCxLQUFLOzs7O0lBSE4sMENBQXNFOztJQUV0RSxrQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7SUFHcEIsa0NBQXdCOztJQUN4QiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFnL3RhZy5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVGFnR3JvdXBTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3RhZy1ncm91cC90YWctZ3JvdXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItdGFnLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy1ncm91cC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0dyb3VwQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihUYWdDb21wb25lbnQpIHRhZ0NvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUYWdDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwYWNpbmc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRhZ0NvbXBvbmVudHMuZm9yRWFjaCgodGFnOiBUYWdDb21wb25lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbG9yICYmICF0YWcuY29sb3IpIHsgdGFnLmNvbG9yID0gdGhpcy5jb2xvcjsgfVxuICAgICAgdGFnLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBUYWdHcm91cFN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19