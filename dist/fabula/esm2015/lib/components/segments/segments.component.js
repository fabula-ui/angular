/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/segments/segments.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
import { SelectorComponent } from '../selector/selector.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';
export class SegmentsComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.border = true;
        this.clear = false;
        this.expand = false;
        this.faded = false;
        this.invert = false;
        this.layout = 'horizontal';
        this.outline = false;
        this.rounded = false;
        this.stacked = false;
        this.changeSegment = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.childComponents.forEach((/**
         * @param {?} child
         * @return {?}
         */
        (child) => {
            child.activeColor = this.activeColor;
            child.activeTextColor = this.activeTextColor;
            child.color = this.color;
            child.clear = this.clear;
            child.expand = this.expand;
            child.faded = this.faded;
            child.inactiveColor = this.inactiveColor;
            child.inactiveTextColor = this.inactiveTextColor;
            child.invert = this.invert;
            child.layout = this.layout;
            child.outline = this.outline;
            child.rounded = this.rounded;
            child.scope = this.scope;
            child.stacked = this.stacked;
            child.type = this.type;
            child.selectedSegment.subscribe((/**
             * @param {?} tab
             * @return {?}
             */
            tab => this.handleActiveSegment(tab)));
            child.childViewInit();
            child.listen({
                onChangeSelector: this.changeSegment
            });
            if (this.active) {
                this.changeSegment.emit(this.active);
            }
        }));
        if (this.active && this.scope) {
            this.toggleContent();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = SegmentsStyles;
        this.initStyles();
    }
    /**
     * @param {?} segment
     * @return {?}
     */
    handleActiveSegment(segment) {
        this.active = segment;
        this.changeSegment.emit(segment);
        if (segment && this.scope) {
            this.toggleContent();
        }
    }
    /**
     * @return {?}
     */
    toggleContent() {
        /** @type {?} */
        const allOtherContent = document.querySelectorAll(`.fab-content[data-scope='${this.scope}']:not([data-name='${this.active}'])`);
        /** @type {?} */
        const targetContent = document.querySelector(`.fab-content[data-scope='${this.scope}'][data-name='${this.active}']`);
        if (allOtherContent.length) {
            allOtherContent.forEach((/**
             * @param {?} other
             * @return {?}
             */
            other => {
                other.setAttribute('data-active', 'false');
            }));
        }
        if (targetContent) {
            targetContent.setAttribute('data-active', 'true');
        }
    }
}
SegmentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-segments',
                template: "<div class=\"fab-segments-wrapper\" data-fab-wrapper=\"segments\">\n  <div class=\"fab-segments\" data-fab-component=\"segments\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
SegmentsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
SegmentsComponent.propDecorators = {
    childComponents: [{ type: ContentChildren, args: [SelectorComponent,] }],
    active: [{ type: Input }],
    activeColor: [{ type: Input }],
    activeTextColor: [{ type: Input }],
    border: [{ type: Input }],
    clear: [{ type: Input }],
    color: [{ type: Input }],
    expand: [{ type: Input }],
    faded: [{ type: Input }],
    inactiveColor: [{ type: Input }],
    inactiveTextColor: [{ type: Input }],
    invert: [{ type: Input }],
    layout: [{ type: Input }],
    outline: [{ type: Input }],
    rounded: [{ type: Input }],
    scope: [{ type: Input }],
    stacked: [{ type: Input }],
    type: [{ type: Input }],
    changeSegment: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SegmentsComponent.prototype.childComponents;
    /** @type {?} */
    SegmentsComponent.prototype.active;
    /** @type {?} */
    SegmentsComponent.prototype.activeColor;
    /** @type {?} */
    SegmentsComponent.prototype.activeTextColor;
    /** @type {?} */
    SegmentsComponent.prototype.border;
    /** @type {?} */
    SegmentsComponent.prototype.clear;
    /** @type {?} */
    SegmentsComponent.prototype.color;
    /** @type {?} */
    SegmentsComponent.prototype.expand;
    /** @type {?} */
    SegmentsComponent.prototype.faded;
    /** @type {?} */
    SegmentsComponent.prototype.inactiveColor;
    /** @type {?} */
    SegmentsComponent.prototype.inactiveTextColor;
    /** @type {?} */
    SegmentsComponent.prototype.invert;
    /** @type {?} */
    SegmentsComponent.prototype.layout;
    /** @type {?} */
    SegmentsComponent.prototype.outline;
    /** @type {?} */
    SegmentsComponent.prototype.rounded;
    /** @type {?} */
    SegmentsComponent.prototype.scope;
    /** @type {?} */
    SegmentsComponent.prototype.stacked;
    /** @type {?} */
    SegmentsComponent.prototype.type;
    /** @type {?} */
    SegmentsComponent.prototype.changeSegment;
    /** @type {?} */
    SegmentsComponent.prototype.elRef;
    /** @type {?} */
    SegmentsComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VnbWVudHMvc2VnbWVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3RJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLGNBQWMsTUFBTSxrREFBa0QsQ0FBQztBQU85RSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTs7Ozs7SUF1QnBELFlBQ1MsS0FBaUIsRUFDakIsYUFBNEI7UUFDakMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBbkI1QixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUVkLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR2QsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQU0sR0FBRyxZQUFZLENBQUM7UUFDdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHZixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLWixDQUFDOzs7O0lBRWxDLGVBQWU7UUFDYixJQUFJLENB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SjtRQUVELElBQUksYUFBYSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7O1lBMUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFFeEIsK0xBQXdDOzthQUN6Qzs7OztZQWpCMkIsVUFBVTtZQVE3QixhQUFhOzs7OEJBV25CLGVBQWUsU0FBQyxpQkFBaUI7cUJBRWpDLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs0QkFFTCxNQUFNOzs7O0lBcEJQLDRDQUFrRjs7SUFFbEYsbUNBQXdCOztJQUN4Qix3Q0FBNkI7O0lBQzdCLDRDQUFpQzs7SUFDakMsbUNBQXVCOztJQUN2QixrQ0FBdUI7O0lBQ3ZCLGtDQUF1Qjs7SUFDdkIsbUNBQXdCOztJQUN4QixrQ0FBdUI7O0lBQ3ZCLDBDQUErQjs7SUFDL0IsOENBQW1DOztJQUNuQyxtQ0FBd0I7O0lBQ3hCLG1DQUErQjs7SUFDL0Isb0NBQXlCOztJQUN6QixvQ0FBeUI7O0lBQ3pCLGtDQUF1Qjs7SUFDdkIsb0NBQXlCOztJQUN6QixpQ0FBc0I7O0lBRXRCLDBDQUE2Qzs7SUFHM0Msa0NBQXdCOztJQUN4QiwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlZ21lbnRDb21wb25lbnQgfSBmcm9tICcuLi9zZWdtZW50L3NlZ21lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFNlZ21lbnRzU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9zZWdtZW50cy9zZWdtZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1zZWdtZW50cycsXG4gIHN0eWxlVXJsczogWycuL3NlZ21lbnRzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWdtZW50cy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudHNDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFNlbGVjdG9yQ29tcG9uZW50KSBjaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxTZWxlY3RvckNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgYWN0aXZlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZVRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBib3JkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBjbGVhciA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBleHBhbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgZmFkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBpbmFjdGl2ZVRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBpbnZlcnQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2NvcGU6IHN0cmluZztcbiAgQElucHV0KCkgc3RhY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNoYW5nZVNlZ21lbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBmYWJ1bGFTZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlXG4gICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jaGlsZENvbXBvbmVudHMuZm9yRWFjaCgoY2hpbGQ6IFNlZ21lbnRDb21wb25lbnQpID0+IHtcbiAgICAgIGNoaWxkLmFjdGl2ZUNvbG9yID0gdGhpcy5hY3RpdmVDb2xvcjtcbiAgICAgIGNoaWxkLmFjdGl2ZVRleHRDb2xvciA9IHRoaXMuYWN0aXZlVGV4dENvbG9yO1xuICAgICAgY2hpbGQuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgY2hpbGQuY2xlYXIgPSB0aGlzLmNsZWFyO1xuICAgICAgY2hpbGQuZXhwYW5kID0gdGhpcy5leHBhbmQ7XG4gICAgICBjaGlsZC5mYWRlZCA9IHRoaXMuZmFkZWQ7XG4gICAgICBjaGlsZC5pbmFjdGl2ZUNvbG9yID0gdGhpcy5pbmFjdGl2ZUNvbG9yO1xuICAgICAgY2hpbGQuaW5hY3RpdmVUZXh0Q29sb3IgPSB0aGlzLmluYWN0aXZlVGV4dENvbG9yO1xuICAgICAgY2hpbGQuaW52ZXJ0ID0gdGhpcy5pbnZlcnQ7XG4gICAgICBjaGlsZC5sYXlvdXQgPSB0aGlzLmxheW91dDtcbiAgICAgIGNoaWxkLm91dGxpbmUgPSB0aGlzLm91dGxpbmU7XG4gICAgICBjaGlsZC5yb3VuZGVkID0gdGhpcy5yb3VuZGVkO1xuICAgICAgY2hpbGQuc2NvcGUgPSB0aGlzLnNjb3BlO1xuICAgICAgY2hpbGQuc3RhY2tlZCA9IHRoaXMuc3RhY2tlZDtcbiAgICAgIGNoaWxkLnR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICAgIGNoaWxkLnNlbGVjdGVkU2VnbWVudC5zdWJzY3JpYmUodGFiID0+IHRoaXMuaGFuZGxlQWN0aXZlU2VnbWVudCh0YWIpKTtcblxuICAgICAgY2hpbGQuY2hpbGRWaWV3SW5pdCgpO1xuICAgICAgY2hpbGQubGlzdGVuKHtcbiAgICAgICAgb25DaGFuZ2VTZWxlY3RvcjogdGhpcy5jaGFuZ2VTZWdtZW50XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7IHRoaXMuY2hhbmdlU2VnbWVudC5lbWl0KHRoaXMuYWN0aXZlKTsgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIHRoaXMuc2NvcGUpIHsgdGhpcy50b2dnbGVDb250ZW50KCk7IH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0gU2VnbWVudHNTdHlsZXM7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG4gIH1cblxuICBoYW5kbGVBY3RpdmVTZWdtZW50KHNlZ21lbnQpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHNlZ21lbnQ7XG4gICAgdGhpcy5jaGFuZ2VTZWdtZW50LmVtaXQoc2VnbWVudCk7XG4gICAgaWYgKHNlZ21lbnQgJiYgdGhpcy5zY29wZSkgeyB0aGlzLnRvZ2dsZUNvbnRlbnQoKTsgfVxuICB9XG5cbiAgdG9nZ2xlQ29udGVudCgpIHtcbiAgICBjb25zdCBhbGxPdGhlckNvbnRlbnQgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZhYi1jb250ZW50W2RhdGEtc2NvcGU9JyR7dGhpcy5zY29wZX0nXTpub3QoW2RhdGEtbmFtZT0nJHt0aGlzLmFjdGl2ZX0nXSlgKTtcbiAgICBjb25zdCB0YXJnZXRDb250ZW50ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mYWItY29udGVudFtkYXRhLXNjb3BlPScke3RoaXMuc2NvcGV9J11bZGF0YS1uYW1lPScke3RoaXMuYWN0aXZlfSddYCk7XG5cbiAgICBpZiAoYWxsT3RoZXJDb250ZW50Lmxlbmd0aCkge1xuICAgICAgYWxsT3RoZXJDb250ZW50LmZvckVhY2gob3RoZXIgPT4ge1xuICAgICAgICBvdGhlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ2ZhbHNlJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0Q29udGVudCkge1xuICAgICAgdGFyZ2V0Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ3RydWUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==