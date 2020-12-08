/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/common-component/common-component.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Responsiveness
import ResponsiveStyles from '@fabula/core/styles/responsive/responsive';
// Services
import { FabulaService } from '../../services/fabula.service';
export class CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.props = {};
        // Responsiveness
        this.down = {};
        this.on = {};
        this.up = {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.callbacks && typeof this.callbacks === 'function') {
            this.callbacks();
        }
        if (this.styles) {
            this.refreshStyles();
        }
    }
    /**
     * @param {?} stylesFn
     * @return {?}
     */
    applyStyles(stylesFn) {
        /** @type {?} */
        const styles = css(stylesFn({
            framework: 'angular', props: Object.assign({}, this, this.props, this.additionalProps)
        }));
        /** @type {?} */
        let responsiveStyles;
        this.host = this.elRef.nativeElement;
        this.host.classList.add(styles);
        if (this.fabulaService.responsiveness) {
            responsiveStyles = css(ResponsiveStyles({
                framework: 'angular',
                props: Object.assign({}, this, this.props, this.additionalProps),
                styles: stylesFn,
                utils: this.fabulaService.utils
            }));
            this.host.classList.add(responsiveStyles);
        }
    }
    /**
     * @return {?}
     */
    initStyles() {
        if (this.additionalStyles) {
            this.applyStyles(this.additionalStyles);
        }
        if (this.styles) {
            this.applyStyles(this.styles);
        }
    }
    /**
     * @return {?}
     */
    refreshStyles() {
        this.host.classList = '';
        this.initStyles();
    }
}
CommonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-component',
                template: ''
            }] }
];
/** @nocollapse */
CommonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
CommonComponent.propDecorators = {
    props: [{ type: Input }],
    down: [{ type: Input }],
    on: [{ type: Input }],
    up: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CommonComponent.prototype.props;
    /** @type {?} */
    CommonComponent.prototype.down;
    /** @type {?} */
    CommonComponent.prototype.on;
    /** @type {?} */
    CommonComponent.prototype.up;
    /** @type {?} */
    CommonComponent.prototype.additionalProps;
    /** @type {?} */
    CommonComponent.prototype.additionalStyles;
    /** @type {?} */
    CommonComponent.prototype.callbacks;
    /** @type {?} */
    CommonComponent.prototype.host;
    /** @type {?} */
    CommonComponent.prototype.styles;
    /** @type {?} */
    CommonComponent.prototype.elRef;
    /** @type {?} */
    CommonComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlCLE9BQU8sZ0JBQWdCLE1BQU0sMkNBQTJDLENBQUM7O0FBR3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU05RCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFjMUIsWUFDUyxLQUFpQixFQUNqQixhQUE0QjtRQUQ1QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZjVCLFVBQUssR0FBUSxFQUFFLENBQUM7O1FBR2hCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixPQUFFLEdBQVEsRUFBRSxDQUFDO1FBQ2IsT0FBRSxHQUFRLEVBQUUsQ0FBQztJQVdsQixDQUFDOzs7O0lBRUwsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQUU7UUFDakYsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQUU7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBUTs7Y0FDWixNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQixTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssb0JBQ3RCLElBQUksRUFDSixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxlQUFlLENBQ3hCO1NBQ0YsQ0FBQyxDQUFDOztZQUNDLGdCQUFnQjtRQUVwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO1lBQ3JDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDdEMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLEtBQUssb0JBQ0EsSUFBSSxFQUNKLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FDeEI7Z0JBQ0QsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUs7YUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQUU7UUFDdkUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FBRTtJQUNyRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQVptQixVQUFVO1lBT3JCLGFBQWE7OztvQkFPbkIsS0FBSzttQkFHTCxLQUFLO2lCQUNMLEtBQUs7aUJBQ0wsS0FBSzs7OztJQUxOLGdDQUF5Qjs7SUFHekIsK0JBQXdCOztJQUN4Qiw2QkFBc0I7O0lBQ3RCLDZCQUFzQjs7SUFFdEIsMENBQWdCOztJQUNoQiwyQ0FBaUI7O0lBQ2pCLG9DQUFVOztJQUNWLCtCQUFLOztJQUNMLGlDQUFPOztJQUdMLGdDQUF3Qjs7SUFDeEIsd0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gUmVzcG9uc2l2ZW5lc3NcbmltcG9ydCBSZXNwb25zaXZlU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHJvcHM6IGFueSA9IHt9O1xuXG4gIC8vIFJlc3BvbnNpdmVuZXNzXG4gIEBJbnB1dCgpIGRvd246IGFueSA9IHt9O1xuICBASW5wdXQoKSBvbjogYW55ID0ge307XG4gIEBJbnB1dCgpIHVwOiBhbnkgPSB7fTtcblxuICBhZGRpdGlvbmFsUHJvcHM7XG4gIGFkZGl0aW9uYWxTdHlsZXM7XG4gIGNhbGxiYWNrcztcbiAgaG9zdDtcbiAgc3R5bGVzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNhbGxiYWNrcyAmJiB0eXBlb2YgdGhpcy5jYWxsYmFja3MgPT09ICdmdW5jdGlvbicpIHsgdGhpcy5jYWxsYmFja3MoKTsgfVxuICAgIGlmICh0aGlzLnN0eWxlcykgeyB0aGlzLnJlZnJlc2hTdHlsZXMoKTsgfVxuICB9XG5cbiAgYXBwbHlTdHlsZXMoc3R5bGVzRm4pIHtcbiAgICBjb25zdCBzdHlsZXMgPSBjc3Moc3R5bGVzRm4oe1xuICAgICAgZnJhbWV3b3JrOiAnYW5ndWxhcicsIHByb3BzOiB7XG4gICAgICAgIC4uLnRoaXMsXG4gICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgIC4uLnRoaXMuYWRkaXRpb25hbFByb3BzXG4gICAgICB9XG4gICAgfSkpO1xuICAgIGxldCByZXNwb25zaXZlU3R5bGVzO1xuXG4gICAgdGhpcy5ob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKHN0eWxlcyk7XG5cbiAgICBpZiAodGhpcy5mYWJ1bGFTZXJ2aWNlLnJlc3BvbnNpdmVuZXNzKSB7XG4gICAgICByZXNwb25zaXZlU3R5bGVzID0gY3NzKFJlc3BvbnNpdmVTdHlsZXMoe1xuICAgICAgICBmcmFtZXdvcms6ICdhbmd1bGFyJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAuLi50aGlzLFxuICAgICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgICAgLi4udGhpcy5hZGRpdGlvbmFsUHJvcHNcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXNGbixcbiAgICAgICAgdXRpbHM6IHRoaXMuZmFidWxhU2VydmljZS51dGlsc1xuICAgICAgfSkpO1xuXG4gICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZChyZXNwb25zaXZlU3R5bGVzKTtcbiAgICB9XG4gIH1cblxuICBpbml0U3R5bGVzKCkge1xuICAgIGlmICh0aGlzLmFkZGl0aW9uYWxTdHlsZXMpIHsgdGhpcy5hcHBseVN0eWxlcyh0aGlzLmFkZGl0aW9uYWxTdHlsZXMpOyB9XG4gICAgaWYgKHRoaXMuc3R5bGVzKSB7IHRoaXMuYXBwbHlTdHlsZXModGhpcy5zdHlsZXMpOyB9XG4gIH1cblxuICByZWZyZXNoU3R5bGVzKCkge1xuICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QgPSAnJztcbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcbiAgfVxufVxuIl19