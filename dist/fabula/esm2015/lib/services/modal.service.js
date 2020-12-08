/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalService {
    /**
     * @param {?} appRef
     * @param {?} injector
     * @param {?} resolver
     */
    constructor(appRef, injector, resolver) {
        this.appRef = appRef;
        this.injector = injector;
        this.resolver = resolver;
        this.modalIsClosing = false;
        this.modalIsOpen = false;
    }
    /**
     * @return {?}
     */
    createPortal() {
        /** @type {?} */
        const portal = document.createElement('div');
        portal.classList.add('fab-modal-portal');
        document.body.append(portal);
    }
    /**
     * @return {?}
     */
    closeModal() {
        /** @type {?} */
        let duration;
        /** @type {?} */
        let modalEl;
        /** @type {?} */
        let transitionDuration;
        modalEl = document.querySelector('.fab-modal');
        duration = window.getComputedStyle(modalEl).transitionDuration;
        transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        this.modalIsClosing = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
        }), transitionDuration + 1);
    }
    /**
     * @param {?} component
     * @param {?=} params
     * @return {?}
     */
    openModal(component, params) {
        /** @type {?} */
        let element;
        /** @type {?} */
        let portal;
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
        paramKey => {
            this.componentRef.instance[paramKey] = params[paramKey];
        }));
        element = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        // portal.appendChild(element);
        this.modalIsClosing = false;
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: Injector },
    { type: ComponentFactoryResolver }
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver)); }, token: ModalService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFtQixNQUFNLGVBQWUsQ0FBQzs7QUFLaEgsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQU1yQixZQUNZLE1BQXNCLEVBQ3RCLFFBQWtCLEVBQ2xCLFFBQWtDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFQOUMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFPaEIsQ0FBQzs7OztJQUVMLFlBQVk7O2NBQ0YsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFekMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELFVBQVU7O1lBQ0YsUUFBUTs7WUFDUixPQUFPOztZQUNQLGtCQUFrQjtRQUV0QixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxRQUFRLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1FBQy9ELGtCQUFrQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFeEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFFM0IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUMsR0FBRSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU87O1lBQ3BCLE9BQU87O1lBQ1AsTUFBTTtRQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQXdCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWUsQ0FBQztRQUUzRiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7O1lBNURKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OztZQUpvQixjQUFjO1lBQUUsUUFBUTtZQUFFLHdCQUF3Qjs7Ozs7SUFNbkUsb0NBQWE7O0lBQ2Isc0NBQXVCOztJQUN2QixtQ0FBb0I7O0lBQ3BCLDBDQUFtQjs7Ozs7SUFHZiw4QkFBOEI7Ozs7O0lBQzlCLGdDQUEwQjs7Ozs7SUFDMUIsZ0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIEluamVjdG9yLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuICAgIGNvbXBvbmVudFJlZjtcbiAgICBtb2RhbElzQ2xvc2luZyA9IGZhbHNlO1xuICAgIG1vZGFsSXNPcGVuID0gZmFsc2U7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICApIHsgfVxuXG4gICAgY3JlYXRlUG9ydGFsKCkge1xuICAgICAgICBjb25zdCBwb3J0YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9ydGFsLmNsYXNzTGlzdC5hZGQoJ2ZhYi1tb2RhbC1wb3J0YWwnKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3J0YWwpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbjtcbiAgICAgICAgbGV0IG1vZGFsRWw7XG4gICAgICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb247XG5cbiAgICAgICAgbW9kYWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWItbW9kYWwnKTtcbiAgICAgICAgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtb2RhbEVsKS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IChkdXJhdGlvbi5pbmRleE9mKCdtcycpID4gLTEpID8gcGFyc2VGbG9hdChkdXJhdGlvbikgOiBwYXJzZUZsb2F0KGR1cmF0aW9uKSAqIDEwMDA7XG5cbiAgICAgICAgdGhpcy5tb2RhbElzQ2xvc2luZyA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgdHJhbnNpdGlvbkR1cmF0aW9uICsgMSk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKGNvbXBvbmVudCwgcGFyYW1zPykge1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgbGV0IHBvcnRhbDtcblxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWItbW9kYWwtcG9ydGFsJykpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9ydGFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3J0YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFiLW1vZGFsLXBvcnRhbCcpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yLCBudWxsLCBwb3J0YWwpO1xuICAgICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChwYXJhbUtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtwYXJhbUtleV0gPSBwYXJhbXNbcGFyYW1LZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50ID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gcG9ydGFsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLm1vZGFsSXNDbG9zaW5nID0gZmFsc2U7XG4gICAgfVxufVxuIl19