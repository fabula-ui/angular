/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/selector/selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Component
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
export class SelectorComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.active = false;
        this.selectedSegment = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handleClick() {
        if (this.name) {
            this.selectedSegment.emit(this.name);
        }
    }
    /**
     * @param {?} events
     * @return {?}
     */
    listen(events) {
        events.onChangeSelector.subscribe((/**
         * @param {?} segment
         * @return {?}
         */
        segment => {
            this.active = segment === this.name;
        }));
    }
}
SelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-selector',
                template: '<div></div>'
            }] }
];
/** @nocollapse */
SelectorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
SelectorComponent.propDecorators = {
    active: [{ type: Input }],
    activeColor: [{ type: Input }],
    activeTextColor: [{ type: Input }],
    clear: [{ type: Input }],
    color: [{ type: Input }],
    expand: [{ type: Input }],
    faded: [{ type: Input }],
    href: [{ type: Input }],
    inactiveColor: [{ type: Input }],
    inactiveTextColor: [{ type: Input }],
    invert: [{ type: Input }],
    layout: [{ type: Input }],
    link: [{ type: Input }],
    name: [{ type: Input }],
    outline: [{ type: Input }],
    rel: [{ type: Input }],
    rounded: [{ type: Input }],
    scope: [{ type: Input }],
    stacked: [{ type: Input }],
    target: [{ type: Input }],
    type: [{ type: Input }],
    selectedSegment: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectorComponent.prototype.active;
    /** @type {?} */
    SelectorComponent.prototype.activeColor;
    /** @type {?} */
    SelectorComponent.prototype.activeTextColor;
    /** @type {?} */
    SelectorComponent.prototype.clear;
    /** @type {?} */
    SelectorComponent.prototype.color;
    /** @type {?} */
    SelectorComponent.prototype.expand;
    /** @type {?} */
    SelectorComponent.prototype.faded;
    /** @type {?} */
    SelectorComponent.prototype.href;
    /** @type {?} */
    SelectorComponent.prototype.inactiveColor;
    /** @type {?} */
    SelectorComponent.prototype.inactiveTextColor;
    /** @type {?} */
    SelectorComponent.prototype.invert;
    /** @type {?} */
    SelectorComponent.prototype.layout;
    /** @type {?} */
    SelectorComponent.prototype.link;
    /** @type {?} */
    SelectorComponent.prototype.name;
    /** @type {?} */
    SelectorComponent.prototype.outline;
    /** @type {?} */
    SelectorComponent.prototype.rel;
    /** @type {?} */
    SelectorComponent.prototype.rounded;
    /** @type {?} */
    SelectorComponent.prototype.scope;
    /** @type {?} */
    SelectorComponent.prototype.stacked;
    /** @type {?} */
    SelectorComponent.prototype.target;
    /** @type {?} */
    SelectorComponent.prototype.type;
    /** @type {?} */
    SelectorComponent.prototype.selectedSegment;
    /** @type {?} */
    SelectorComponent.prototype.elRef;
    /** @type {?} */
    SelectorComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR25GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTTlELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlOzs7OztJQXlCbEQsWUFDVyxLQUFpQixFQUNqQixhQUE0QjtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRnJCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUExQjlCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFzQmQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS2QsQ0FBQzs7OztJQUVsQyxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBTTtRQUNULE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQTFDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2FBQzFCOzs7O1lBWG1CLFVBQVU7WUFNckIsYUFBYTs7O3FCQU9qQixLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSztrQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzs4QkFFTCxNQUFNOzs7O0lBdEJQLG1DQUF3Qjs7SUFDeEIsd0NBQTZCOztJQUM3Qiw0Q0FBaUM7O0lBQ2pDLGtDQUF3Qjs7SUFDeEIsa0NBQXVCOztJQUN2QixtQ0FBeUI7O0lBQ3pCLGtDQUF3Qjs7SUFDeEIsaUNBQXNCOztJQUN0QiwwQ0FBK0I7O0lBQy9CLDhDQUFtQzs7SUFDbkMsbUNBQXlCOztJQUN6QixtQ0FBd0I7O0lBQ3hCLGlDQUFzQjs7SUFDdEIsaUNBQXNCOztJQUN0QixvQ0FBMEI7O0lBQzFCLGdDQUFxQjs7SUFDckIsb0NBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLG9DQUEwQjs7SUFDMUIsbUNBQXdCOztJQUN4QixpQ0FBc0I7O0lBRXRCLDRDQUErQzs7SUFHM0Msa0NBQXdCOztJQUN4QiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWItc2VsZWN0b3InLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBhY3RpdmVDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFjdGl2ZVRleHRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsZWFyOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZXhwYW5kOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGZhZGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbmFjdGl2ZUNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5hY3RpdmVUZXh0Q29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbnZlcnQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbGF5b3V0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGluazogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBvdXRsaW5lOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJvdW5kZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2NvcGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdGFja2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFNlZ21lbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5uYW1lKSB7IHRoaXMuc2VsZWN0ZWRTZWdtZW50LmVtaXQodGhpcy5uYW1lKTsgfVxuICAgIH1cblxuICAgIGxpc3RlbihldmVudHMpIHtcbiAgICAgICAgZXZlbnRzLm9uQ2hhbmdlU2VsZWN0b3Iuc3Vic2NyaWJlKHNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBzZWdtZW50ID09PSB0aGlzLm5hbWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=