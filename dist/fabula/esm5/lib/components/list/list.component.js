/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/list/list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren, } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { ListItemComponent } from '../list-item/list-item.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ListStyles from '@fabula/core/styles/components/list/list';
var ListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListComponent, _super);
    function ListComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.divider = true;
        _this.padding = false;
        _this.striped = false;
        _this.clickItem = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ListComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleItem(item); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleItem(item); }));
    };
    /**
     * @return {?}
     */
    ListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = ListStyles;
        this.initStyles();
    };
    // Methods
    // Methods
    /**
     * @param {?} item
     * @return {?}
     */
    ListComponent.prototype.handleItem = 
    // Methods
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (this.color && !item.color) {
            item.color = this.color;
        }
        item.clicked.subscribe((/**
         * @return {?}
         */
        function () {
            _this.clickItem.emit();
        }));
        item.divider = this.divider;
        item.padding = this.padding;
        item.striped = this.striped;
        item.ngOnInit();
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-list',
                    template: "<div class=\"fab-list-wrapper\" data-fab-wrapper=\"list\">\n  <div class=\"fab-list\" data-fab-component=\"list\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ListComponent.propDecorators = {
        contentItems: [{ type: ContentChildren, args: [ListItemComponent,] }],
        viewItems: [{ type: ViewChildren, args: [ListItemComponent,] }],
        color: [{ type: Input }],
        divider: [{ type: Input }],
        padding: [{ type: Input }],
        props: [{ type: Input }],
        striped: [{ type: Input }],
        clickItem: [{ type: Output }]
    };
    return ListComponent;
}(CommonComponent));
export { ListComponent };
if (false) {
    /** @type {?} */
    ListComponent.prototype.contentItems;
    /** @type {?} */
    ListComponent.prototype.viewItems;
    /** @type {?} */
    ListComponent.prototype.color;
    /** @type {?} */
    ListComponent.prototype.divider;
    /** @type {?} */
    ListComponent.prototype.padding;
    /** @type {?} */
    ListComponent.prototype.props;
    /** @type {?} */
    ListComponent.prototype.striped;
    /** @type {?} */
    ListComponent.prototype.clickItem;
    /** @type {?} */
    ListComponent.prototype.elRef;
    /** @type {?} */
    ListComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBRVosS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBR3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxVQUFVLE1BQU0sMENBQTBDLENBQUM7QUFFbEU7SUFLbUMseUNBQWU7SUFZaEQsdUJBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFGckMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGekIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVQ1QixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWYsZUFBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQUszQixDQUFDOzs7O0lBRWxDLHVDQUFlOzs7SUFBZjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUF1QixJQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQXVCLElBQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7Ozs7OztJQUNWLGtDQUFVOzs7Ozs7SUFBVixVQUFXLElBQUk7UUFBZixpQkFZQztRQVhDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FBRTtRQUUzRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDO1lBQ3JCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsaUxBQW9DOztpQkFFckM7Ozs7Z0JBdkJDLFVBQVU7Z0JBY0gsYUFBYTs7OytCQVduQixlQUFlLFNBQUMsaUJBQWlCOzRCQUNqQyxZQUFZLFNBQUMsaUJBQWlCO3dCQUU5QixLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBRUwsTUFBTTs7SUErQlQsb0JBQUM7Q0FBQSxBQTlDRCxDQUttQyxlQUFlLEdBeUNqRDtTQXpDWSxhQUFhOzs7SUFDeEIscUNBQStFOztJQUMvRSxrQ0FBeUU7O0lBRXpFLDhCQUF1Qjs7SUFDdkIsZ0NBQXdCOztJQUN4QixnQ0FBeUI7O0lBQ3pCLDhCQUFvQjs7SUFDcEIsZ0NBQXlCOztJQUV6QixrQ0FBNEQ7O0lBRzFELDhCQUF3Qjs7SUFDeEIsc0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBMaXN0U3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9saXN0L2xpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKExpc3RJdGVtQ29tcG9uZW50KSBjb250ZW50SXRlbXM6IFF1ZXJ5TGlzdDxMaXN0SXRlbUNvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oTGlzdEl0ZW1Db21wb25lbnQpIHZpZXdJdGVtczogUXVlcnlMaXN0PExpc3RJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXZpZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFkZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBwcm9wczogYW55O1xuICBASW5wdXQoKSBzdHJpcGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsaWNrSXRlbTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb250ZW50SXRlbXMuZm9yRWFjaCgoaXRlbTogTGlzdEl0ZW1Db21wb25lbnQpID0+IHsgdGhpcy5oYW5kbGVJdGVtKGl0ZW0pOyB9KTtcbiAgICB0aGlzLnZpZXdJdGVtcy5mb3JFYWNoKChpdGVtOiBMaXN0SXRlbUNvbXBvbmVudCkgPT4geyB0aGlzLmhhbmRsZUl0ZW0oaXRlbSk7IH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBMaXN0U3R5bGVzO1xuICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICB9XG5cbiAgLy8gTWV0aG9kc1xuICBoYW5kbGVJdGVtKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5jb2xvciAmJiAhaXRlbS5jb2xvcikgeyBpdGVtLmNvbG9yID0gdGhpcy5jb2xvcjsgfVxuXG4gICAgaXRlbS5jbGlja2VkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNsaWNrSXRlbS5lbWl0KCk7XG4gICAgfSk7XG5cbiAgICBpdGVtLmRpdmlkZXIgPSB0aGlzLmRpdmlkZXI7XG4gICAgaXRlbS5wYWRkaW5nID0gdGhpcy5wYWRkaW5nO1xuICAgIGl0ZW0uc3RyaXBlZCA9IHRoaXMuc3RyaXBlZDtcblxuICAgIGl0ZW0ubmdPbkluaXQoKTtcbiAgfVxufVxuIl19