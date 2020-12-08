/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tag/tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';
/**
 * @record
 */
function Placement() { }
if (false) {
    /** @type {?} */
    Placement.prototype.x;
    /** @type {?} */
    Placement.prototype.y;
}
var TagComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TagComponent, _super);
    function TagComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.button = false;
        _this.clear = false;
        _this.faded = false;
        _this.glow = false;
        _this.invert = false;
        _this.outline = false;
        _this.rounded = false;
        _this.size = 'md';
        _this.inline = true;
        return _this;
    }
    /**
     * @return {?}
     */
    TagComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.styles = TagStyles;
        this.initStyles();
    };
    TagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tag',
                    template: "<div class=\"fab-tag\" *ngIf=\"!button && !href\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</div>\n\n<button class=\"fab-tag\" *ngIf=\"button\" [attr.data-placement-x]=\"!!placement && placement.x\"\n  [attr.data-placement-y]=\"!!placement && placement.y\" data-fab-component=\"tag\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tag\" *ngIf=\"href\" [href]=\"href\" [rel]=\"rel\" [target]=\"target\"\n  [attr.data-placement-x]=\"!!placement && placement.x\" [attr.data-placement-y]=\"!!placement && placement.y\"\n  data-fab-component=\"tag\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    /** @nocollapse */
    TagComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TagComponent.propDecorators = {
        button: [{ type: Input }],
        color: [{ type: Input }],
        clear: [{ type: Input }],
        faded: [{ type: Input }],
        glow: [{ type: Input }],
        href: [{ type: Input }],
        invert: [{ type: Input }],
        link: [{ type: Input }],
        outline: [{ type: Input }],
        placement: [{ type: Input }],
        rel: [{ type: Input }],
        rounded: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }]
    };
    return TagComponent;
}(CommonComponent));
export { TagComponent };
if (false) {
    /** @type {?} */
    TagComponent.prototype.button;
    /** @type {?} */
    TagComponent.prototype.color;
    /** @type {?} */
    TagComponent.prototype.clear;
    /** @type {?} */
    TagComponent.prototype.faded;
    /** @type {?} */
    TagComponent.prototype.glow;
    /** @type {?} */
    TagComponent.prototype.href;
    /** @type {?} */
    TagComponent.prototype.invert;
    /** @type {?} */
    TagComponent.prototype.link;
    /** @type {?} */
    TagComponent.prototype.outline;
    /** @type {?} */
    TagComponent.prototype.placement;
    /** @type {?} */
    TagComponent.prototype.rel;
    /** @type {?} */
    TagComponent.prototype.rounded;
    /** @type {?} */
    TagComponent.prototype.size;
    /** @type {?} */
    TagComponent.prototype.target;
    /** @type {?} */
    TagComponent.prototype.inline;
    /** @type {?} */
    TagComponent.prototype.elRef;
    /** @type {?} */
    TagComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLFNBQVMsTUFBTSx3Q0FBd0MsQ0FBQzs7OztBQUUvRCx3QkFHQzs7O0lBRkMsc0JBQVU7O0lBQ1Ysc0JBQVU7O0FBR1o7SUFJa0Msd0NBQWU7SUFrQi9DLHNCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFuQjVCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFYixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFHckIsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUFLbUIsQ0FBQzs7OztJQUVsQyxzQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsMDRCQUFtQztpQkFDcEM7Ozs7Z0JBbkJtQixVQUFVO2dCQU1yQixhQUFhOzs7eUJBZW5CLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUFhUixtQkFBQztDQUFBLEFBL0JELENBSWtDLGVBQWUsR0EyQmhEO1NBM0JZLFlBQVk7OztJQUN2Qiw4QkFBd0I7O0lBQ3hCLDZCQUF1Qjs7SUFDdkIsNkJBQXVCOztJQUN2Qiw2QkFBdUI7O0lBQ3ZCLDRCQUFzQjs7SUFDdEIsNEJBQXNCOztJQUN0Qiw4QkFBd0I7O0lBQ3hCLDRCQUFzQjs7SUFDdEIsK0JBQXlCOztJQUN6QixpQ0FBOEI7O0lBQzlCLDJCQUFxQjs7SUFDckIsK0JBQXlCOztJQUN6Qiw0QkFBcUI7O0lBQ3JCLDhCQUF3Qjs7SUFFeEIsOEJBQWM7O0lBR1osNkJBQXdCOztJQUN4QixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVGFnU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy90YWcvdGFnJztcblxuaW50ZXJmYWNlIFBsYWNlbWVudCB7XG4gIHg6IHN0cmluZztcbiAgeTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBidXR0b24gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZmFkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZ2xvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBocmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGludmVydCA9IGZhbHNlO1xuICBASW5wdXQoKSBsaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIEBJbnB1dCgpIHJlbDogc3RyaW5nO1xuICBASW5wdXQoKSByb3VuZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemUgPSAnbWQnO1xuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcblxuICBpbmxpbmUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gVGFnU3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG59XG4iXX0=