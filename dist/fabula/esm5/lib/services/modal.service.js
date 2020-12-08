/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';
import * as i0 from "@angular/core";
var ModalService = /** @class */ (function () {
    function ModalService(appRef, injector, resolver) {
        this.appRef = appRef;
        this.injector = injector;
        this.resolver = resolver;
        this.modalIsClosing = false;
        this.modalIsOpen = false;
    }
    /**
     * @return {?}
     */
    ModalService.prototype.createPortal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var portal = document.createElement('div');
        portal.classList.add('fab-modal-portal');
        document.body.append(portal);
    };
    /**
     * @return {?}
     */
    ModalService.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var duration;
        /** @type {?} */
        var modalEl;
        /** @type {?} */
        var transitionDuration;
        modalEl = document.querySelector('.fab-modal');
        duration = window.getComputedStyle(modalEl).transitionDuration;
        transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        this.modalIsClosing = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.appRef.detachView(_this.componentRef.hostView);
            _this.componentRef.destroy();
        }), transitionDuration + 1);
    };
    /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    ModalService.prototype.openModal = /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    function (component, params) {
        var _this = this;
        /** @type {?} */
        var element;
        /** @type {?} */
        var portal;
        if (!document.querySelector('.fab-modal-portal')) {
            this.createPortal();
        }
        portal = document.querySelector('.fab-modal-portal');
        this.componentRef = this.resolver.resolveComponentFactory(component).create(this.injector, null, portal);
        this.appRef.attachView(this.componentRef.hostView);
        Object.keys(params).map((/**
         * @param {?} paramKey
         * @return {?}
         */
        function (paramKey) {
            _this.componentRef.instance[paramKey] = params[paramKey];
        }));
        element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        // portal.appendChild(element);
        this.modalIsClosing = false;
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: Injector },
        { type: ComponentFactoryResolver }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());
export { ModalService };
if (false) {
    /** @type {?} */
    ModalService.prototype.componentRef;
    /** @type {?} */
    ModalService.prototype.modalIsClosing;
    /** @type {?} */
    ModalService.prototype.modalIsOpen;
    /** @type {?} */
    ModalService.prototype.transitionDuration;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFtQixNQUFNLGVBQWUsQ0FBQzs7QUFFaEg7SUFTSSxzQkFDWSxNQUFzQixFQUN0QixRQUFrQixFQUNsQixRQUFrQztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBUDlDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBT2hCLENBQUM7Ozs7SUFFTCxtQ0FBWTs7O0lBQVo7O1lBQ1UsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFekMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELGlDQUFVOzs7SUFBVjtRQUFBLGlCQWVDOztZQWRPLFFBQVE7O1lBQ1IsT0FBTzs7WUFDUCxrQkFBa0I7UUFFdEIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsUUFBUSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRCxrQkFBa0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXhHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTNCLFVBQVU7OztRQUFDO1lBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUMsR0FBRSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxnQ0FBUzs7Ozs7SUFBVCxVQUFVLFNBQVMsRUFBRSxNQUFPO1FBQTVCLGlCQXFCQzs7WUFwQk8sT0FBTzs7WUFDUCxNQUFNO1FBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7UUFFRCxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVE7WUFDNUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWUsQ0FBQztRQUUzRiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Z0JBNURKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0JBSm9CLGNBQWM7Z0JBQUUsUUFBUTtnQkFBRSx3QkFBd0I7Ozt1QkFBdkU7Q0ErREMsQUE3REQsSUE2REM7U0ExRFksWUFBWTs7O0lBQ3JCLG9DQUFhOztJQUNiLHNDQUF1Qjs7SUFDdkIsbUNBQW9COztJQUNwQiwwQ0FBbUI7Ozs7O0lBR2YsOEJBQThCOzs7OztJQUM5QixnQ0FBMEI7Ozs7O0lBQzFCLGdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEFwcGxpY2F0aW9uUmVmLCBJbmplY3RvciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgICBjb21wb25lbnRSZWY7XG4gICAgbW9kYWxJc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICBtb2RhbElzT3BlbiA9IGZhbHNlO1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgKSB7IH1cblxuICAgIGNyZWF0ZVBvcnRhbCgpIHtcbiAgICAgICAgY29uc3QgcG9ydGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcnRhbC5jbGFzc0xpc3QuYWRkKCdmYWItbW9kYWwtcG9ydGFsJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocG9ydGFsKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICBsZXQgZHVyYXRpb247XG4gICAgICAgIGxldCBtb2RhbEVsO1xuICAgICAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uO1xuXG4gICAgICAgIG1vZGFsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFiLW1vZGFsJyk7XG4gICAgICAgIGR1cmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobW9kYWxFbCkudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSAoZHVyYXRpb24uaW5kZXhPZignbXMnKSA+IC0xKSA/IHBhcnNlRmxvYXQoZHVyYXRpb24pIDogcGFyc2VGbG9hdChkdXJhdGlvbikgKiAxMDAwO1xuXG4gICAgICAgIHRoaXMubW9kYWxJc0Nsb3NpbmcgPSB0cnVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgIH0sIHRyYW5zaXRpb25EdXJhdGlvbiArIDEpO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbChjb21wb25lbnQsIHBhcmFtcz8pIHtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIGxldCBwb3J0YWw7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFiLW1vZGFsLXBvcnRhbCcpKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBvcnRhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9ydGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhYi1tb2RhbC1wb3J0YWwnKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3RvciwgbnVsbCwgcG9ydGFsKTtcbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5tYXAocGFyYW1LZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2VbcGFyYW1LZXldID0gcGFyYW1zW3BhcmFtS2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudCA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIC8vIHBvcnRhbC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgdGhpcy5tb2RhbElzQ2xvc2luZyA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==