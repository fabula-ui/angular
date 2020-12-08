/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/link/link.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';
export class LinkComponent extends CommonComponent {
    /**
     * @param {?} elRef
     * @param {?} fabulaService
     */
    constructor(elRef, fabulaService) {
        super(elRef, fabulaService);
        this.elRef = elRef;
        this.fabulaService = fabulaService;
        this.target = '_blank';
        this.underline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styles = LinkStyles;
        this.initStyles();
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-link',
                template: "<a class=\"fab-link\" [attr.data-size]=\"size\" [attr.href]=\"props.href || href\" [attr.rel]=\"rel\" [attr.target]=\"target\" data-fab-component=\"link\">\n    <ng-container *ngIf=\"props.label || label\">{{props.label || label}}</ng-container>\n    <ng-content></ng-content>\n</a>",
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
LinkComponent.propDecorators = {
    color: [{ type: Input }],
    href: [{ type: Input }],
    label: [{ type: Input }],
    props: [{ type: Input }],
    rel: [{ type: Input }],
    size: [{ type: Input }],
    target: [{ type: Input }],
    underline: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LinkComponent.prototype.color;
    /** @type {?} */
    LinkComponent.prototype.href;
    /** @type {?} */
    LinkComponent.prototype.label;
    /** @type {?} */
    LinkComponent.prototype.props;
    /** @type {?} */
    LinkComponent.prototype.rel;
    /** @type {?} */
    LinkComponent.prototype.size;
    /** @type {?} */
    LinkComponent.prototype.target;
    /** @type {?} */
    LinkComponent.prototype.underline;
    /** @type {?} */
    LinkComponent.prototype.elRef;
    /** @type {?} */
    LinkComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZmFidWxhL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saW5rL2xpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxVQUFVLE1BQU0sMENBQTBDLENBQUM7QUFPbEUsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFlOzs7OztJQVU5QyxZQUNXLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGckIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUw5QixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFLTyxDQUFDOzs7O0lBRWxDLFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBdkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFFcEIsc1NBQW9DOzthQUN2Qzs7OztZQWYyQixVQUFVO1lBTTdCLGFBQWE7OztvQkFXakIsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBUE4sOEJBQXVCOztJQUN2Qiw2QkFBc0I7O0lBQ3RCLDhCQUF1Qjs7SUFDdkIsOEJBQW9COztJQUNwQiw0QkFBcUI7O0lBQ3JCLDZCQUFzQjs7SUFDdEIsK0JBQTJCOztJQUMzQixrQ0FBMEI7O0lBR3RCLDhCQUF3Qjs7SUFDeEIsc0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRmFidWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZhYnVsYS5zZXJ2aWNlJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgTGlua1N0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvbGluay9saW5rJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmYWItbGluaycsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGluay5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saW5rLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByb3BzOiBhbnk7XG4gICAgQElucHV0KCkgcmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRhcmdldCA9ICdfYmxhbmsnO1xuICAgIEBJbnB1dCgpIHVuZGVybGluZSA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICAgICkgeyBzdXBlcihlbFJlZiwgZmFidWxhU2VydmljZSk7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IExpbmtTdHlsZXM7XG4gICAgICAgIHRoaXMuaW5pdFN0eWxlcygpO1xuICAgIH1cbn1cbiJdfQ==