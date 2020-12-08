/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tab-content/tab-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
// Components
import { ContentComponent } from '../content/content.component';
// Services
import { FabulaService } from '../../services/fabula.service';
var TabContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TabContentComponent, _super);
    function TabContentComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.contentClass = 'fab-tab-content';
        return _this;
    }
    /**
     * @return {?}
     */
    TabContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    TabContentComponent.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n",
                    selector: 'fab-tab-content'
                }] }
    ];
    /** @nocollapse */
    TabContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    return TabContentComponent;
}(ContentComponent));
export { TabContentComponent };
if (false) {
    /** @type {?} */
    TabContentComponent.prototype.elRef;
    /** @type {?} */
    TabContentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFiLWNvbnRlbnQvdGFiLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUc5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlEO0lBSXlDLCtDQUFnQjtJQUN2RCw2QkFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUZyQyxZQUlFLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FHNUI7UUFOUSxXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBSW5DLEtBQUksQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUM7O0lBQ3hDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULDZMQUFnRDtvQkFDaEQsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBWDJCLFVBQVU7Z0JBTTdCLGFBQWE7O0lBb0J0QiwwQkFBQztDQUFBLEFBbEJELENBSXlDLGdCQUFnQixHQWN4RDtTQWRZLG1CQUFtQjs7O0lBRTVCLG9DQUF3Qjs7SUFDeEIsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi4vY29udGVudC9jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc2VsZWN0b3I6ICdmYWItdGFiLWNvbnRlbnQnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7XG5cbiAgICB0aGlzLmNvbnRlbnRDbGFzcyA9ICdmYWItdGFiLWNvbnRlbnQnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iXX0=