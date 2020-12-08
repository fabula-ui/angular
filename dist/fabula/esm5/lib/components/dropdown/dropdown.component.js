/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown/dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ContentChild, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../dropdown-toggle/dropdown-toggle.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';
var DropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownComponent, _super);
    function DropdownComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.alignment = 'left';
        _this.direction = 'down';
        _this.expand = false;
        _this.isOpen = false;
        _this.close = new EventEmitter();
        _this.open = new EventEmitter();
        _this.toggle = new EventEmitter();
        _this.inline = true;
        return _this;
    }
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.handleChildren();
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.styles = DropdownStyles;
        this.initStyles();
        this.callbacks = (/**
         * @return {?}
         */
        function () { _this.handleChildren(); });
        // Event Listener
        document.addEventListener('click', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.handleClick(e); }));
    };
    // Methods
    // Methods
    /**
     * @return {?}
     */
    DropdownComponent.prototype.handleChildren = 
    // Methods
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dropdownMenu) {
            this.dropdownMenu.alignment = this.alignment;
            this.dropdownMenu.direction = this.direction;
            this.dropdownMenu.listen({ toggle: this.toggle });
            this.dropdownMenu.closed.subscribe((/**
             * @return {?}
             */
            function () { return _this.handleToggle(); }));
            this.dropdownMenu.ngOnInit();
        }
        if (this.dropdownToggle) {
            this.dropdownToggle.direction = this.direction;
            this.dropdownToggle.toggle.subscribe((/**
             * @return {?}
             */
            function () { return _this.handleToggle(); }));
            if (this.expand) {
                this.dropdownToggle.expand = true;
            }
            this.dropdownToggle.ngOnInit();
        }
        this.refreshStyles();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DropdownComponent.prototype.handleClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var host = this.elRef.nativeElement;
        if (!host.contains(e.target) && this.isOpen) {
            this.handleToggle();
        }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.handleToggle = /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.dropdownToggle.isOpen = this.isOpen;
        this.toggle.emit(this.isOpen);
        if (!this.isOpen) {
            this.close.emit();
        }
        if (this.isOpen) {
            this.open.emit();
        }
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-dropdown',
                    template: "<div class=\"fab-dropdown\" [attr.data-open]=\"isOpen\" data-fab-component=\"dropdown\">\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    DropdownComponent.propDecorators = {
        dropdownMenu: [{ type: ContentChild, args: [DropdownMenuComponent,] }],
        dropdownToggle: [{ type: ContentChild, args: [DropdownToggleComponent,] }],
        alignment: [{ type: Input }],
        direction: [{ type: Input }],
        expand: [{ type: Input }],
        isOpen: [{ type: Input }],
        close: [{ type: Output }],
        open: [{ type: Output }],
        toggle: [{ type: Output }]
    };
    return DropdownComponent;
}(CommonComponent));
export { DropdownComponent };
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.dropdownMenu;
    /** @type {?} */
    DropdownComponent.prototype.dropdownToggle;
    /** @type {?} */
    DropdownComponent.prototype.alignment;
    /** @type {?} */
    DropdownComponent.prototype.direction;
    /** @type {?} */
    DropdownComponent.prototype.expand;
    /** @type {?} */
    DropdownComponent.prototype.isOpen;
    /** @type {?} */
    DropdownComponent.prototype.close;
    /** @type {?} */
    DropdownComponent.prototype.open;
    /** @type {?} */
    DropdownComponent.prototype.toggle;
    /** @type {?} */
    DropdownComponent.prototype.inline;
    /** @type {?} */
    DropdownComponent.prototype.elRef;
    /** @type {?} */
    DropdownComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxZQUFZLEVBRVosTUFBTSxFQUNOLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztBQUd2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sY0FBYyxNQUFNLGtEQUFrRCxDQUFDO0FBRTlFO0lBS3VDLDZDQUFlO0lBZWxELDJCQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnZDLFlBR00sa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFiOUIsZUFBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixlQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWQsV0FBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFVBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUFLcUIsQ0FBQzs7OztJQUVwQywyQ0FBZTs7O0lBQWY7UUFDSSxJQUFJLENB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Qyx1QkFBdUI7NEJBRXBDLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBRUwsTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU07O0lBd0RYLHdCQUFDO0NBQUEsQUF4RUQsQ0FLdUMsZUFBZSxHQW1FckQ7U0FuRVksaUJBQWlCOzs7SUFDMUIseUNBQXlFOztJQUN6RSwyQ0FBK0U7O0lBRS9FLHNDQUE0Qjs7SUFDNUIsc0NBQTRCOztJQUM1QixtQ0FBd0I7O0lBQ3hCLG1DQUF3Qjs7SUFFeEIsa0NBQXdEOztJQUN4RCxpQ0FBdUQ7O0lBQ3ZELG1DQUF5RDs7SUFFekQsbUNBQWM7O0lBR1Ysa0NBQXdCOztJQUN4QiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25Ub2dnbGVDb21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi10b2dnbGUvZHJvcGRvd24tdG9nZ2xlLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBEcm9wZG93blN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1kcm9wZG93bicsXG4gICAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgQENvbnRlbnRDaGlsZChEcm9wZG93bk1lbnVDb21wb25lbnQpIGRyb3Bkb3duTWVudTogRHJvcGRvd25NZW51Q29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGQoRHJvcGRvd25Ub2dnbGVDb21wb25lbnQpIGRyb3Bkb3duVG9nZ2xlOiBEcm9wZG93blRvZ2dsZUNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgpIGFsaWdubWVudCA9ICdsZWZ0JztcbiAgICBASW5wdXQoKSBkaXJlY3Rpb24gPSAnZG93bic7XG4gICAgQElucHV0KCkgZXhwYW5kID0gZmFsc2U7XG4gICAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGlubGluZSA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0gRHJvcGRvd25TdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9ICgpID0+IHsgdGhpcy5oYW5kbGVDaGlsZHJlbigpOyB9O1xuXG4gICAgICAgIC8vIEV2ZW50IExpc3RlbmVyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpKTtcbiAgICB9XG5cbiAgICAvLyBNZXRob2RzXG4gICAgaGFuZGxlQ2hpbGRyZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duTWVudSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnUuYWxpZ25tZW50ID0gdGhpcy5hbGlnbm1lbnQ7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudS5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25NZW51Lmxpc3Rlbih7IHRvZ2dsZTogdGhpcy50b2dnbGUgfSk7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudS5jbG9zZWQuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlVG9nZ2xlKCkpO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnUubmdPbkluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duVG9nZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blRvZ2dsZS50b2dnbGUuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlVG9nZ2xlKCkpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmQpIHsgdGhpcy5kcm9wZG93blRvZ2dsZS5leHBhbmQgPSB0cnVlOyB9XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlLm5nT25Jbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZnJlc2hTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmICghaG9zdC5jb250YWlucyhlLnRhcmdldCkgJiYgdGhpcy5pc09wZW4pIHsgdGhpcy5oYW5kbGVUb2dnbGUoKTsgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICAgIHRoaXMuZHJvcGRvd25Ub2dnbGUuaXNPcGVuID0gdGhpcy5pc09wZW47XG4gICAgICAgIHRoaXMudG9nZ2xlLmVtaXQodGhpcy5pc09wZW4pO1xuXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHsgdGhpcy5jbG9zZS5lbWl0KCk7IH1cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7IHRoaXMub3Blbi5lbWl0KCk7IH1cbiAgICB9XG59XG4iXX0=