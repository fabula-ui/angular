/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, } from '@angular/core';
// Components
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';
export class SearchInputComponent extends InputComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.button = null;
        this.placeholder = 'Search...';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.button) {
            this.handleButton();
        }
        this.additionalStyles = SearchInputStyles;
        this.inputProps = this;
        this.initStyles();
    }
    // Methods
    /**
     * @return {?}
     */
    handleButton() {
        this.buttonProps = Object.assign({}, this.button);
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
            for (let key in this.button) {
                this.buttonProps[key] = this.button[key];
            }
        }
        if (this.buttonEl) {
            this.buttonEl.ngAfterViewInit();
        }
    }
}
SearchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-search-input',
                template: "<div class=\"fab-search-input\" data-fab-wrapper=\"searchInput\">\n  <fab-input [iconStart]=\"{ name: 'search' }\" [placeholder]=\"placeholder\" [props]=\"inputProps\" data-fab-wrapper=\"searchInput\">\n    <fab-button *ngIf=\"button\" [props]=\"buttonProps\">\n      <fab-inner-icon *ngIf=\"button && button.icon\" [icon]=\"button.icon\" [parentProps]=\"button\"></fab-inner-icon>\n    </fab-button>\n    <ng-content></ng-content>\n  </fab-input>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
SearchInputComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
SearchInputComponent.propDecorators = {
    button: [{ type: Input }],
    placeholder: [{ type: Input }],
    buttonEl: [{ type: ViewChild, args: [ButtonComponent,] }],
    inputEl: [{ type: ViewChild, args: [InputComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGlCQUFpQixNQUFNLDBEQUEwRCxDQUFDO0FBT3pGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxjQUFjOzs7OztJQVVwRCxZQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGckIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVg5QixXQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBV0YsQ0FBQzs7OztJQUVsQyxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQUU7UUFFekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELFlBQVk7UUFDUixJQUFJLENBQUMsV0FBVyxxQkFBUSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVoQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN4QzthQUFNLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM5QzthQUFNLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDaEQsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7U0FBRTtJQUMzRCxDQUFDOzs7WUFqREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLG1kQUE0Qzs7YUFDL0M7Ozs7WUFwQkcsVUFBVTtZQVdMLGFBQWE7OztxQkFXakIsS0FBSzswQkFDTCxLQUFLO3VCQUVMLFNBQVMsU0FBQyxlQUFlO3NCQUN6QixTQUFTLFNBQUMsY0FBYzs7OztJQUp6QixzQ0FBNEI7O0lBQzVCLDJDQUFtQzs7SUFFbkMsd0NBQXNEOztJQUN0RCx1Q0FBbUQ7O0lBRW5ELDJDQUFZOztJQUNaLDBDQUFXOztJQUdQLHFDQUF3Qjs7SUFDeEIsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgU2VhcmNoSW5wdXRTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZhYi1zZWFyY2gtaW5wdXQnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hJbnB1dENvbXBvbmVudCBleHRlbmRzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBidXR0b246IGFueSA9IG51bGw7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcblxuICAgIEBWaWV3Q2hpbGQoQnV0dG9uQ29tcG9uZW50KSBidXR0b25FbDogQnV0dG9uQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoSW5wdXRDb21wb25lbnQpIGlucHV0RWw6IElucHV0Q29tcG9uZW50O1xuXG4gICAgYnV0dG9uUHJvcHM7XG4gICAgaW5wdXRQcm9wcztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikgeyB0aGlzLmhhbmRsZUJ1dHRvbigpOyB9XG5cbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsU3R5bGVzID0gU2VhcmNoSW5wdXRTdHlsZXM7XG4gICAgICAgIHRoaXMuaW5wdXRQcm9wcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZHNcbiAgICBoYW5kbGVCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJvcHMgPSB7IC4uLnRoaXMuYnV0dG9uIH07XG4gICAgICAgIHRoaXMuYnV0dG9uUHJvcHMuY29sb3IgPSAncHJpbWFyeSc7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJvcHMuY29tcGFjdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJ1dHRvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJvcHMubGFiZWwgPSB0aGlzLmJ1dHRvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5idXR0b24gPT09ICdvYmplY3QnICYmIHRoaXMuYnV0dG9uLmxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByb3BzLmxhYmVsID0gdGhpcy5idXR0b24ubGFiZWw7XG4gICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiB0aGlzLmJ1dHRvbiA9PT0gJ29iamVjdCcgJiYgIXRoaXMuYnV0dG9uLmljb24gJiYgIXRoaXMuYnV0dG9uLmxhYmVsKSB8fCB0eXBlb2YgdGhpcy5idXR0b24gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25Qcm9wcy5sYWJlbCA9ICdTZWFyY2gnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uICYmIHR5cGVvZiB0aGlzLmJ1dHRvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJvcHNba2V5XSA9IHRoaXMuYnV0dG9uW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5idXR0b25FbCkgeyB0aGlzLmJ1dHRvbkVsLm5nQWZ0ZXJWaWV3SW5pdCgpOyB9XG4gICAgfVxufVxuIl19