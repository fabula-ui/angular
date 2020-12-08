/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/wrapper/wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import WrapperStyles from '@fabula/core/styles/components/wrapper/wrapper';
export class WrapperComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = WrapperStyles;
        this.initStyles();
    }
}
WrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-wrapper',
                template: "<div class=\"fab-wrapper\" data-fab-component=\"wrapper\">\n    <ng-content></ng-content>\n</div>",
                styles: [":host{display:block}:host .fab-wrapper{height:100%;width:100%}"]
            }] }
];
/** @nocollapse */
WrapperComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
WrapperComponent.propDecorators = {
    bgColor: [{ type: Input }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    WrapperComponent.prototype.bgColor;
    /** @type {?} */
    WrapperComponent.prototype.color;
    /** @type {?} */
    WrapperComponent.prototype.elRef;
    /** @type {?} */
    WrapperComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93cmFwcGVyL3dyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxhQUFhLE1BQU0sZ0RBQWdELENBQUM7QUFPM0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQWU7Ozs7O0lBSWpELFlBQ1csS0FBaUIsRUFDakIsYUFBNEI7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUZyQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ04sQ0FBQzs7OztJQUVsQyxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQWpCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBRXZCLDZHQUF1Qzs7YUFDMUM7Ozs7WUFmbUIsVUFBVTtZQU1yQixhQUFhOzs7c0JBV2pCLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLG1DQUF5Qjs7SUFDekIsaUNBQXVCOztJQUduQixpQ0FBd0I7O0lBQ3hCLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFdyYXBwZXJTdHlsZXMgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL3dyYXBwZXIvd3JhcHBlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmFiLXdyYXBwZXInLFxuICAgIHN0eWxlVXJsczogWycuL3dyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vd3JhcHBlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IFdyYXBwZXJTdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cbn1cbiJdfQ==