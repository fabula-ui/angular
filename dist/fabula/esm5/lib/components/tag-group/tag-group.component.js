/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tag-group/tag-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { TagComponent } from '../tag/tag.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';
var TagGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TagGroupComponent, _super);
    function TagGroupComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    TagGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tagComponents.forEach((/**
         * @param {?} tag
         * @return {?}
         */
        function (tag) {
            if (_this.color && !tag.color) {
                tag.color = _this.color;
            }
            tag.ngAfterViewInit();
        }));
    };
    /**
     * @return {?}
     */
    TagGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = TagGroupStyles;
        this.initStyles();
    };
    TagGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tag-group',
                    template: "<div class=\"fab-tag-group-wrapper\">\n  <div class=\"fab-tag-group\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    TagGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TagGroupComponent.propDecorators = {
        tagComponents: [{ type: ContentChildren, args: [TagComponent,] }],
        color: [{ type: Input }],
        spacing: [{ type: Input }]
    };
    return TagGroupComponent;
}(CommonComponent));
export { TagGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhZy1ncm91cC90YWctZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxlQUFlLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGNBQWMsTUFBTSxvREFBb0QsQ0FBQztBQUVoRjtJQUl1Qyw2Q0FBZTtJQU1wRCwyQkFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUZyQyxZQUdJLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUZ6QixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUNKLENBQUM7Ozs7SUFFbEMsMkNBQWU7OztJQUFmO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQWlCO1lBQzNDLElBQUksS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2FBQUU7WUFDekQsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixxSUFBeUM7aUJBQzFDOzs7O2dCQWZtQixVQUFVO2dCQU9yQixhQUFhOzs7Z0NBVW5CLGVBQWUsU0FBQyxZQUFZO3dCQUU1QixLQUFLOzBCQUNMLEtBQUs7O0lBa0JSLHdCQUFDO0NBQUEsQUExQkQsQ0FJdUMsZUFBZSxHQXNCckQ7U0F0QlksaUJBQWlCOzs7SUFDNUIsMENBQXNFOztJQUV0RSxrQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7SUFHcEIsa0NBQXdCOztJQUN4QiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFnQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFnL3RhZy5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVGFnR3JvdXBTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3RhZy1ncm91cC90YWctZ3JvdXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItdGFnLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy1ncm91cC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0dyb3VwQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihUYWdDb21wb25lbnQpIHRhZ0NvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUYWdDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwYWNpbmc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRhZ0NvbXBvbmVudHMuZm9yRWFjaCgodGFnOiBUYWdDb21wb25lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbG9yICYmICF0YWcuY29sb3IpIHsgdGFnLmNvbG9yID0gdGhpcy5jb2xvcjsgfVxuICAgICAgdGFnLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBUYWdHcm91cFN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19