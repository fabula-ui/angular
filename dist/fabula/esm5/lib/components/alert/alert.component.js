/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert/alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
// Components
import { CommonComponent } from '../common-component/common-component.component';
// Methods
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';
// Services
import { FabulaService } from '../../services/fabula.service';
// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';
var AlertComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AlertComponent, _super);
    function AlertComponent(elRef, fabulaService) {
        var _this = _super.call(this, elRef, fabulaService) || this;
        _this.elRef = elRef;
        _this.fabulaService = fabulaService;
        _this.border = true;
        _this.clear = false;
        _this.closeButton = false;
        _this.faded = false;
        _this.glow = false;
        _this.outline = false;
        _this.visible = true;
        _this.close = new EventEmitter();
        _this.hasProperty = {
            visible: true
        };
        return _this;
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.host = this.elRef.nativeElement;
        this.props = this;
        this.styles = AlertStyles;
        this.initStyles();
        if (this.type) {
            this.handleType();
        }
    };
    // Methods
    // Methods
    /**
     * @return {?}
     */
    AlertComponent.prototype.closeAlert = 
    // Methods
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var transitionDuration = getTransitionDuration(this.host.querySelector('.fab-alert'));
        this.closing = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.close.emit();
            _this.closing = false;
            _this.visible = false;
        }), transitionDuration + 1);
    };
    /**
     * @return {?}
     */
    AlertComponent.prototype.handleType = /**
     * @return {?}
     */
    function () {
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
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fab-alert',
                    template: "<div class=\"fab-alert\" [attr.data-closing]=\"closing\" [attr.data-title]=\"!!title\" data-fab-component=\"alert\"\n  *ngIf=\"visible\">\n  <fab-icon [props]=\"icon\" *ngIf=\"icon || type\"></fab-icon>\n  <div class=\"fab-alert__stage\">\n    <div class=\"fab-alert__title\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"fab-alert__text\" *ngIf=\"text\">{{text}}</div>\n    <ng-content></ng-content>\n  </div>\n  <fab-close-button (click)=\"closeAlert()\" [parentColor]=\"color\" size=\"sm\" *ngIf=\"closeButton\">\n  </fab-close-button>\n</div>",
                    styles: [":host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FabulaService }
    ]; };
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
    return AlertComponent;
}(CommonComponent));
export { AlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBR2pGLE9BQU8scUJBQXFCLE1BQU0sd0RBQXdELENBQUM7O0FBTTNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHOUQsT0FBTyxXQUFXLE1BQU0sNENBQTRDLENBQUM7QUFFckU7SUFLb0MsMENBQWU7SUEyQmpELHdCQUNTLEtBQWlCLEVBQ2pCLGFBQTRCO1FBRnJDLFlBR0ksa0JBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFHO1FBRnpCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUE1QjVCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFVBQUksR0FBRyxLQUFLLENBQUM7UUFJYixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBTWhCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZCxXQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEQsaUJBQVcsR0FBRztZQUNaLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQzs7SUFNK0IsQ0FBQzs7OztJQUVsQyxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBRTFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FBRTtJQUN2QyxDQUFDO0lBRUQsVUFBVTs7Ozs7SUFDVixtQ0FBVTs7Ozs7SUFBVjtRQUFBLGlCQVdDOztZQVZPLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVsQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEdBQUUsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELG1DQUFVOzs7SUFBVjtRQUNFLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLElBQUksR0FBRztvQkFDVixLQUFLLEVBQUUsUUFBUTtvQkFDZixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2QixDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLElBQUksR0FBRztvQkFDVixLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLE9BQU87aUJBQ2QsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLElBQUksRUFBRSxjQUFjO2lCQUNyQixDQUFDO2dCQUNGLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsSUFBSSxHQUFHO29CQUNWLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxNQUFNO2lCQUNiLENBQUM7U0FDTDtJQUNILENBQUM7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBRXJCLGtqQkFBcUM7O2lCQUN0Qzs7OztnQkFyQmtDLFVBQVU7Z0JBWXBDLGFBQWE7Ozt5QkFXbkIsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUVMLE1BQU07O0lBZ0VULHFCQUFDO0NBQUEsQUF4RkQsQ0FLb0MsZUFBZSxHQW1GbEQ7U0FuRlksY0FBYzs7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIscUNBQTZCOztJQUM3QiwrQkFBdUI7O0lBQ3ZCLHFDQUE2Qjs7SUFDN0IsK0JBQXVCOztJQUN2QiwrQkFBdUI7O0lBQ3ZCLDhCQUFzQjs7SUFDdEIsOEJBQW9COztJQUNwQixnQ0FBeUI7O0lBQ3pCLGdDQUF3Qjs7SUFDeEIsaUNBQXlCOztJQUN6Qiw4QkFBc0I7O0lBQ3RCLG1DQUEyQjs7SUFDM0IsK0JBQXVCOztJQUN2QixvQ0FBNEI7O0lBQzVCLDhCQUFzQjs7SUFDdEIsaUNBQXdCOztJQUV4QiwrQkFBd0Q7O0lBRXhELGlDQUFROztJQUNSLHFDQUVFOztJQUNGLDhCQUFLOztJQUdILCtCQUF3Qjs7SUFDeEIsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24tY29tcG9uZW50L2NvbW1vbi1jb21wb25lbnQuY29tcG9uZW50JztcblxuLy8gTWV0aG9kc1xuaW1wb3J0IGdldFRyYW5zaXRpb25EdXJhdGlvbiBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL21ldGhvZHMvbWlzYy9nZXRUcmFuc2l0aW9uRHVyYXRpb24nO1xuXG4vLyBNb2RlbHNcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbi5tb2RlbCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGYWJ1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmFidWxhLnNlcnZpY2UnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBBbGVydFN0eWxlcyBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWItYWxlcnQnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYm9yZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xvc2VCdXR0b24gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZmFkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZ2xvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uOiBJY29uO1xuICBASW5wdXQoKSBpbnZlcnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1hcmtlcjogc3RyaW5nO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNsb3Npbmc7XG4gIGhhc1Byb3BlcnR5ID0ge1xuICAgIHZpc2libGU6IHRydWVcbiAgfTtcbiAgaG9zdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGZhYnVsYVNlcnZpY2U6IEZhYnVsYVNlcnZpY2VcbiAgKSB7IHN1cGVyKGVsUmVmLCBmYWJ1bGFTZXJ2aWNlKTsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaG9zdCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnByb3BzID0gdGhpcztcbiAgICB0aGlzLnN0eWxlcyA9IEFsZXJ0U3R5bGVzO1xuXG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG5cbiAgICBpZiAodGhpcy50eXBlKSB7IHRoaXMuaGFuZGxlVHlwZSgpOyB9XG4gIH1cblxuICAvLyBNZXRob2RzXG4gIGNsb3NlQWxlcnQoKSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRoaXMuaG9zdC5xdWVyeVNlbGVjdG9yKCcuZmFiLWFsZXJ0JykpO1xuXG4gICAgdGhpcy5jbG9zaW5nID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XG5cbiAgICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgfSwgdHJhbnNpdGlvbkR1cmF0aW9uICsgMSk7XG4gIH1cblxuICBoYW5kbGVUeXBlKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICB0aGlzLmljb24gPSB7XG4gICAgICAgICAgY29sb3I6ICdkYW5nZXInLFxuICAgICAgICAgIG5hbWU6ICdhbGVydC10cmlhbmdsZSdcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5pY29uID0ge1xuICAgICAgICAgIGNvbG9yOiAnc3VjY2VzcycsXG4gICAgICAgICAgbmFtZTogJ2NoZWNrJ1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aGlzLmljb24gPSB7XG4gICAgICAgICAgY29sb3I6ICd3YXJuaW5nJyxcbiAgICAgICAgICBuYW1lOiAnYWxlcnQtY2lyY2xlJ1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuaWNvbiA9IHtcbiAgICAgICAgICBjb2xvcjogJ2NvbGQnLFxuICAgICAgICAgIG5hbWU6ICdpbmZvJ1xuICAgICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19