/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/margin.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';
// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';
export class MarginDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const host = this.elRef.nativeElement;
        /** @type {?} */
        const props = {
            m: this.m,
            mb: this.mb,
            ml: this.ml,
            mr: this.mr,
            mt: this.mt,
            mx: this.mx,
            my: this.my
        };
        host.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
MarginDirective.decorators = [
    { type: Directive, args: [{
                selector: '[m],[mb],[ml],[mr],[mt],[mx],[my]'
            },] }
];
/** @nocollapse */
MarginDirective.ctorParameters = () => [
    { type: ElementRef }
];
MarginDirective.propDecorators = {
    m: [{ type: Input }],
    mb: [{ type: Input }],
    ml: [{ type: Input }],
    mr: [{ type: Input }],
    mt: [{ type: Input }],
    mx: [{ type: Input }],
    my: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MarginDirective.prototype.m;
    /** @type {?} */
    MarginDirective.prototype.mb;
    /** @type {?} */
    MarginDirective.prototype.ml;
    /** @type {?} */
    MarginDirective.prototype.mr;
    /** @type {?} */
    MarginDirective.prototype.mt;
    /** @type {?} */
    MarginDirective.prototype.mx;
    /** @type {?} */
    MarginDirective.prototype.my;
    /**
     * @type {?}
     * @private
     */
    MarginDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyZ2luLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL21hcmdpbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRzlCLE9BQU8sV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBSzFELE1BQU0sT0FBTyxlQUFlOzs7O0lBU3hCLFlBQ1ksS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUN6QixDQUFDOzs7O0lBRUwsZUFBZTs7Y0FDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztjQUMvQixLQUFLLEdBQUc7WUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDZDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7OztZQTdCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1DQUFtQzthQUNoRDs7OztZQVJrQyxVQUFVOzs7Z0JBVXhDLEtBQUs7aUJBQ0wsS0FBSztpQkFDTCxLQUFLO2lCQUNMLEtBQUs7aUJBQ0wsS0FBSztpQkFDTCxLQUFLO2lCQUNMLEtBQUs7Ozs7SUFOTiw0QkFBZ0I7O0lBQ2hCLDZCQUFpQjs7SUFDakIsNkJBQWlCOztJQUNqQiw2QkFBaUI7O0lBQ2pCLDZCQUFpQjs7SUFDakIsNkJBQWlCOztJQUNqQiw2QkFBaUI7Ozs7O0lBR2IsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IFV0aWxzU3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvdXRpbHMvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttXSxbbWJdLFttbF0sW21yXSxbbXRdLFtteF0sW215XSdcbn0pXG5leHBvcnQgY2xhc3MgTWFyZ2luRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgbTogYW55O1xuICAgIEBJbnB1dCgpIG1iOiBhbnk7XG4gICAgQElucHV0KCkgbWw6IGFueTtcbiAgICBASW5wdXQoKSBtcjogYW55O1xuICAgIEBJbnB1dCgpIG10OiBhbnk7XG4gICAgQElucHV0KCkgbXg6IGFueTtcbiAgICBASW5wdXQoKSBteTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWZcbiAgICApIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIG06IHRoaXMubSxcbiAgICAgICAgICAgIG1iOiB0aGlzLm1iLFxuICAgICAgICAgICAgbWw6IHRoaXMubWwsXG4gICAgICAgICAgICBtcjogdGhpcy5tcixcbiAgICAgICAgICAgIG10OiB0aGlzLm10LFxuICAgICAgICAgICAgbXg6IHRoaXMubXgsXG4gICAgICAgICAgICBteTogdGhpcy5teVxuICAgICAgICB9O1xuXG4gICAgICAgIGhvc3QuY2xhc3NMaXN0LmFkZChjc3MoVXRpbHNTdHlsZXMoeyBmcmFtZXdvcms6ICdhbmd1bGFyJywgcHJvcHMgfSkpKTtcbiAgICB9XG59XG4iXX0=