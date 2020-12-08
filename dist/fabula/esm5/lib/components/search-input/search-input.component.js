/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild, } from '@angular/core';
// Components
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';
var SearchInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchInputComponent, _super);
    function SearchInputComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.button = null;
        _this.placeholder = 'Search...';
        return _this;
    }
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.button) {
            this.handleButton();
        }
        this.additionalStyles = SearchInputStyles;
        this.inputProps = this;
        this.initStyles();
    };
    // Methods
    // Methods
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.handleButton = 
    // Methods
    /**
     * @return {?}
     */
    function () {
        this.buttonProps = tslib_1.__assign({}, this.button);
        this.buttonProps.color = 'primary';
        this.buttonProps.compact = true;
        if (typeof this.button === 'string') {
            this.buttonProps.label = this.button;
        }
        else if (typeof this.button === 'object' && this.button.label) {
            this.buttonProps.label = this.button.label;
        }
        else if ((typeof this.button === 'object' && !this.button.icon && !this.button.label) || typeof this.button === 'boolean') {
            this.buttonProps.label = 'Search';
        }
        if (this.button && typeof this.button === 'object') {
            for (var key in this.button) {
                this.buttonProps[key] = this.button[key];
            }
        }
        if (this.buttonEl) {
            this.buttonEl.ngAfterViewInit();
        }
    };
    SearchInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-search-input',
                    template: "<div class=\"fab-search-input\" data-fab-wrapper=\"searchInput\">\n  <fab-input [iconStart]=\"{ name: 'search' }\" [placeholder]=\"placeholder\" [props]=\"inputProps\" data-fab-wrapper=\"searchInput\">\n    <fab-button *ngIf=\"button\" [props]=\"buttonProps\">\n      <fab-inner-icon *ngIf=\"button && button.icon\" [icon]=\"button.icon\" [parentProps]=\"button\"></fab-inner-icon>\n    </fab-button>\n    <ng-content></ng-content>\n  </fab-input>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    SearchInputComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    SearchInputComponent.propDecorators = {
        button: [{ type: Input }],
        placeholder: [{ type: Input }],
        buttonEl: [{ type: ViewChild, args: [ButtonComponent,] }],
        inputEl: [{ type: ViewChild, args: [InputComponent,] }]
    };
    return SearchInputComponent;
}(InputComponent));
export { SearchInputComponent };
if (false) {
    /** @type {?} */
    SearchInputComponent.prototype.button;
    /** @type {?} */
    SearchInputComponent.prototype.placeholder;
    /** @type {?} */
    SearchInputComponent.prototype.buttonEl;
    /** @type {?} */
    SearchInputComponent.prototype.inputEl;
    /** @type {?} */
    SearchInputComponent.prototype.buttonProps;
    /** @type {?} */
    SearchInputComponent.prototype.inputProps;
    /** @type {?} */
    SearchInputComponent.prototype.elRef;
    /** @type {?} */
    SearchInputComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7O0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxpQkFBaUIsTUFBTSwwREFBMEQsQ0FBQztBQUV6RjtJQUswQyxnREFBYztJQVVwRCw4QkFDVyxLQUFpQixFQUNqQixhQUE0QjtRQUZ2QyxZQUdJLGtCQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsU0FBRztRQUZ2QixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBWDlCLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsaUJBQVcsR0FBRyxXQUFXLENBQUM7O0lBV0YsQ0FBQzs7OztJQUVsQyx1Q0FBUTs7O0lBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FBRTtRQUV6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVOzs7OztJQUNWLDJDQUFZOzs7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsd0JBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFaEMsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDeEM7YUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDOUM7YUFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3pILElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNyQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ2hELEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQUU7SUFDM0QsQ0FBQzs7Z0JBakRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUU1QixtZEFBNEM7O2lCQUMvQzs7OztnQkFwQkcsVUFBVTtnQkFXTCxhQUFhOzs7eUJBV2pCLEtBQUs7OEJBQ0wsS0FBSzsyQkFFTCxTQUFTLFNBQUMsZUFBZTswQkFDekIsU0FBUyxTQUFDLGNBQWM7O0lBd0M3QiwyQkFBQztDQUFBLEFBbERELENBSzBDLGNBQWMsR0E2Q3ZEO1NBN0NZLG9CQUFvQjs7O0lBQzdCLHNDQUE0Qjs7SUFDNUIsMkNBQW1DOztJQUVuQyx3Q0FBc0Q7O0lBQ3RELHVDQUFtRDs7SUFFbkQsMkNBQVk7O0lBQ1osMENBQVc7O0lBR1AscUNBQXdCOztJQUN4Qiw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBTZWFyY2hJbnB1dFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLXNlYXJjaC1pbnB1dCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaElucHV0Q29tcG9uZW50IGV4dGVuZHMgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGJ1dHRvbjogYW55ID0gbnVsbDtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xuXG4gICAgQFZpZXdDaGlsZChCdXR0b25Db21wb25lbnQpIGJ1dHRvbkVsOiBCdXR0b25Db21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChJbnB1dENvbXBvbmVudCkgaW5wdXRFbDogSW5wdXRDb21wb25lbnQ7XG5cbiAgICBidXR0b25Qcm9wcztcbiAgICBpbnB1dFByb3BzO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7IHRoaXMuaGFuZGxlQnV0dG9uKCk7IH1cblxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxTdHlsZXMgPSBTZWFyY2hJbnB1dFN0eWxlcztcbiAgICAgICAgdGhpcy5pbnB1dFByb3BzID0gdGhpcztcbiAgICAgICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kc1xuICAgIGhhbmRsZUJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5idXR0b25Qcm9wcyA9IHsgLi4udGhpcy5idXR0b24gfTtcbiAgICAgICAgdGhpcy5idXR0b25Qcm9wcy5jb2xvciA9ICdwcmltYXJ5JztcbiAgICAgICAgdGhpcy5idXR0b25Qcm9wcy5jb21wYWN0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYnV0dG9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25Qcm9wcy5sYWJlbCA9IHRoaXMuYnV0dG9uO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmJ1dHRvbiA9PT0gJ29iamVjdCcgJiYgdGhpcy5idXR0b24ubGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJvcHMubGFiZWwgPSB0aGlzLmJ1dHRvbi5sYWJlbDtcbiAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHRoaXMuYnV0dG9uID09PSAnb2JqZWN0JyAmJiAhdGhpcy5idXR0b24uaWNvbiAmJiAhdGhpcy5idXR0b24ubGFiZWwpIHx8IHR5cGVvZiB0aGlzLmJ1dHRvbiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByb3BzLmxhYmVsID0gJ1NlYXJjaCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5idXR0b24gJiYgdHlwZW9mIHRoaXMuYnV0dG9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25Qcm9wc1trZXldID0gdGhpcy5idXR0b25ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVsKSB7IHRoaXMuYnV0dG9uRWwubmdBZnRlclZpZXdJbml0KCk7IH1cbiAgICB9XG59XG4iXX0=