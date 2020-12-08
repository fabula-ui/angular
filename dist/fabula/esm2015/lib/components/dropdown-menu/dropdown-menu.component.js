/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown-menu/dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DropdownMenuComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.clickToClose = false;
        this.padding = true;
        this.clickItem = new EventEmitter();
        this.closed = new EventEmitter();
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.contentHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        (header) => { this.handleDropdownHeader(header); }));
        this.contentItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleDropdownItem(item); }));
        this.divider.forEach((/**
         * @param {?} divider
         * @return {?}
         */
        (divider) => { this.handleDivider(divider); }));
        this.viewHeader.forEach((/**
         * @param {?} header
         * @return {?}
         */
        (header) => { this.handleDropdownHeader(header); }));
        this.viewItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => { this.handleDropdownItem(item); }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = DropdownMenuStyles;
        this.initStyles();
    }
    // Methods
    /**
     * @param {?} divider
     * @return {?}
     */
    handleDivider(divider) {
        if (this.color) {
            divider.parentColor = this.color;
        }
        divider.refreshStyles();
    }
    /**
     * @param {?} header
     * @return {?}
     */
    handleDropdownHeader(header) {
        if (this.color) {
            header.parentColor = this.color;
        }
        header.ngAfterViewInit();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    handleDropdownItem(item) {
        item.clicked.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.clickToClose || item.clickToClose || item.props.clickToClose) {
                this.closed.emit();
            }
            this.clickItem.emit();
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
    }
    // Listeners
    /**
     * @param {?} events
     * @return {?}
     */
    listen(events) {
        events.toggle.subscribe((/**
         * @param {?} isOpen
         * @return {?}
         */
        isOpen => {
            this.isOpen = isOpen;
        }));
    }
}
DropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown-menu',
                template: "<div class=\"fab-dropdown-menu\" [attr.data-direction]=\"direction\" [attr.data-open]=\"isOpen\"\n  data-fab-component=\"dropdownMenu\">\n  <ng-container *ngIf=\"items\">\n    <fab-dropdown-item *ngFor=\"let item of items\" [props]=\"item\"></fab-dropdown-item>\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n\n  <ng-container *ngIf=\"!items\">\n    <ng-content *ngTemplateOutlet=\"content\"></ng-content>\n  </ng-container>\n</div>\n\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
DropdownMenuComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFDTixZQUFZLEVBRVosZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEdBQ2YsTUFBTSxlQUFlLENBQUM7O0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGtCQUFrQixNQUFNLDREQUE0RCxDQUFDO0FBTTVGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUFlOzs7OztJQW9CdEQsWUFDVyxLQUFpQixFQUNqQixhQUE0QjtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnJCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFkOUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJckIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUdkLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUtrQixDQUFDOzs7O0lBRWxDLGVBQWU7UUFDWCxJQUFJ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LFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix5aUJBQTZDO2FBQ2hEOzs7O1lBMUJHLFVBQVU7WUFrQkwsYUFBYTs7OzRCQVVqQixlQUFlLFNBQUMsdUJBQXVCOzJCQUN2QyxlQUFlLFNBQUMscUJBQXFCO3NCQUNyQyxlQUFlLFNBQUMsZ0JBQWdCO3lCQUNoQyxZQUFZLFNBQUMsdUJBQXVCO3dCQUNwQyxZQUFZLFNBQUMscUJBQXFCO3dCQUVsQyxLQUFLOzJCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUVMLE1BQU07cUJBQ04sTUFBTTs7OztJQWZQLDhDQUE0Rjs7SUFDNUYsNkNBQXVGOztJQUN2Rix3Q0FBd0U7O0lBQ3hFLDJDQUFzRjs7SUFDdEYsMENBQWlGOztJQUVqRiwwQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIsc0NBQXVCOztJQUN2QiwwQ0FBMkI7O0lBQzNCLHNDQUEyQjs7SUFDM0Isd0NBQXdCOztJQUN4QixxQ0FBc0I7O0lBRXRCLDBDQUE0RDs7SUFDNUQsdUNBQXlEOztJQUV6RCx1Q0FBZTs7SUFHWCxzQ0FBd0I7O0lBQ3hCLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2RpdmlkZXIvZGl2aWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25IZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi1oZWFkZXIvZHJvcGRvd24taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IERyb3Bkb3duTWVudVN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWItZHJvcGRvd24tbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnVDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRHJvcGRvd25IZWFkZXJDb21wb25lbnQpIGNvbnRlbnRIZWFkZXI6IFF1ZXJ5TGlzdDxEcm9wZG93bkhlYWRlckNvbXBvbmVudD47XG4gICAgQENvbnRlbnRDaGlsZHJlbihEcm9wZG93bkl0ZW1Db21wb25lbnQpIGNvbnRlbnRJdGVtczogUXVlcnlMaXN0PERyb3Bkb3duSXRlbUNvbXBvbmVudD47XG4gICAgQENvbnRlbnRDaGlsZHJlbihEaXZpZGVyQ29tcG9uZW50KSBkaXZpZGVyOiBRdWVyeUxpc3Q8RGl2aWRlckNvbXBvbmVudD47XG4gICAgQFZpZXdDaGlsZHJlbihEcm9wZG93bkhlYWRlckNvbXBvbmVudCkgdmlld0hlYWRlcjogUXVlcnlMaXN0PERyb3Bkb3duSGVhZGVyQ29tcG9uZW50PjtcbiAgICBAVmlld0NoaWxkcmVuKERyb3Bkb3duSXRlbUNvbXBvbmVudCkgdmlld0l0ZW1zOiBRdWVyeUxpc3Q8RHJvcGRvd25JdGVtQ29tcG9uZW50PjtcblxuICAgIEBJbnB1dCgpIGFsaWdubWVudDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsaWNrVG9DbG9zZSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGlyZWN0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXRlbXM6IEFycmF5PGFueT47XG4gICAgQElucHV0KCkgcGFkZGluZyA9IHRydWU7XG4gICAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGNsaWNrSXRlbTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBpc09wZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRIZWFkZXIuZm9yRWFjaCgoaGVhZGVyOiBEcm9wZG93bkhlYWRlckNvbXBvbmVudCkgPT4geyB0aGlzLmhhbmRsZURyb3Bkb3duSGVhZGVyKGhlYWRlcik7IH0pO1xuICAgICAgICB0aGlzLmNvbnRlbnRJdGVtcy5mb3JFYWNoKChpdGVtOiBEcm9wZG93bkl0ZW1Db21wb25lbnQpID0+IHsgdGhpcy5oYW5kbGVEcm9wZG93bkl0ZW0oaXRlbSk7IH0pO1xuICAgICAgICB0aGlzLmRpdmlkZXIuZm9yRWFjaCgoZGl2aWRlcjogRGl2aWRlckNvbXBvbmVudCkgPT4geyB0aGlzLmhhbmRsZURpdmlkZXIoZGl2aWRlcik7IH0pO1xuICAgICAgICB0aGlzLnZpZXdIZWFkZXIuZm9yRWFjaCgoaGVhZGVyOiBEcm9wZG93bkhlYWRlckNvbXBvbmVudCkgPT4geyB0aGlzLmhhbmRsZURyb3Bkb3duSGVhZGVyKGhlYWRlcik7IH0pO1xuICAgICAgICB0aGlzLnZpZXdJdGVtcy5mb3JFYWNoKChpdGVtOiBEcm9wZG93bkl0ZW1Db21wb25lbnQpID0+IHsgdGhpcy5oYW5kbGVEcm9wZG93bkl0ZW0oaXRlbSk7IH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IERyb3Bkb3duTWVudVN0eWxlcztcbiAgICAgICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kc1xuICAgIGhhbmRsZURpdmlkZXIoZGl2aWRlcikge1xuICAgICAgICBpZiAodGhpcy5jb2xvcikgeyBkaXZpZGVyLnBhcmVudENvbG9yID0gdGhpcy5jb2xvcjsgfVxuXG4gICAgICAgIGRpdmlkZXIucmVmcmVzaFN0eWxlcygpO1xuICAgIH1cblxuICAgIGhhbmRsZURyb3Bkb3duSGVhZGVyKGhlYWRlcikge1xuICAgICAgICBpZiAodGhpcy5jb2xvcikgeyBoZWFkZXIucGFyZW50Q29sb3IgPSB0aGlzLmNvbG9yOyB9XG5cbiAgICAgICAgaGVhZGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZURyb3Bkb3duSXRlbShpdGVtKSB7XG4gICAgICAgIGl0ZW0uY2xpY2tlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tUb0Nsb3NlIHx8IGl0ZW0uY2xpY2tUb0Nsb3NlIHx8IGl0ZW0ucHJvcHMuY2xpY2tUb0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNsaWNrSXRlbS5lbWl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7IGl0ZW0ucGFyZW50Q29sb3IgPSB0aGlzLmNvbG9yOyB9XG4gICAgICAgIGlmICh0aGlzLmNsaWNrVG9DbG9zZSkgeyBpdGVtLmNsaWNrVG9DbG9zZSA9IHRoaXMuY2xpY2tUb0Nsb3NlOyB9XG4gICAgICAgIGlmICh0aGlzLnNpemUgJiYgIWl0ZW0uc2l6ZSkgeyBpdGVtLnNpemUgPSB0aGlzLnNpemU7IH1cblxuICAgICAgICBpdGVtLnBhZGRpbmcgPSB0aGlzLnBhZGRpbmc7XG5cbiAgICAgICAgaXRlbS5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuZXJzXG4gICAgbGlzdGVuKGV2ZW50cykge1xuICAgICAgICBldmVudHMudG9nZ2xlLnN1YnNjcmliZShpc09wZW4gPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBpc09wZW47XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==