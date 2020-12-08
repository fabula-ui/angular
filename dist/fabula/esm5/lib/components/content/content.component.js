/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content/content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';
var ContentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContentComponent, _super);
    function ContentComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.active = false;
        return _this;
    }
    /**
     * @return {?}
     */
    ContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = ContentStyles;
        this.initStyles();
    };
    ContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-content',
                    template: "<div class=\"fab-content\" [attr.data-active]=\"active\" [attr.data-name]=\"name\" [attr.data-scope]=\"scope\" [ngClass]=\"contentClass\">\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ContentComponent.propDecorators = {
        active: [{ type: Input }],
        name: [{ type: Input }],
        scope: [{ type: Input }]
    };
    return ContentComponent;
}(CommonComponent));
export { ContentComponent };
if (false) {
    /** @type {?} */
    ContentComponent.prototype.active;
    /** @type {?} */
    ContentComponent.prototype.name;
    /** @type {?} */
    ContentComponent.prototype.scope;
    /** @type {?} */
    ContentComponent.prototype.contentClass;
    /** @type {?} */
    ContentComponent.prototype.elRef;
    /** @type {?} */
    ContentComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sYUFBYSxNQUFNLGdEQUFnRCxDQUFDO0FBRTNFO0lBSXNDLDRDQUFlO0lBT25ELDBCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFSNUIsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFTUyxDQUFDOzs7O0lBRWxDLG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw2TEFBdUM7aUJBQ3hDOzs7O2dCQWQyQixVQUFVO2dCQU03QixhQUFhOzs7eUJBVW5CLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQWFSLHVCQUFDO0NBQUEsQUFwQkQsQ0FJc0MsZUFBZSxHQWdCcEQ7U0FoQlksZ0JBQWdCOzs7SUFDM0Isa0NBQXdCOztJQUN4QixnQ0FBc0I7O0lBQ3RCLGlDQUF1Qjs7SUFFdkIsd0NBQXFCOztJQUduQixpQ0FBd0I7O0lBQ3hCLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IENvbnRlbnRTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc2NvcGU6IHN0cmluZztcblxuICBjb250ZW50Q2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gQ29udGVudFN0eWxlcztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19