/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tab/tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Components
import { SelectorComponent } from '../selector/selector.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TabStyles from '@fabula/core/styles/components/tab/tab';
var TabComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TabComponent, _super);
    function TabComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.childViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var styles = css(TabStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
                    selector: 'fab-tab',
                    template: "<button class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" (click)=\"handleClick()\" *ngIf=\"!href && !link\" data-fab-component=\"tab\">\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n</button>\n\n<a class=\"fab-tab\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" *ngIf=\"href || link\" [href]=\"href || link\" [rel]=\"rel\" [target]=\"target\" data-fab-component=\"tab\">\n  <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n</a>\n\n<ng-template #content><ng-content></ng-content></ng-template>"
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TabComponent.propDecorators = {
        type: [{ type: Input }]
    };
    return TabComponent;
}(SelectorComponent));
export { TabComponent };
if (false) {
    /** @type {?} */
    TabComponent.prototype.type;
    /** @type {?} */
    TabComponent.prototype.elRef;
    /** @type {?} */
    TabComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLFNBQVMsTUFBTSx3Q0FBd0MsQ0FBQztBQUUvRDtJQUtrQyx3Q0FBaUI7SUFHakQsc0JBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFDSixDQUFDOzs7O0lBRWxDLG9DQUFhOzs7SUFBYjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztZQUMvQixNQUFNLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLENBQUM7b0JBQ3RFLFFBQVEsRUFBRSxTQUFTO29CQUNuQixxakJBQW1DO2lCQUNwQzs7OztnQkFoQm1CLFVBQVU7Z0JBT3JCLGFBQWE7Ozt1QkFXbkIsS0FBSzs7SUFZUixtQkFBQztDQUFBLEFBbEJELENBS2tDLGlCQUFpQixHQWFsRDtTQWJZLFlBQVk7OztJQUN2Qiw0QkFBc0I7O0lBR3BCLDZCQUF3Qjs7SUFDeEIscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFRhYlN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvdGFiL3RhYic7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNlbGVjdG9yQ29tcG9uZW50LCB1c2VFeGlzdGluZzogVGFiQ29tcG9uZW50IH1dLFxuICBzZWxlY3RvcjogJ2ZhYi10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgZXh0ZW5kcyBTZWxlY3RvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIGNoaWxkVmlld0luaXQoKSB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzdHlsZXMgPSBjc3MoVGFiU3R5bGVzKHsgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzOiB0aGlzIH0pKTtcbiAgICBob3N0LmNsYXNzTGlzdC5hZGQoc3R5bGVzKTtcbiAgfVxufVxuIl19