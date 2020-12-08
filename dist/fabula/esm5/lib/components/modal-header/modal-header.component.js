/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal-header/modal-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, ElementRef, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import ModalHeaderStyles from '@fabula/core/styles/components/modal-header/modal-header';
import { CloseButtonComponent } from '../close-button/close-button.component';
var ModalHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalHeaderComponent, _super);
    function ModalHeaderComponent(cdRef, elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.cdRef = cdRef;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.clickedClose = new EventEmitter();
        _this.init = false;
        return _this;
    }
    /**
     * @return {?}
     */
    ModalHeaderComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    ModalHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // Init modal section
        _super.prototype.ngOnInit.call(this);
        // Set and apply styles
        this.styles = ModalHeaderStyles;
        this.initStyles();
        this.cdRef.detectChanges();
        this.init = true;
    };
    /**
     * @return {?}
     */
    ModalHeaderComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.clickedClose.emit(true);
    };
    ModalHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-modal-header',
                    template: "<div class=\"fab-modal-header fab-modal-section\" data-fab-component=\"modalHeader\" *ngIf=\"init\">\n  <div class=\"fab-modal-header__content\">\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button [color]=\"color || parentColor\" (click)=\"closeModal()\"></fab-close-button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FabulaService }
    ]; };
    ModalHeaderComponent.propDecorators = {
        clickedClose: [{ type: Output }],
        closeButton: [{ type: ViewChild, args: [CloseButtonComponent,] }]
    };
    return ModalHeaderComponent;
}(ModalSectionComponent));
export { ModalHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNJLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztBQUdqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRzlELE9BQU8saUJBQWlCLE1BQU0sMERBQTBELENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUU7SUFJMEMsZ0RBQXFCO0lBTzdELDhCQUNTLEtBQXdCLEVBQ3hCLEtBQWlCLEVBQ2pCLGFBQTRCO1FBSHJDLFlBSUksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBSHpCLFdBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFUM0Isa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTVDLFVBQUksR0FBRyxLQUFLLENBQUM7O0lBTW9CLENBQUM7Ozs7SUFFbEMsaURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxxQkFBcUI7UUFDckIsaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFFakIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsaVRBQTRDO2lCQUM3Qzs7OztnQkFmaUcsaUJBQWlCO2dCQUEvRCxVQUFVO2dCQU1yRCxhQUFhOzs7K0JBV25CLE1BQU07OEJBRU4sU0FBUyxTQUFDLG9CQUFvQjs7SUE2QmpDLDJCQUFDO0NBQUEsQUFwQ0QsQ0FJMEMscUJBQXFCLEdBZ0M5RDtTQWhDWSxvQkFBb0I7OztJQUMvQiw0Q0FBNEM7O0lBRTVDLDJDQUFtRTs7SUFFbkUsb0NBQWE7O0lBR1gscUNBQStCOztJQUMvQixxQ0FBd0I7O0lBQ3hCLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0NoZWNrZWQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPdXRwdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTW9kYWxTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwtc2VjdGlvbi9tb2RhbC1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBNb2RhbEhlYWRlclN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgeyBDbG9zZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2Nsb3NlLWJ1dHRvbi9jbG9zZS1idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLW1vZGFsLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgTW9kYWxTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBPdXRwdXQoKSBjbGlja2VkQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChDbG9zZUJ1dHRvbkNvbXBvbmVudCkgY2xvc2VCdXR0b246IENsb3NlQnV0dG9uQ29tcG9uZW50O1xuXG4gIGluaXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEluaXQgbW9kYWwgc2VjdGlvblxuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAvLyBTZXQgYW5kIGFwcGx5IHN0eWxlc1xuICAgIHRoaXMuc3R5bGVzID0gTW9kYWxIZWFkZXJTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG5cbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmluaXQgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmNsaWNrZWRDbG9zZS5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=