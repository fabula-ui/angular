/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dropdown/dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChild, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../dropdown-toggle/dropdown-toggle.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';
export class DropdownComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.alignment = 'left';
        this.direction = 'down';
        this.expand = false;
        this.isOpen = false;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.toggle = new EventEmitter();
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.handleChildren();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = DropdownStyles;
        this.initStyles();
        this.callbacks = (/**
         * @return {?}
         */
        () => { this.handleChildren(); });
        // Event Listener
        document.addEventListener('click', (/**
         * @param {?} e
         * @return {?}
         */
        e => this.handleClick(e)));
    }
    // Methods
    /**
     * @return {?}
     */
    handleChildren() {
        if (this.dropdownMenu) {
            this.dropdownMenu.alignment = this.alignment;
            this.dropdownMenu.direction = this.direction;
            this.dropdownMenu.listen({ toggle: this.toggle });
            this.dropdownMenu.closed.subscribe((/**
             * @return {?}
             */
            () => this.handleToggle()));
            this.dropdownMenu.ngOnInit();
        }
        if (this.dropdownToggle) {
            this.dropdownToggle.direction = this.direction;
            this.dropdownToggle.toggle.subscribe((/**
             * @return {?}
             */
            () => this.handleToggle()));
            if (this.expand) {
                this.dropdownToggle.expand = true;
            }
            this.dropdownToggle.ngOnInit();
        }
        this.refreshStyles();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleClick(e) {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        if (!host.contains(e.target) && this.isOpen) {
            this.handleToggle();
        }
    }
    /**
     * @return {?}
     */
    handleToggle() {
        this.isOpen = !this.isOpen;
        this.dropdownToggle.isOpen = this.isOpen;
        this.toggle.emit(this.isOpen);
        if (!this.isOpen) {
            this.close.emit();
        }
        if (this.isOpen) {
            this.open.emit();
        }
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-dropdown',
                template: "<div class=\"fab-dropdown\" [attr.data-open]=\"isOpen\" data-fab-component=\"dropdown\">\n  <ng-content></ng-content>\n</div>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFlBQVksRUFFWixNQUFNLEVBQ04sWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDOztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7O0FBR3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxjQUFjLE1BQU0sa0RBQWtELENBQUM7QUFPOUUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQWU7Ozs7O0lBZWxELFlBQ1csS0FBaUIsRUFDakIsYUFBNEI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBYjlCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVkLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELFdBQU0sR0FBRyxJQUFJLENBQUM7SUFLcUIsQ0FBQzs7OztJQUVwQyxlQUFlO1FBQ1gs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LE1BQU07Ozs7SUFWUCx5Q0FBeUU7O0lBQ3pFLDJDQUErRTs7SUFFL0Usc0NBQTRCOztJQUM1QixzQ0FBNEI7O0lBQzVCLG1DQUF3Qjs7SUFDeEIsbUNBQXdCOztJQUV4QixrQ0FBd0Q7O0lBQ3hELGlDQUF1RDs7SUFDdkQsbUNBQXlEOztJQUV6RCxtQ0FBYzs7SUFHVixrQ0FBd0I7O0lBQ3hCLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93blRvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duLXRvZ2dsZS9kcm9wZG93bi10b2dnbGUuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IERyb3Bkb3duU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLWRyb3Bkb3duJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICBAQ29udGVudENoaWxkKERyb3Bkb3duTWVudUNvbXBvbmVudCkgZHJvcGRvd25NZW51OiBEcm9wZG93bk1lbnVDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChEcm9wZG93blRvZ2dsZUNvbXBvbmVudCkgZHJvcGRvd25Ub2dnbGU6IERyb3Bkb3duVG9nZ2xlQ29tcG9uZW50O1xuXG4gICAgQElucHV0KCkgYWxpZ25tZW50ID0gJ2xlZnQnO1xuICAgIEBJbnB1dCgpIGRpcmVjdGlvbiA9ICdkb3duJztcbiAgICBASW5wdXQoKSBleHBhbmQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpc09wZW4gPSBmYWxzZTtcblxuICAgIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgaW5saW5lID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICAgICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBEcm9wZG93blN0eWxlcztcbiAgICAgICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gKCkgPT4geyB0aGlzLmhhbmRsZUNoaWxkcmVuKCk7IH07XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlQ2xpY2soZSkpO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZHNcbiAgICBoYW5kbGVDaGlsZHJlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25NZW51KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudS5hbGlnbm1lbnQgPSB0aGlzLmFsaWdubWVudDtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25NZW51LmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnUubGlzdGVuKHsgdG9nZ2xlOiB0aGlzLnRvZ2dsZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25NZW51LmNsb3NlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVUb2dnbGUoKSk7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudS5uZ09uSW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25Ub2dnbGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Ub2dnbGUuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlLnRvZ2dsZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVUb2dnbGUoKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGFuZCkgeyB0aGlzLmRyb3Bkb3duVG9nZ2xlLmV4cGFuZCA9IHRydWU7IH1cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Ub2dnbGUubmdPbkluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVmcmVzaFN0eWxlcygpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKCFob3N0LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiB0aGlzLmlzT3BlbikgeyB0aGlzLmhhbmRsZVRvZ2dsZSgpOyB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgdGhpcy5kcm9wZG93blRvZ2dsZS5pc09wZW4gPSB0aGlzLmlzT3BlbjtcbiAgICAgICAgdGhpcy50b2dnbGUuZW1pdCh0aGlzLmlzT3Blbik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbikgeyB0aGlzLmNsb3NlLmVtaXQoKTsgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHsgdGhpcy5vcGVuLmVtaXQoKTsgfVxuICAgIH1cbn1cbiJdfQ==