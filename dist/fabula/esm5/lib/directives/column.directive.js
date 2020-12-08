/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/column.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
var ColumnDirective = /** @class */ (function () {
    function ColumnDirective(componentFactoryResolver, elRef, renderer, target) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.elRef = elRef;
        this.renderer = renderer;
        this.target = target;
    }
    /**
     * @return {?}
     */
    ColumnDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    ColumnDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[col],[col-down],[col-up],[col-on],[col-not-on]'
                },] }
    ];
    /** @nocollapse */
    ColumnDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef }
    ]; };
    ColumnDirective.propDecorators = {
        col: [{ type: Input }],
        colDown: [{ type: Input, args: ['col-down',] }],
        colNotOn: [{ type: Input, args: ['col-not-on',] }],
        colOn: [{ type: Input, args: ['col-on',] }],
        colUp: [{ type: Input, args: ['col-up',] }]
    };
    return ColumnDirective;
}());
export { ColumnDirective };
if (false) {
    /** @type {?} */
    ColumnDirective.prototype.col;
    /** @type {?} */
    ColumnDirective.prototype.colDown;
    /** @type {?} */
    ColumnDirective.prototype.colNotOn;
    /** @type {?} */
    ColumnDirective.prototype.colOn;
    /** @type {?} */
    ColumnDirective.prototype.colUp;
    /**
     * @type {?}
     * @private
     */
    ColumnDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ColumnDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    ColumnDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ColumnDirective.prototype.target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbHVtbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLHdCQUF3QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSTtJQVVJLHlCQUNZLHdCQUFrRCxFQUNsRCxLQUFpQixFQUNqQixRQUFtQixFQUNuQixNQUF3QjtRQUh4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUNoQyxDQUFDOzs7O0lBRUwseUNBQWU7OztJQUFmO0lBRUEsQ0FBQzs7Z0JBbkJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaURBQWlEO2lCQUM5RDs7OztnQkFKdUIsd0JBQXdCO2dCQUFhLFVBQVU7Z0JBQVMsU0FBUztnQkFBRSxnQkFBZ0I7OztzQkFNdEcsS0FBSzswQkFDTCxLQUFLLFNBQUMsVUFBVTsyQkFDaEIsS0FBSyxTQUFDLFlBQVk7d0JBQ2xCLEtBQUssU0FBQyxRQUFRO3dCQUNkLEtBQUssU0FBQyxRQUFROztJQWFuQixzQkFBQztDQUFBLEFBckJELElBcUJDO1NBbEJZLGVBQWU7OztJQUN4Qiw4QkFBa0I7O0lBQ2xCLGtDQUFnQzs7SUFDaEMsbUNBQW1DOztJQUNuQyxnQ0FBNEI7O0lBQzVCLGdDQUE0Qjs7Ozs7SUFHeEIsbURBQTBEOzs7OztJQUMxRCxnQ0FBeUI7Ozs7O0lBQ3pCLG1DQUEyQjs7Ozs7SUFDM0IsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY29sXSxbY29sLWRvd25dLFtjb2wtdXBdLFtjb2wtb25dLFtjb2wtbm90LW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgY29sOiBhbnk7XG4gICAgQElucHV0KCdjb2wtZG93bicpIGNvbERvd246IGFueTtcbiAgICBASW5wdXQoJ2NvbC1ub3Qtb24nKSBjb2xOb3RPbjogYW55O1xuICAgIEBJbnB1dCgnY29sLW9uJykgY29sT246IGFueTtcbiAgICBASW5wdXQoJ2NvbC11cCcpIGNvbFVwOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIHRhcmdldDogVmlld0NvbnRhaW5lclJlZixcbiAgICApIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBcbiAgICB9XG5cbn1cbiJdfQ==