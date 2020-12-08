/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-header/modal-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, ElementRef, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ModalHeaderStyles from '@fabula/core/styles/components/modal-header/modal-header';
import { CloseButtonComponent } from '../close-button/close-button.component';
export class ModalHeaderComponent extends ModalSectionComponent {
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
        this.clickedClose = new EventEmitter();
        this.init = false;
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
    ngAfterViewInit() {
        // Init modal section
        super.ngOnInit();
        // Set and apply styles
        this.styles = ModalHeaderStyles;
        this.initStyles();
        this.cdRef.detectChanges();
        this.init = true;
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.clickedClose.emit(true);
    }
}
ModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal-header',
                template: "<div class=\"fab-modal-header fab-modal-section\" data-fab-component=\"modalHeader\" *ngIf=\"init\">\n  <div class=\"fab-modal-header__content\">\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button [color]=\"color || parentColor\" (click)=\"closeModal()\"></fab-close-button>\n</div>"
            }] }
];
/** @nocollapse */
ModalHeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: FabulaService }
];
ModalHeaderComponent.propDecorators = {
    clickedClose: [{ type: Output }],
    closeButton: [{ type: ViewChild, args: [CloseButtonComponent,] }]
};
if (false) {
    /** @type {?} */
    ModalHeaderComponent.prototype.clickedClose;
    /** @type {?} */
    ModalHeaderComponent.prototype.closeButton;
    /** @type {?} */
    ModalHeaderComponent.prototype.init;
    /** @type {?} */
    ModalHeaderComponent.prototype.cdRef;
    /** @type {?} */
    ModalHeaderComponent.prototype.elRef;
    /** @type {?} */
    ModalHeaderComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0ksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxpQkFBaUIsTUFBTSwwREFBMEQsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU05RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEscUJBQXFCOzs7Ozs7SUFPN0QsWUFDUyxLQUF3QixFQUN4QixLQUFpQixFQUNqQixhQUE0QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSHZCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFUM0IsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTVDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFNb0IsQ0FBQzs7OztJQUVsQyxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLHFCQUFxQjtRQUNyQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGlUQUE0QzthQUM3Qzs7OztZQWZpRyxpQkFBaUI7WUFBL0QsVUFBVTtZQU1yRCxhQUFhOzs7MkJBV25CLE1BQU07MEJBRU4sU0FBUyxTQUFDLG9CQUFvQjs7OztJQUYvQiw0Q0FBNEM7O0lBRTVDLDJDQUFtRTs7SUFFbkUsb0NBQWE7O0lBR1gscUNBQStCOztJQUMvQixxQ0FBd0I7O0lBQ3hCLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0NoZWNrZWQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPdXRwdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTW9kYWxTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwtc2VjdGlvbi9tb2RhbC1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBNb2RhbEhlYWRlclN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgeyBDbG9zZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLW1vZGFsLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgTW9kYWxTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBPdXRwdXQoKSBjbGlja2VkQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChDbG9zZUJ1dHRvbkNvbXBvbmVudCkgY2xvc2VCdXR0b246IENsb3NlQnV0dG9uQ29tcG9uZW50O1xuXG4gIGluaXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEluaXQgbW9kYWwgc2VjdGlvblxuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAvLyBTZXQgYW5kIGFwcGx5IHN0eWxlc1xuICAgIHRoaXMuc3R5bGVzID0gTW9kYWxIZWFkZXJTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG5cbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmNsaWNrZWRDbG9zZS5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=