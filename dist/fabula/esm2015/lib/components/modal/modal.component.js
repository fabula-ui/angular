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
export class ModalComponent {
    /**
     * @param {?} elRef
     * @param {?} modalService
     */
    constructor(elRef, modalService) {
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
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        let styles;
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
            () => this.closeModal()));
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
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.modalService.closeModal();
        this.close.emit();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-modal',
                template: "<div class=\"fab-modal-wrapper\" [attr.data-closing]=\"modalService.modalIsClosing\" [attr.data-open]=\"isOpen\">\n  <div class=\"fab-modal__dialog\">\n    <div class=\"fab-modal\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"fab-modal__backdrop\" (click)=\"closeModal()\"></div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ModalService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUc5QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUc1RCxPQUFPLFdBQVcsTUFBTSw0Q0FBNEMsQ0FBQztBQU9yRSxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFjekIsWUFDUyxLQUFpQixFQUNqQixZQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBVDFCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsU0FBSSxHQUFHLElBQUksQ0FBQztRQUVYLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLbkQsQ0FBQzs7OztJQUVMLGVBQWU7O2NBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTs7WUFDakMsTUFBTTtRQUVWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDOUI7UUFFRCxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBRXJCLHdVQUFxQzs7YUFDdEM7Ozs7WUFuQm1CLFVBQVU7WUFVckIsWUFBWTs7O3dCQVdsQixZQUFZLFNBQUMsa0JBQWtCOzBCQUMvQixZQUFZLFNBQUMsb0JBQW9COzBCQUNqQyxZQUFZLFNBQUMsb0JBQW9COzJCQUNqQyxZQUFZLFNBQUMscUJBQXFCO29CQUVsQyxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUVMLE1BQU07bUJBQ04sTUFBTTs7OztJQVhQLG1DQUFnRTs7SUFDaEUscUNBQXNFOztJQUN0RSxxQ0FBc0U7O0lBQ3RFLHNDQUF5RTs7SUFFekUsK0JBQXVCOztJQUN2Qiw4QkFBcUI7O0lBQ3JCLGdDQUF1Qjs7SUFDdkIsOEJBQXFCOztJQUVyQiwrQkFBd0Q7O0lBQ3hELDhCQUF1RDs7SUFHckQsK0JBQXdCOztJQUN4QixzQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBDb250ZW50Q2hpbGQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTW9kYWxCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwtYm9keS9tb2RhbC1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsLWZvb3Rlci9tb2RhbC1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwtc2VjdGlvbi9tb2RhbC1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgTW9kYWxTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL21vZGFsL21vZGFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFiLW1vZGFsJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQENvbnRlbnRDaGlsZChNb2RhbEJvZHlDb21wb25lbnQpIG1vZGFsQm9keTogTW9kYWxCb2R5Q29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKE1vZGFsRm9vdGVyQ29tcG9uZW50KSBtb2RhbEZvb3RlcjogTW9kYWxGb290ZXJDb21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGQoTW9kYWxIZWFkZXJDb21wb25lbnQpIG1vZGFsSGVhZGVyOiBNb2RhbEhlYWRlckNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChNb2RhbFNlY3Rpb25Db21wb25lbnQpIG1vZGFsU2VjdGlvbjogTW9kYWxTZWN0aW9uQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdsb3cgPSB0cnVlO1xuICBASW5wdXQoKSBpc09wZW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaXplID0gJ2xnJztcblxuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgc3R5bGVzO1xuXG4gICAgaWYgKHRoaXMubW9kYWxCb2R5KSB7XG4gICAgICB0aGlzLm1vZGFsQm9keS5wYXJlbnRDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICB0aGlzLm1vZGFsQm9keS5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGFsRm9vdGVyKSB7XG4gICAgICB0aGlzLm1vZGFsRm9vdGVyLnBhcmVudENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgIHRoaXMubW9kYWxGb290ZXIubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RhbEhlYWRlcikge1xuICAgICAgdGhpcy5tb2RhbEhlYWRlci5jbGlja2VkQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKTtcbiAgICAgIHRoaXMubW9kYWxIZWFkZXIucGFyZW50Q29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgdGhpcy5tb2RhbEhlYWRlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RhbFNlY3Rpb24pIHtcbiAgICAgIHRoaXMubW9kYWxTZWN0aW9uLnBhcmVudENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgIHRoaXMubW9kYWxTZWN0aW9uLm5nT25Jbml0KCk7XG4gICAgfVxuXG4gICAgc3R5bGVzID0gY3NzKE1vZGFsU3R5bGVzKHsgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzOiB0aGlzIH0pKTtcbiAgICBob3N0LmNsYXNzTGlzdC5hZGQoc3R5bGVzKTtcblxuICAgIHRoaXMub3Blbi5lbWl0KCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNsb3NlTW9kYWwoKTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxufVxuIl19