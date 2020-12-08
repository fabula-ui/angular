/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert/alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Methods
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';
export class AlertComponent extends CommonComponent {
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
        this.closeButton = false;
        this.faded = false;
        this.glow = false;
        this.outline = false;
        this.visible = true;
        this.close = new EventEmitter();
        this.hasProperty = {
            visible: true
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.host = this.elRef.nativeElement;
        this.props = this;
        this.styles = AlertStyles;
        this.initStyles();
        if (this.type) {
            this.handleType();
        }
    }
    // Methods
    /**
     * @return {?}
     */
    closeAlert() {
        /** @type {?} */
        const transitionDuration = getTransitionDuration(this.host.querySelector('.fab-alert'));
        this.closing = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.close.emit();
            this.closing = false;
            this.visible = false;
        }), transitionDuration + 1);
    }
    /**
     * @return {?}
     */
    handleType() {
        switch (this.type) {
            case 'danger':
                this.icon = {
                    color: 'danger',
                    name: 'alert-triangle'
                };
                break;
            case 'success':
                this.icon = {
                    color: 'success',
                    name: 'check'
                };
                break;
            case 'warning':
                this.icon = {
                    color: 'warning',
                    name: 'alert-circle'
                };
                break;
            default:
                this.icon = {
                    color: 'cold',
                    name: 'info'
                };
        }
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'fab-alert',
                template: "<div class=\"fab-alert\" [attr.data-closing]=\"closing\" [attr.data-title]=\"!!title\" data-fab-component=\"alert\"\n  *ngIf=\"visible\">\n  <fab-icon [props]=\"icon\" *ngIf=\"icon || type\"></fab-icon>\n  <div class=\"fab-alert__stage\">\n    <div class=\"fab-alert__title\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"fab-alert__text\" *ngIf=\"text\">{{text}}</div>\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button (click)=\"closeAlert()\" [parentColor]=\"color\" size=\"sm\" *ngIf=\"closeButton\">\n  </fab-close-button>\n</div>",
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FabulaService }
];
AlertComponent.propDecorators = {
    border: [{ type: Input }],
    borderColor: [{ type: Input }],
    clear: [{ type: Input }],
    closeButton: [{ type: Input }],
    color: [{ type: Input }],
    faded: [{ type: Input }],
    glow: [{ type: Input }],
    icon: [{ type: Input }],
    invert: [{ type: Input }],
    marker: [{ type: Input }],
    outline: [{ type: Input }],
    text: [{ type: Input }],
    textColor: [{ type: Input }],
    title: [{ type: Input }],
    titleColor: [{ type: Input }],
    type: [{ type: Input }],
    visible: [{ type: Input }],
    close: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AlertComponent.prototype.border;
    /** @type {?} */
    AlertComponent.prototype.borderColor;
    /** @type {?} */
    AlertComponent.prototype.clear;
    /** @type {?} */
    AlertComponent.prototype.closeButton;
    /** @type {?} */
    AlertComponent.prototype.color;
    /** @type {?} */
    AlertComponent.prototype.faded;
    /** @type {?} */
    AlertComponent.prototype.glow;
    /** @type {?} */
    AlertComponent.prototype.icon;
    /** @type {?} */
    AlertComponent.prototype.invert;
    /** @type {?} */
    AlertComponent.prototype.marker;
    /** @type {?} */
    AlertComponent.prototype.outline;
    /** @type {?} */
    AlertComponent.prototype.text;
    /** @type {?} */
    AlertComponent.prototype.textColor;
    /** @type {?} */
    AlertComponent.prototype.title;
    /** @type {?} */
    AlertComponent.prototype.titleColor;
    /** @type {?} */
    AlertComponent.prototype.type;
    /** @type {?} */
    AlertComponent.prototype.visible;
    /** @type {?} */
    AlertComponent.prototype.close;
    /** @type {?} */
    AlertComponent.prototype.closing;
    /** @type {?} */
    AlertComponent.prototype.hasProperty;
    /** @type {?} */
    AlertComponent.prototype.host;
    /** @type {?} */
    AlertComponent.prototype.elRef;
    /** @type {?} */
    AlertComponent.prototype.fabulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFHakYsT0FBTyxxQkFBcUIsTUFBTSx3REFBd0QsQ0FBQzs7QUFNM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc5RCxPQUFPLFdBQVcsTUFBTSw0Q0FBNEMsQ0FBQztBQU9yRSxNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQWU7Ozs7O0lBMkJqRCxZQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBQ2pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFGdkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTVCNUIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUliLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFNaEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVkLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd4RCxnQkFBVyxHQUFHO1lBQ1osT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBTStCLENBQUM7Ozs7SUFFbEMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFFMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUFFO0lBQ3ZDLENBQUM7Ozs7O0lBR0QsVUFBVTs7Y0FDRixrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWxCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsR0FBRSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLElBQUksR0FBRztvQkFDVixLQUFLLEVBQUUsUUFBUTtvQkFDZixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2QixDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLElBQUksR0FBRztvQkFDVixLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLE9BQU87aUJBQ2QsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLElBQUksRUFBRSxjQUFjO2lCQUNyQixDQUFDO2dCQUNGLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsSUFBSSxHQUFHO29CQUNWLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxNQUFNO2lCQUNiLENBQUM7U0FDTDtJQUNILENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBRXJCLGtqQkFBcUM7O2FBQ3RDOzs7O1lBckJrQyxVQUFVO1lBWXBDLGFBQWE7OztxQkFXbkIsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUVMLE1BQU07Ozs7SUFsQlAsZ0NBQXVCOztJQUN2QixxQ0FBNkI7O0lBQzdCLCtCQUF1Qjs7SUFDdkIscUNBQTZCOztJQUM3QiwrQkFBdUI7O0lBQ3ZCLCtCQUF1Qjs7SUFDdkIsOEJBQXNCOztJQUN0Qiw4QkFBb0I7O0lBQ3BCLGdDQUF5Qjs7SUFDekIsZ0NBQXdCOztJQUN4QixpQ0FBeUI7O0lBQ3pCLDhCQUFzQjs7SUFDdEIsbUNBQTJCOztJQUMzQiwrQkFBdUI7O0lBQ3ZCLG9DQUE0Qjs7SUFDNUIsOEJBQXNCOztJQUN0QixpQ0FBd0I7O0lBRXhCLCtCQUF3RDs7SUFFeEQsaUNBQVE7O0lBQ1IscUNBRUU7O0lBQ0YsOEJBQUs7O0lBR0gsK0JBQXdCOztJQUN4Qix1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi1jb21wb25lbnQvY29tbW9uLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vLyBNZXRob2RzXG5pbXBvcnQgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvbWV0aG9kcy9taXNjL2dldFRyYW5zaXRpb25EdXJhdGlvbic7XG5cbi8vIE1vZGVsc1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL21vZGVscy9pY29uLm1vZGVsJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IEFsZXJ0U3R5bGVzIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tcG9uZW50cy9hbGVydC9hbGVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYi1hbGVydCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBib3JkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBib3JkZXJDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBjbGVhciA9IGZhbHNlO1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBmYWRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBnbG93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb246IEljb247XG4gIEBJbnB1dCgpIGludmVydDogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFya2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGVDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2xvc2luZztcbiAgaGFzUHJvcGVydHkgPSB7XG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9O1xuICBob3N0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZmFidWxhU2VydmljZTogRmFidWxhU2VydmljZVxuICApIHsgc3VwZXIoZWxSZWYsIGZhYnVsYVNlcnZpY2UpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ob3N0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucHJvcHMgPSB0aGlzO1xuICAgIHRoaXMuc3R5bGVzID0gQWxlcnRTdHlsZXM7XG5cbiAgICB0aGlzLmluaXRTdHlsZXMoKTtcblxuICAgIGlmICh0aGlzLnR5cGUpIHsgdGhpcy5oYW5kbGVUeXBlKCk7IH1cbiAgfVxuXG4gIC8vIE1ldGhvZHNcbiAgY2xvc2VBbGVydCgpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb24odGhpcy5ob3N0LnF1ZXJ5U2VsZWN0b3IoJy5mYWItYWxlcnQnKSk7XG5cbiAgICB0aGlzLmNsb3NpbmcgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcblxuICAgICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9LCB0cmFuc2l0aW9uRHVyYXRpb24gKyAxKTtcbiAgfVxuXG4gIGhhbmRsZVR5cGUoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHRoaXMuaWNvbiA9IHtcbiAgICAgICAgICBjb2xvcjogJ2RhbmdlcicsXG4gICAgICAgICAgbmFtZTogJ2FsZXJ0LXRyaWFuZ2xlJ1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmljb24gPSB7XG4gICAgICAgICAgY29sb3I6ICdzdWNjZXNzJyxcbiAgICAgICAgICBuYW1lOiAnY2hlY2snXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHRoaXMuaWNvbiA9IHtcbiAgICAgICAgICBjb2xvcjogJ3dhcm5pbmcnLFxuICAgICAgICAgIG5hbWU6ICdhbGVydC1jaXJjbGUnXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5pY29uID0ge1xuICAgICAgICAgIGNvbG9yOiAnY29sZCcsXG4gICAgICAgICAgbmFtZTogJ2luZm8nXG4gICAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=