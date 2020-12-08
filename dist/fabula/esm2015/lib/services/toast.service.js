/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ToastService {
    constructor() {
        this.portal = false;
        this.stacks = {
            default: {
                hideDelay: 2000,
                placement: {
                    x: 'right',
                    y: 'bottom'
                },
                toasts: []
            }
        };
    }
    /**
     * @param {?} params
     * @return {?}
     */
    createStack(params) {
        const { name, placement } = params;
        this.stacks[name] = {
            placement,
            toasts: []
        };
    }
    /**
     * @param {?} newStacks
     * @return {?}
     */
    createStacks(newStacks) {
        for (let i = 0; i < newStacks.length; i++) {
            /** @type {?} */
            const newStack = newStacks[i];
            const { name, placement } = newStack;
            this.stacks[name] = {
                placement,
                toasts: []
            };
        }
    }
    /**
     * @param {?} stackName
     * @return {?}
     */
    handleToast(stackName) {
        /** @type {?} */
        const stack = this.stacks[stackName];
        /** @type {?} */
        const index = stack.toasts.length - 1;
        /** @type {?} */
        const toast = stack.toasts[index];
        /** @type {?} */
        const delay = toast.hideDelay || stack.hideDelay;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.hideToast({ index, stack });
        }), delay);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    hideToast(params) {
        const { index, stack } = params;
        /** @type {?} */
        let duration;
        /** @type {?} */
        let toastEl;
        if (!this.transitionDuration) {
            toastEl = document.querySelector('.fab-toast-wrapper');
            duration = window.getComputedStyle(toastEl).transitionDuration;
            this.transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        }
        stack.toasts[index].hiding = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            stack.toasts[index].hidden = true;
        }), this.transitionDuration + 1);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    showToast(params) {
        const { stack } = params, rest = tslib_1.__rest(params, ["stack"]);
        if (this.stacks[stack]) {
            this.stacks[stack].toasts.push(Object.assign({ stack }, rest));
        }
        else {
            this.stacks.default.toasts.push(Object.assign({ stack }, rest));
        }
        this.handleToast(stack);
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [];
/** @nocollapse */ ToastService.ngInjectableDef = i0.defineInjectable({ factory: function ToastService_Factory() { return new ToastService(); }, token: ToastService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ToastService.prototype.portal;
    /** @type {?} */
    ToastService.prototype.stacks;
    /** @type {?} */
    ToastService.prototype.transitionDuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXVFLE1BQU0sZUFBZSxDQUFDOztBQUtoSCxNQUFNLE9BQU8sWUFBWTtJQWNyQjtRQWJBLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFNLEdBQUc7WUFDTCxPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsU0FBUyxFQUFFO29CQUNQLENBQUMsRUFBRSxPQUFPO29CQUNWLENBQUMsRUFBRSxRQUFRO2lCQUNkO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ2I7U0FDSixDQUFDO0lBR2MsQ0FBQzs7Ozs7SUFFakIsV0FBVyxDQUFDLE1BQU07Y0FDUixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNO1FBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDaEIsU0FBUztZQUNULE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNMLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFNBQVM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNqQyxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztrQkFDdkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsUUFBUTtZQUVwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNoQixTQUFTO2dCQUNULE1BQU0sRUFBRSxFQUFFO2FBQ2IsQ0FBQztTQUNMO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsU0FBUzs7Y0FDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O2NBQzlCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDOztjQUMvQixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2NBQzNCLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTO1FBRWhELFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLEdBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFNO2NBQ04sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTTs7WUFFM0IsUUFBUTs7WUFDUixPQUFPO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMxQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3ZELFFBQVEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDaEg7UUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbEMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ1osS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLENBQUMsR0FBRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBTTtjQUNOLEVBQUUsS0FBSyxLQUFjLE1BQU0sRUFBbEIsd0NBQU87UUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQUcsS0FBSyxJQUFLLElBQUksRUFBRyxDQUFDO1NBQ3REO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxpQkFBRyxLQUFLLElBQUssSUFBSSxFQUFHLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQWhGSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7SUFFRyw4QkFBZTs7SUFDZiw4QkFTRTs7SUFDRiwwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG4gICAgcG9ydGFsID0gZmFsc2U7XG4gICAgc3RhY2tzID0ge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBoaWRlRGVsYXk6IDIwMDAsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB4OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHk6ICdib3R0b20nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9hc3RzOiBbXVxuICAgICAgICB9XG4gICAgfTtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgY3JlYXRlU3RhY2socGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcGxhY2VtZW50IH0gPSBwYXJhbXM7XG5cbiAgICAgICAgdGhpcy5zdGFja3NbbmFtZV0gPSB7XG4gICAgICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgICAgICB0b2FzdHM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTdGFja3MobmV3U3RhY2tzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U3RhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGFjayA9IG5ld1N0YWNrc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgcGxhY2VtZW50IH0gPSBuZXdTdGFjaztcblxuICAgICAgICAgICAgdGhpcy5zdGFja3NbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICAgICAgICAgIHRvYXN0czogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb2FzdChzdGFja05hbWUpIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrc1tzdGFja05hbWVdO1xuICAgICAgICBjb25zdCBpbmRleCA9IHN0YWNrLnRvYXN0cy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCB0b2FzdCA9IHN0YWNrLnRvYXN0c1tpbmRleF07XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gdG9hc3QuaGlkZURlbGF5IHx8IHN0YWNrLmhpZGVEZWxheTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRvYXN0KHsgaW5kZXgsIHN0YWNrIH0pO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgaGlkZVRvYXN0KHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBzdGFjayB9ID0gcGFyYW1zO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbjtcbiAgICAgICAgbGV0IHRvYXN0RWw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgdG9hc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWItdG9hc3Qtd3JhcHBlcicpO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0b2FzdEVsKS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IChkdXJhdGlvbi5pbmRleE9mKCdtcycpID4gLTEpID8gcGFyc2VGbG9hdChkdXJhdGlvbikgOiBwYXJzZUZsb2F0KGR1cmF0aW9uKSAqIDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFjay50b2FzdHNbaW5kZXhdLmhpZGluZyA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzdGFjay50b2FzdHNbaW5kZXhdLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uICsgMSk7XG4gICAgfVxuXG4gICAgc2hvd1RvYXN0KHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IHN0YWNrLCAuLi5yZXN0IH0gPSBwYXJhbXM7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2tzW3N0YWNrXSkge1xuICAgICAgICAgICAgdGhpcy5zdGFja3Nbc3RhY2tdLnRvYXN0cy5wdXNoKHsgc3RhY2ssIC4uLnJlc3QgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YWNrcy5kZWZhdWx0LnRvYXN0cy5wdXNoKHsgc3RhY2ssIC4uLnJlc3QgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVRvYXN0KHN0YWNrKTtcbiAgICB9XG59XG4iXX0=