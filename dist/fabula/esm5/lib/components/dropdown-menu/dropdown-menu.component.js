/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-menu/dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, EventEmitter, ContentChildren, QueryList, ViewChildren, } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { DividerComponent } from '../divider/divider.component';
import { DropdownHeaderComponent } from '../dropdown-header/dropdown-header.component';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';
var DropdownMenuComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownMenuComponent, _super);
    function DropdownMenuComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.clickToClose = false;
        _this.padding = true;
        _this.clickItem = new EventEmitter();
        _this.closed = new EventEmitter();
        _this.isOpen = false;
        return _this;
    }
    /**
     * @return {?}
     */
    DropdownMenuComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contentHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) { _this.handleDropdownHeader(header); }));
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleDropdownItem(item); }));
        this.divider.forEach((/**
         * @param {?} divider
         * @return {?}
         */
        function (divider) { _this.handleDivider(divider); }));
        this.viewHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) { _this.handleDropdownHeader(header); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { _this.handleDropdownItem(item); }));
    };
    /**
     * @return {?}
     */
    DropdownMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styles = DropdownMenuStyles;
        this.initStyles();
    };
    // Methods
    // Methods
    /**
     * @param {?} divider
     * @return {?}
     */
    DropdownMenuComponent.prototype.handleDivider = 
    // Methods
    /**
     * @param {?} divider
     * @return {?}
     */
    function (divider) {
        if (this.color) {
            divider.parentColor = this.color;
        }
        divider.refreshStyles();
    };
    /**
     * @param {?} header
     * @return {?}
     */
    DropdownMenuComponent.prototype.handleDropdownHeader = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        if (this.color) {
            header.parentColor = this.color;
        }
        header.ngAfterViewInit();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DropdownMenuComponent.prototype.handleDropdownItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        item.clicked.subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.clickToClose || item.clickToClose || item.props.clickToClose) {
                _this.closed.emit();
            }
            _this.clickItem.emit();
        }));
        if (this.color) {
            item.parentColor = this.color;
        }
        if (this.clickToClose) {
            item.clickToClose = this.clickToClose;
        }
        if (this.size && !item.size) {
            item.size = this.size;
        }
        item.padding = this.padding;
        item.ngAfterViewInit();
        this.refreshStyles();
    };
    // Listeners
    // Listeners
    /**
     * @param {?} events
     * @return {?}
     */
    DropdownMenuComponent.prototype.listen = 
    // Listeners
    /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        events.toggle.subscribe((/**
         * @param {?} isOpen
         * @return {?}
         */
        function (isOpen) {
            _this.isOpen = isOpen;
        }));
    };
    DropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dropdown-menu',
                    template: "<div class=\"fab-dropdown-menu\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\"\n  data-fab-component=\"dropdownMenu\">\n  <ng-container *ngIf=\"items\">\n    <fab-dropdown-item *ngFor=\"let item of items\" [props]=\"item\"></fab-dropdown-item>\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"!items\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    DropdownMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownMenuComponent.propDecorators = {
        contentHeader: [{ type: ContentChildren, args: [DropdownHeaderComponent,] }],
        contentItems: [{ type: ContentChildren, args: [DropdownItemComponent,] }],
        divider: [{ type: ContentChildren, args: [DividerComponent,] }],
        viewHeader: [{ type: ViewChildren, args: [DropdownHeaderComponent,] }],
        viewItems: [{ type: ViewChildren, args: [DropdownItemComponent,] }],
        alignment: [{ type: Input }],
        clickToClose: [{ type: Input }],
        color: [{ type: Input }],
        direction: [{ type: Input }],
        items: [{ type: Input }],
        padding: [{ type: Input }],
        size: [{ type: Input }],
        clickItem: [{ type: Output }],
        closed: [{ type: Output }]
    };
    return DropdownMenuComponent;
}(CommonComponent));
export { DropdownMenuComponent };
if (false) {
    /** @type {?} */
    DropdownMenuComponent.prototype.contentHeader;
    /** @type {?} */
    DropdownMenuComponent.prototype.contentItems;
    /** @type {?} */
    DropdownMenuComponent.prototype.divider;
    /** @type {?} */
    DropdownMenuComponent.prototype.viewHeader;
    /** @type {?} */
    DropdownMenuComponent.prototype.viewItems;
    /** @type {?} */
    DropdownMenuComponent.prototype.alignment;
    /** @type {?} */
    DropdownMenuComponent.prototype.clickToClose;
    /** @type {?} */
    DropdownMenuComponent.prototype.color;
    /** @type {?} */
    DropdownMenuComponent.prototype.direction;
    /** @type {?} */
    DropdownMenuComponent.prototype.items;
    /** @type {?} */
    DropdownMenuComponent.prototype.padding;
    /** @type {?} */
    DropdownMenuComponent.prototype.size;
    /** @type {?} */
    DropdownMenuComponent.prototype.clickItem;
    /** @type {?} */
    DropdownMenuComponent.prototype.closed;
    /** @type {?} */
    DropdownMenuComponent.prototype.isOpen;
    /** @type {?} */
    DropdownMenuComponent.prototype.elRef;
    /** @type {?} */
    DropdownMenuComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUVaLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxHQUNmLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxrQkFBa0IsTUFBTSw0REFBNEQsQ0FBQztBQUU1RjtJQUkyQyxpREFBZTtJQW9CdEQsK0JBQ1csS0FBaUIsRUFDakIsYUFBNEI7UUFGdkMsWUFHSSxrQkFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLFNBQUc7UUFGdkIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWQ5QixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUlyQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBR2QsZUFBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RCxZQUFNLEdBQUcsS0FBSyxDQUFDOztJQUtrQixDQUFDOzs7O0lBRWxDLCtDQUFlOzs7SUFBZjtRQUFBLGlCQU1DO1FBTEcs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LENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBL0VKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix5aUJBQTZDO2lCQUNoRDs7OztnQkExQkcsVUFBVTtnQkFrQkwsYUFBYTs7O2dDQVVqQixlQUFlLFNBQUMsdUJBQXVCOytCQUN2QyxlQUFlLFNBQUMscUJBQXFCOzBCQUNyQyxlQUFlLFNBQUMsZ0JBQWdCOzZCQUNoQyxZQUFZLFNBQUMsdUJBQXVCOzRCQUNwQyxZQUFZLFNBQUMscUJBQXFCOzRCQUVsQyxLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUVMLE1BQU07eUJBQ04sTUFBTTs7SUE0RFgsNEJBQUM7Q0FBQSxBQWhGRCxDQUkyQyxlQUFlLEdBNEV6RDtTQTVFWSxxQkFBcUI7OztJQUM5Qiw4Q0FBNEY7O0lBQzVGLDZDQUF1Rjs7SUFDdkYsd0NBQXdFOztJQUN4RSwyQ0FBc0Y7O0lBQ3RGLDBDQUFpRjs7SUFFakYsMENBQTJCOztJQUMzQiw2Q0FBOEI7O0lBQzlCLHNDQUF1Qjs7SUFDdkIsMENBQTJCOztJQUMzQixzQ0FBMkI7O0lBQzNCLHdDQUF3Qjs7SUFDeEIscUNBQXNCOztJQUV0QiwwQ0FBNEQ7O0lBQzVELHVDQUF5RDs7SUFFekQsdUNBQWU7O0lBR1gsc0NBQXdCOztJQUN4Qiw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IERpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuLi9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24taGVhZGVyL2Ryb3Bkb3duLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24taXRlbS9kcm9wZG93bi1pdGVtLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBEcm9wZG93bk1lbnVTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLWRyb3Bkb3duLW1lbnUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICBAQ29udGVudENoaWxkcmVuKERyb3Bkb3duSGVhZGVyQ29tcG9uZW50KSBjb250ZW50SGVhZGVyOiBRdWVyeUxpc3Q8RHJvcGRvd25IZWFkZXJDb21wb25lbnQ+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRHJvcGRvd25JdGVtQ29tcG9uZW50KSBjb250ZW50SXRlbXM6IFF1ZXJ5TGlzdDxEcm9wZG93bkl0ZW1Db21wb25lbnQ+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRGl2aWRlckNvbXBvbmVudCkgZGl2aWRlcjogUXVlcnlMaXN0PERpdmlkZXJDb21wb25lbnQ+O1xuICAgIEBWaWV3Q2hpbGRyZW4oRHJvcGRvd25IZWFkZXJDb21wb25lbnQpIHZpZXdIZWFkZXI6IFF1ZXJ5TGlzdDxEcm9wZG93bkhlYWRlckNvbXBvbmVudD47XG4gICAgQFZpZXdDaGlsZHJlbihEcm9wZG93bkl0ZW1Db21wb25lbnQpIHZpZXdJdGVtczogUXVlcnlMaXN0PERyb3Bkb3duSXRlbUNvbXBvbmVudD47XG5cbiAgICBASW5wdXQoKSBhbGlnbm1lbnQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjbGlja1RvQ2xvc2UgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRpcmVjdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIEBJbnB1dCgpIHBhZGRpbmcgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBjbGlja0l0ZW06IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgaXNPcGVuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50SGVhZGVyLmZvckVhY2goKGhlYWRlcjogRHJvcGRvd25IZWFkZXJDb21wb25lbnQpID0+IHsgdGhpcy5oYW5kbGVEcm9wZG93bkhlYWRlcihoZWFkZXIpOyB9KTtcbiAgICAgICAgdGhpcy5jb250ZW50SXRlbXMuZm9yRWFjaCgoaXRlbTogRHJvcGRvd25JdGVtQ29tcG9uZW50KSA9PiB7IHRoaXMuaGFuZGxlRHJvcGRvd25JdGVtKGl0ZW0pOyB9KTtcbiAgICAgICAgdGhpcy5kaXZpZGVyLmZvckVhY2goKGRpdmlkZXI6IERpdmlkZXJDb21wb25lbnQpID0+IHsgdGhpcy5oYW5kbGVEaXZpZGVyKGRpdmlkZXIpOyB9KTtcbiAgICAgICAgdGhpcy52aWV3SGVhZGVyLmZvckVhY2goKGhlYWRlcjogRHJvcGRvd25IZWFkZXJDb21wb25lbnQpID0+IHsgdGhpcy5oYW5kbGVEcm9wZG93bkhlYWRlcihoZWFkZXIpOyB9KTtcbiAgICAgICAgdGhpcy52aWV3SXRlbXMuZm9yRWFjaCgoaXRlbTogRHJvcGRvd25JdGVtQ29tcG9uZW50KSA9PiB7IHRoaXMuaGFuZGxlRHJvcGRvd25JdGVtKGl0ZW0pOyB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBEcm9wZG93bk1lbnVTdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZHNcbiAgICBoYW5kbGVEaXZpZGVyKGRpdmlkZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHsgZGl2aWRlci5wYXJlbnRDb2xvciA9IHRoaXMuY29sb3I7IH1cblxuICAgICAgICBkaXZpZGVyLnJlZnJlc2hTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcm9wZG93bkhlYWRlcihoZWFkZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHsgaGVhZGVyLnBhcmVudENvbG9yID0gdGhpcy5jb2xvcjsgfVxuXG4gICAgICAgIGhlYWRlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcm9wZG93bkl0ZW0oaXRlbSkge1xuICAgICAgICBpdGVtLmNsaWNrZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrVG9DbG9zZSB8fCBpdGVtLmNsaWNrVG9DbG9zZSB8fCBpdGVtLnByb3BzLmNsaWNrVG9DbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkLmVtaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jbGlja0l0ZW0uZW1pdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb2xvcikgeyBpdGVtLnBhcmVudENvbG9yID0gdGhpcy5jb2xvcjsgfVxuICAgICAgICBpZiAodGhpcy5jbGlja1RvQ2xvc2UpIHsgaXRlbS5jbGlja1RvQ2xvc2UgPSB0aGlzLmNsaWNrVG9DbG9zZTsgfVxuICAgICAgICBpZiAodGhpcy5zaXplICYmICFpdGVtLnNpemUpIHsgaXRlbS5zaXplID0gdGhpcy5zaXplOyB9XG5cbiAgICAgICAgaXRlbS5wYWRkaW5nID0gdGhpcy5wYWRkaW5nO1xuXG4gICAgICAgIGl0ZW0ubmdBZnRlclZpZXdJbml0KCk7XG4gICAgICAgIHRoaXMucmVmcmVzaFN0eWxlcygpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbmVyc1xuICAgIGxpc3RlbihldmVudHMpIHtcbiAgICAgICAgZXZlbnRzLnRvZ2dsZS5zdWJzY3JpYmUoaXNPcGVuID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=