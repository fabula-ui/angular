/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-toggle/dropdown-toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
// Components
import { ButtonComponent } from '../button/button.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';
export class DropdownToggleComponent extends ButtonComponent {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(cdRef, elRef, fabulaService) {
        super(elRef, fabulaService);
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.arrow = true;
        this.isOpen = false;
        this.toggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.props = Object.assign({}, this);
        this.styles = DropdownToggleStyles;
        this.initStyles();
    }
    /**
     * @return {?}
     */
    handleClick() {
        this.toggle.emit(true);
    }
    /**
     * @return {?}
     */
    get arrowIsOnlyChild() {
        if (this.labelEl && this.labelEl.nativeElement && this.labelEl.nativeElement.childNodes) {
            return !this.labelEl.nativeElement.childNodes.length;
        }
        else {
            return false;
        }
    }
}
DropdownToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-toggle',
                template: "<div class=\"fab-dropdown-toggle\" (click)=\"handleClick()\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\">\n  <fab-button [props]=\"props\">\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"!label\" #label>\n      <ng-content></ng-content>\n    </span>\n    <span class=\"fab-dropdown-toggle__label\" *ngIf=\"label\">{{ label }}</span>\n    <span class=\"fab-dropdown-toggle__chevron\" *ngIf=\"arrow\" [attr.data-only-child]=\"arrowIsOnlyChild\">\n      <fab-icon name=\"chevron-down\"></fab-icon>\n    </span>\n  </fab-button>\n</div>"
            }] }
];
/** @nocollapse */
DropdownToggleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService }
];
DropdownToggleComponent.propDecorators = {
    arrow: [{ type: Input }],
    direction: [{ type: Input }],
    icon: [{ type: Input }],
    label: [{ type: Input }],
    isOpen: [{ type: Input }],
    toggle: [{ type: Output }],
    labelEl: [{ type: ViewChild, args: ['label',] }]
};
if (false) {
    /** @type {?} */
    DropdownToggleComponent.prototype.arrow;
    /** @type {?} */
    DropdownToggleComponent.prototype.direction;
    /** @type {?} */
    DropdownToggleComponent.prototype.icon;
    /** @type {?} */
    DropdownToggleComponent.prototype.label;
    /** @type {?} */
    DropdownToggleComponent.prototype.isOpen;
    /** @type {?} */
    DropdownToggleComponent.prototype.toggle;
    /** @type {?} */
    DropdownToggleComponent.prototype.labelEl;
    /** @type {?} */
    DropdownToggleComponent.prototype.cdRef;
    /** @type {?} */
    DropdownToggleComponent.prototype.elRef;
    /** @type {?} */
    DropdownToggleComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Ryb3Bkb3duLXRvZ2dsZS9kcm9wZG93bi10b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQU03RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8sb0JBQW9CLE1BQU0sZ0VBQWdFLENBQUM7QUFNbEcsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQWU7Ozs7OztJQVd4RCxZQUNXLEtBQXdCLEVBQ3hCLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ2pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFIdkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWI5QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBSWIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVkLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVF0QixDQUFDOzs7O0lBRXBDLGtCQUFrQjtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxxQkFBUSxJQUFJLENBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQ3JGLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQ3hEO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7OztZQXpDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNmpCQUErQzthQUNsRDs7OztZQXpCRyxpQkFBaUI7WUFFakIsVUFBVTtZQWVMLGFBQWE7OztvQkFVakIsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUVMLE1BQU07c0JBRU4sU0FBUyxTQUFDLE9BQU87Ozs7SUFSbEIsd0NBQXNCOztJQUN0Qiw0Q0FBMkI7O0lBQzNCLHVDQUFvQjs7SUFDcEIsd0NBQXVCOztJQUN2Qix5Q0FBd0I7O0lBRXhCLHlDQUF5RDs7SUFFekQsMENBQXdDOztJQUdwQyx3Q0FBK0I7O0lBQy9CLHdDQUF3Qjs7SUFDeEIsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdDaGVja2VkLFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuXG4vLyBNb2RlbHNcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbi5tb2RlbCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBEcm9wZG93blRvZ2dsZVN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvZHJvcGRvd24tdG9nZ2xlL2Ryb3Bkb3duLXRvZ2dsZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLWRyb3Bkb3duLXRvZ2dsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duVG9nZ2xlQ29tcG9uZW50IGV4dGVuZHMgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25Jbml0IHtcbiAgICBASW5wdXQoKSBhcnJvdyA9IHRydWU7XG4gICAgQElucHV0KCkgZGlyZWN0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaWNvbjogSWNvbjtcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAVmlld0NoaWxkKCdsYWJlbCcpIGxhYmVsRWw6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHsgLi4udGhpcyB9O1xuICAgICAgICB0aGlzLnN0eWxlcyA9IERyb3Bkb3duVG9nZ2xlU3R5bGVzO1xuICAgICAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy50b2dnbGUuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBnZXQgYXJyb3dJc09ubHlDaGlsZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubGFiZWxFbCAmJiB0aGlzLmxhYmVsRWwubmF0aXZlRWxlbWVudCAmJiB0aGlzLmxhYmVsRWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19