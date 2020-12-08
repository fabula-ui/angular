/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tabs/tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
import { css } from 'emotion';
// Components
import { SegmentsComponent } from '../segments/segments.component';
import { TabComponent } from '../tab/tab.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';
var TabsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TabsComponent, _super);
    function TabsComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        return _this;
    }
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        this.tabComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            if (!child.type) {
                child.type = _this.type;
            }
        }));
    };
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var styles = css(TabsStyles({
            framework: 'angular', props: tslib_1.__assign({}, this, this.props)
        }));
        host.classList.add(styles);
    };
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-tabs',
                    template: "<div class=\"fab-tabs-wrapper\" data-fab-wrapper=\"tabs\">\n  <div class=\"fab-tabs\" data-fab-component=\"tabs\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    styles: [":host .fab-tabs-wrapper{height:100%}"]
                }] }
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    TabsComponent.propDecorators = {
        tabComponents: [{ type: ContentChildren, args: [TabComponent,] }],
        alignment: [{ type: Input }],
        props: [{ type: Input }]
    };
    return TabsComponent;
}(SegmentsComponent));
export { TabsComponent };
if (false) {
    /** @type {?} */
    TabsComponent.prototype.tabComponents;
    /** @type {?} */
    TabsComponent.prototype.alignment;
    /** @type {?} */
    TabsComponent.prototype.props;
    /** @type {?} */
    TabsComponent.prototype.elRef;
    /** @type {?} */
    TabsComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFtRCxNQUFNLGVBQWUsQ0FBQztBQUNsSixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBR3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxVQUFVLE1BQU0sMENBQTBDLENBQUM7QUFFbEU7SUFLbUMseUNBQWlCO0lBS2xELHVCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBQ0osQ0FBQzs7OztJQUVsQyx1Q0FBZTs7O0lBQWY7UUFBQSxpQkFNQztRQUxDLGlCQUFNLGVBQWUsV0FBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBbUI7WUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO2FBQUU7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7O1lBQy9CLE1BQU0sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyx1QkFDdEIsSUFBSSxFQUNKLElBQUksQ0FBQyxLQUFLLENBQ2Q7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUVwQiwrS0FBb0M7O2lCQUNyQzs7OztnQkFqQjJCLFVBQVU7Z0JBUTdCLGFBQWE7OztnQ0FXbkIsZUFBZSxTQUFDLFlBQVk7NEJBQzVCLEtBQUs7d0JBQ0wsS0FBSzs7SUEwQlIsb0JBQUM7Q0FBQSxBQWxDRCxDQUttQyxpQkFBaUIsR0E2Qm5EO1NBN0JZLGFBQWE7OztJQUN4QixzQ0FBc0U7O0lBQ3RFLGtDQUEyQjs7SUFDM0IsOEJBQW9COztJQUdsQiw4QkFBd0I7O0lBQ3hCLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgU2VnbWVudHNDb21wb25lbnQgfSBmcm9tICcuLi9zZWdtZW50cy9zZWdtZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiL3RhYi5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgVGFic1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvdGFicy90YWJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLXRhYnMnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGV4dGVuZHMgU2VnbWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgdGFiQ29tcG9uZW50czogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9wczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG4gICAgdGhpcy50YWJDb21wb25lbnRzLmZvckVhY2goKGNoaWxkOiBUYWJDb21wb25lbnQpID0+IHtcbiAgICAgIGlmICghY2hpbGQudHlwZSkgeyBjaGlsZC50eXBlID0gdGhpcy50eXBlOyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHN0eWxlcyA9IGNzcyhUYWJzU3R5bGVzKHtcbiAgICAgIGZyYW1ld29yazogJ2FuZ3VsYXInLCBwcm9wczoge1xuICAgICAgICAuLi50aGlzLFxuICAgICAgICAuLi50aGlzLnByb3BzXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgaG9zdC5jbGFzc0xpc3QuYWRkKHN0eWxlcyk7XG4gIH1cbn1cbiJdfQ==