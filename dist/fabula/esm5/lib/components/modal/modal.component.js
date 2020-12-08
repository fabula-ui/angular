/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChild, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';
// Components
import { ModalBodyComponent } from '../modal-body/modal-body.component';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalSectionComponent } from '../modal-section/modal-section.component';
// Services
import { ModalService } from '../../services/modal.service';
// Styles
import ModalStyles from '@fabula/core/styles/components/modal/modal';
var ModalComponent = /** @class */ (function () {
    function ModalComponent(elRef, modalService) {
        this.elRef = elRef;
        this.modalService = modalService;
        this.glow = true;
        this.isOpen = true;
        this.size = 'lg';
        this.close = new EventEmitter();
        this.open = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var host = this.elRef.nativeElement;
        /** @type {?} */
        var styles;
        if (this.modalBody) {
            this.modalBody.parentColor = this.color;
            this.modalBody.ngOnInit();
        }
        if (this.modalFooter) {
            this.modalFooter.parentColor = this.color;
            this.modalFooter.ngOnInit();
        }
        if (this.modalHeader) {
            this.modalHeader.clickedClose.subscribe((/**
             * @return {?}
             */
            function () { return _this.closeModal(); }));
            this.modalHeader.parentColor = this.color;
            this.modalHeader.ngAfterViewInit();
        }
        if (this.modalSection) {
            this.modalSection.parentColor = this.color;
            this.modalSection.ngOnInit();
        }
        styles = css(ModalStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
        this.open.emit();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.modalService.closeModal();
        this.close.emit();
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-modal',
                    template: "<div class=\"fab-modal-wrapper\" [attr.data-closing]=\"modalService.modalIsClosing\" [attr.data-open]=\"isOpen\">\n  <div class=\"fab-modal__dialog\">\n    <div class=\"fab-modal\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-modal__backdrop\" (click)=\"closeModal()\"></div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ModalService }
    ]; };
    ModalComponent.propDecorators = {
        modalBody: [{ type: ContentChild, args: [ModalBodyComponent,] }],
        modalFooter: [{ type: ContentChild, args: [ModalFooterComponent,] }],
        modalHeader: [{ type: ContentChild, args: [ModalHeaderComponent,] }],
        modalSection: [{ type: ContentChild, args: [ModalSectionComponent,] }],
        color: [{ type: Input }],
        glow: [{ type: Input }],
        isOpen: [{ type: Input }],
        size: [{ type: Input }],
        close: [{ type: Output }],
        open: [{ type: Output }]
    };
    return ModalComponent;
}());
export { ModalComponent };
if (false) {
    /** @type {?} */
    ModalComponent.prototype.modalBody;
    /** @type {?} */
    ModalComponent.prototype.modalFooter;
    /** @type {?} */
    ModalComponent.prototype.modalHeader;
    /** @type {?} */
    ModalComponent.prototype.modalSection;
    /** @type {?} */
    ModalComponent.prototype.color;
    /** @type {?} */
    ModalComponent.prototype.glow;
    /** @type {?} */
    ModalComponent.prototype.isOpen;
    /** @type {?} */
    ModalComponent.prototype.size;
    /** @type {?} */
    ModalComponent.prototype.close;
    /** @type {?} */
    ModalComponent.prototype.open;
    /** @type {?} */
    ModalComponent.prototype.elRef;
    /** @type {?} */
    ModalComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUc1RCxPQUFPLFdBQVcsTUFBTSw0Q0FBNEMsQ0FBQztBQUVyRTtJQW1CRSx3QkFDUyxLQUFpQixFQUNqQixZQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBVDFCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsU0FBSSxHQUFHLElBQUksQ0FBQztRQUVYLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLbkQsQ0FBQzs7OztJQUVMLHdDQUFlOzs7SUFBZjtRQUFBLGlCQTZCQzs7WUE1Qk8sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTs7WUFDakMsTUFBTTtRQUVWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVM7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO1FBRUQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsbUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBRXJCLHdVQUFxQzs7aUJBQ3RDOzs7O2dCQW5CbUIsVUFBVTtnQkFVckIsWUFBWTs7OzRCQVdsQixZQUFZLFNBQUMsa0JBQWtCOzhCQUMvQixZQUFZLFNBQUMsb0JBQW9COzhCQUNqQyxZQUFZLFNBQUMsb0JBQW9COytCQUNqQyxZQUFZLFNBQUMscUJBQXFCO3dCQUVsQyxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUVMLE1BQU07dUJBQ04sTUFBTTs7SUEwQ1QscUJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXREWSxjQUFjOzs7SUFDekIsbUNBQWdFOztJQUNoRSxxQ0FBc0U7O0lBQ3RFLHFDQUFzRTs7SUFDdEUsc0NBQXlFOztJQUV6RSwrQkFBdUI7O0lBQ3ZCLDhCQUFxQjs7SUFDckIsZ0NBQXVCOztJQUN2Qiw4QkFBcUI7O0lBRXJCLCtCQUF3RDs7SUFDeEQsOEJBQXVEOztJQUdyRCwrQkFBd0I7O0lBQ3hCLHNDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIENvbnRlbnRDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBNb2RhbEJvZHlDb21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC1ib2R5L21vZGFsLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwtZm9vdGVyL21vZGFsLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC1zZWN0aW9uL21vZGFsLXNlY3Rpb24uY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBNb2RhbFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItbW9kYWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAQ29udGVudENoaWxkKE1vZGFsQm9keUNvbXBvbmVudCkgbW9kYWxCb2R5OiBNb2RhbEJvZHlDb21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGQoTW9kYWxGb290ZXJDb21wb25lbnQpIG1vZGFsRm9vdGVyOiBNb2RhbEZvb3RlckNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChNb2RhbEhlYWRlckNvbXBvbmVudCkgbW9kYWxIZWFkZXI6IE1vZGFsSGVhZGVyQ29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKE1vZGFsU2VjdGlvbkNvbXBvbmVudCkgbW9kYWxTZWN0aW9uOiBNb2RhbFNlY3Rpb25Db21wb25lbnQ7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZ2xvdyA9IHRydWU7XG4gIEBJbnB1dCgpIGlzT3BlbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNpemUgPSAnbGcnO1xuXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBzdHlsZXM7XG5cbiAgICBpZiAodGhpcy5tb2RhbEJvZHkpIHtcbiAgICAgIHRoaXMubW9kYWxCb2R5LnBhcmVudENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgIHRoaXMubW9kYWxCb2R5Lm5nT25Jbml0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kYWxGb290ZXIpIHtcbiAgICAgIHRoaXMubW9kYWxGb290ZXIucGFyZW50Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgdGhpcy5tb2RhbEZvb3Rlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGFsSGVhZGVyKSB7XG4gICAgICB0aGlzLm1vZGFsSGVhZGVyLmNsaWNrZWRDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpO1xuICAgICAgdGhpcy5tb2RhbEhlYWRlci5wYXJlbnRDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICB0aGlzLm1vZGFsSGVhZGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGFsU2VjdGlvbikge1xuICAgICAgdGhpcy5tb2RhbFNlY3Rpb24ucGFyZW50Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgdGhpcy5tb2RhbFNlY3Rpb24ubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgPSBjc3MoTW9kYWxTdHlsZXMoeyBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHM6IHRoaXMgfSkpO1xuICAgIGhvc3QuY2xhc3NMaXN0LmFkZChzdHlsZXMpO1xuXG4gICAgdGhpcy5vcGVuLmVtaXQoKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2VNb2RhbCgpO1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG59XG4iXX0=