/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-item/dropdown-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';
var DropdownItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownItemComponent, _super);
    function DropdownItemComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.button = false;
        _this.clickToClose = false;
        _this.invert = false;
        _this.props = { button: false };
        _this.target = '_blank';
        _this.clicked = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    DropdownItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.props && this.props.clickToClose || this.clickToClose) {
            this.button = true;
            this.props.button = true;
        }
        this.styles = DropdownItemStyles;
        this.initStyles();
    };
    // Methods
    // Methods
    /**
     * @return {?}
     */
    DropdownItemComponent.prototype.handleClick = 
    // Methods
    /**
     * @return {?}
     */
    function () {
        this.clicked.emit();
    };
    DropdownItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dropdown-item',
                    template: "<a class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" [attr.href]=\"href || props.href\" [attr.rel]=\"rel || props.rel\" [attr.target]=\"target || props.target\"\n  *ngIf=\"href || props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</a>\n\n<button class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" (click)=\"handleClick()\"\n  *ngIf=\"(button || props.button) && !href && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</button>\n\n<div class=\"fab-dropdown-item\" data-fab-component=\"dropdownItem\" *ngIf=\"!button && !href && !props.button && !props.href\">\n  <ng-container *ngIf=\"(props.label && props.label) || label\">{{props.label || label}}</ng-container>\n  <ng-container *ngIf=\"!props.label && !label\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    DropdownItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownItemComponent.propDecorators = {
        button: [{ type: Input }],
        color: [{ type: Input }],
        clickToClose: [{ type: Input }],
        href: [{ type: Input }],
        invert: [{ type: Input }],
        label: [{ type: Input }],
        parentColor: [{ type: Input }],
        props: [{ type: Input }],
        rel: [{ type: Input }],
        size: [{ type: Input }],
        target: [{ type: Input }],
        clicked: [{ type: Output }]
    };
    return DropdownItemComponent;
}(CommonComponent));
export { DropdownItemComponent };
if (false) {
    /** @type {?} */
    DropdownItemComponent.prototype.button;
    /** @type {?} */
    DropdownItemComponent.prototype.color;
    /** @type {?} */
    DropdownItemComponent.prototype.clickToClose;
    /** @type {?} */
    DropdownItemComponent.prototype.href;
    /** @type {?} */
    DropdownItemComponent.prototype.invert;
    /** @type {?} */
    DropdownItemComponent.prototype.label;
    /** @type {?} */
    DropdownItemComponent.prototype.parentColor;
    /** @type {?} */
    DropdownItemComponent.prototype.props;
    /** @type {?} */
    DropdownItemComponent.prototype.rel;
    /** @type {?} */
    DropdownItemComponent.prototype.size;
    /** @type {?} */
    DropdownItemComponent.prototype.target;
    /** @type {?} */
    DropdownItemComponent.prototype.clicked;
    /** @type {?} */
    DropdownItemComponent.prototype.elRef;
    /** @type {?} */
    DropdownItemComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxrQkFBa0IsTUFBTSw0REFBNEQsQ0FBQztBQUU1RjtJQUsyQyxpREFBZTtJQWV0RCwrQkFDVyxLQUFpQixFQUNqQixhQUE0QjtRQUZ2QyxZQUdJLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUZ2QixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBaEI5QixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUdmLFdBQUssR0FBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUcvQixZQUFNLEdBQUcsUUFBUSxDQUFDO1FBRWpCLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQUtOLENBQUM7Ozs7SUFFbEMsK0NBQWU7OztJQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVU7Ozs7O0lBQ1YsMkNBQVc7Ozs7O0lBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQXRDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFFN0IsdXlDQUE2Qzs7aUJBQ2hEOzs7O2dCQW5CRyxVQUFVO2dCQVVMLGFBQWE7Ozt5QkFXakIsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLE1BQU07O0lBcUJYLDRCQUFDO0NBQUEsQUF2Q0QsQ0FLMkMsZUFBZSxHQWtDekQ7U0FsQ1kscUJBQXFCOzs7SUFDOUIsdUNBQXdCOztJQUN4QixzQ0FBdUI7O0lBQ3ZCLDZDQUE4Qjs7SUFDOUIscUNBQXNCOztJQUN0Qix1Q0FBd0I7O0lBQ3hCLHNDQUF1Qjs7SUFDdkIsNENBQTZCOztJQUM3QixzQ0FBd0M7O0lBQ3hDLG9DQUFxQjs7SUFDckIscUNBQXNCOztJQUN0Qix1Q0FBMkI7O0lBRTNCLHdDQUF1Qzs7SUFHbkMsc0NBQXdCOztJQUN4Qiw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uLWNvbXBvbmVudC9jb21tb24tY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBEcm9wZG93bkl0ZW1TdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duLWl0ZW0vZHJvcGRvd24taXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLWRyb3Bkb3duLWl0ZW0nLFxuICAgIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24taXRlbS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGJ1dHRvbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xpY2tUb0Nsb3NlID0gZmFsc2U7XG4gICAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGludmVydCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcGFyZW50Q29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBwcm9wczogYW55ID0geyBidXR0b246IGZhbHNlIH07XG4gICAgQElucHV0KCkgcmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRhcmdldCA9ICdfYmxhbmsnO1xuXG4gICAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMgJiYgdGhpcy5wcm9wcy5jbGlja1RvQ2xvc2UgfHwgdGhpcy5jbGlja1RvQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3R5bGVzID0gRHJvcGRvd25JdGVtU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgICB9XG5cbiAgICAvLyBNZXRob2RzXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KCk7XG4gICAgfVxufVxuIl19