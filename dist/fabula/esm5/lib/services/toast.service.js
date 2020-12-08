/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ToastService = /** @class */ (function () {
    function ToastService() {
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
    ToastService.prototype.createStack = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var name = params.name, placement = params.placement;
        this.stacks[name] = {
            placement: placement,
            toasts: []
        };
    };
    /**
     * @param {?} newStacks
     * @return {?}
     */
    ToastService.prototype.createStacks = /**
     * @param {?} newStacks
     * @return {?}
     */
    function (newStacks) {
        for (var i = 0; i < newStacks.length; i++) {
            /** @type {?} */
            var newStack = newStacks[i];
            var name_1 = newStack.name, placement = newStack.placement;
            this.stacks[name_1] = {
                placement: placement,
                toasts: []
            };
        }
    };
    /**
     * @param {?} stackName
     * @return {?}
     */
    ToastService.prototype.handleToast = /**
     * @param {?} stackName
     * @return {?}
     */
    function (stackName) {
        var _this = this;
        /** @type {?} */
        var stack = this.stacks[stackName];
        /** @type {?} */
        var index = stack.toasts.length - 1;
        /** @type {?} */
        var toast = stack.toasts[index];
        /** @type {?} */
        var delay = toast.hideDelay || stack.hideDelay;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.hideToast({ index: index, stack: stack });
        }), delay);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    ToastService.prototype.hideToast = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var index = params.index, stack = params.stack;
        /** @type {?} */
        var duration;
        /** @type {?} */
        var toastEl;
        if (!this.transitionDuration) {
            toastEl = document.querySelector('.fab-toast-wrapper');
            duration = window.getComputedStyle(toastEl).transitionDuration;
            this.transitionDuration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        }
        stack.toasts[index].hiding = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            stack.toasts[index].hidden = true;
        }), this.transitionDuration + 1);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    ToastService.prototype.showToast = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var stack = params.stack, rest = tslib_1.__rest(params, ["stack"]);
        if (this.stacks[stack]) {
            this.stacks[stack].toasts.push(tslib_1.__assign({ stack: stack }, rest));
        }
        else {
            this.stacks.default.toasts.push(tslib_1.__assign({ stack: stack }, rest));
        }
        this.handleToast(stack);
    };
    ToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return []; };
    /** @nocollapse */ ToastService.ngInjectableDef = i0.defineInjectable({ factory: function ToastService_Factory() { return new ToastService(); }, token: ToastService, providedIn: "root" });
    return ToastService;
}());
export { ToastService };
if (false) {
    /** @type {?} */
    ToastService.prototype.portal;
    /** @type {?} */
    ToastService.prototype.stacks;
    /** @type {?} */
    ToastService.prototype.transitionDuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXVFLE1BQU0sZUFBZSxDQUFDOztBQUVoSDtJQWlCSTtRQWJBLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFNLEdBQUc7WUFDTCxPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsU0FBUyxFQUFFO29CQUNQLENBQUMsRUFBRSxPQUFPO29CQUNWLENBQUMsRUFBRSxRQUFRO2lCQUNkO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ2I7U0FDSixDQUFDO0lBR2MsQ0FBQzs7Ozs7SUFFakIsa0NBQVc7Ozs7SUFBWCxVQUFZLE1BQU07UUFDTixJQUFBLGtCQUFJLEVBQUUsNEJBQVM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNoQixTQUFTLFdBQUE7WUFDVCxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUE7SUFDTCxDQUFDOzs7OztJQUVELG1DQUFZOzs7O0lBQVosVUFBYSxTQUFTO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDakMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBQSxzQkFBSSxFQUFFLDhCQUFTO1lBRXZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBSSxDQUFDLEdBQUc7Z0JBQ2hCLFNBQVMsV0FBQTtnQkFDVCxNQUFNLEVBQUUsRUFBRTthQUNiLENBQUM7U0FDTDtJQUNMLENBQUM7Ozs7O0lBRUQsa0NBQVc7Ozs7SUFBWCxVQUFZLFNBQVM7UUFBckIsaUJBU0M7O1lBUlMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDOztZQUM5QixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOztZQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUztRQUVoRCxVQUFVOzs7UUFBQztZQUNQLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxHQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxnQ0FBUzs7OztJQUFULFVBQVUsTUFBTTtRQUNKLElBQUEsb0JBQUssRUFBRSxvQkFBSzs7WUFFaEIsUUFBUTs7WUFDUixPQUFPO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMxQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3ZELFFBQVEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDaEg7UUFFRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbEMsVUFBVTs7O1FBQUM7WUFDUCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxHQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGdDQUFTOzs7O0lBQVQsVUFBVSxNQUFNO1FBQ0osSUFBQSxvQkFBSyxFQUFFLHdDQUFPO1FBRXRCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFHLEtBQUssT0FBQSxJQUFLLElBQUksRUFBRyxDQUFDO1NBQ3REO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxvQkFBRyxLQUFLLE9BQUEsSUFBSyxJQUFJLEVBQUcsQ0FBQztTQUN2RDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0JBaEZKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7O3VCQUpEO0NBbUZDLEFBakZELElBaUZDO1NBOUVZLFlBQVk7OztJQUNyQiw4QkFBZTs7SUFDZiw4QkFTRTs7SUFDRiwwQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG4gICAgcG9ydGFsID0gZmFsc2U7XG4gICAgc3RhY2tzID0ge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBoaWRlRGVsYXk6IDIwMDAsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB4OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHk6ICdib3R0b20nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9hc3RzOiBbXVxuICAgICAgICB9XG4gICAgfTtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgY3JlYXRlU3RhY2socGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcGxhY2VtZW50IH0gPSBwYXJhbXM7XG5cbiAgICAgICAgdGhpcy5zdGFja3NbbmFtZV0gPSB7XG4gICAgICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgICAgICB0b2FzdHM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTdGFja3MobmV3U3RhY2tzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3U3RhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGFjayA9IG5ld1N0YWNrc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgcGxhY2VtZW50IH0gPSBuZXdTdGFjaztcblxuICAgICAgICAgICAgdGhpcy5zdGFja3NbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICAgICAgICAgIHRvYXN0czogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb2FzdChzdGFja05hbWUpIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnN0YWNrc1tzdGFja05hbWVdO1xuICAgICAgICBjb25zdCBpbmRleCA9IHN0YWNrLnRvYXN0cy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCB0b2FzdCA9IHN0YWNrLnRvYXN0c1tpbmRleF07XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gdG9hc3QuaGlkZURlbGF5IHx8IHN0YWNrLmhpZGVEZWxheTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRvYXN0KHsgaW5kZXgsIHN0YWNrIH0pO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgaGlkZVRvYXN0KHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBzdGFjayB9ID0gcGFyYW1zO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbjtcbiAgICAgICAgbGV0IHRvYXN0RWw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgdG9hc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWItdG9hc3Qtd3JhcHBlcicpO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0b2FzdEVsKS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IChkdXJhdGlvbi5pbmRleE9mKCdtcycpID4gLTEpID8gcGFyc2VGbG9hdChkdXJhdGlvbikgOiBwYXJzZUZsb2F0KGR1cmF0aW9uKSAqIDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFjay50b2FzdHNbaW5kZXhdLmhpZGluZyA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzdGFjay50b2FzdHNbaW5kZXhdLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uICsgMSk7XG4gICAgfVxuXG4gICAgc2hvd1RvYXN0KHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IHN0YWNrLCAuLi5yZXN0IH0gPSBwYXJhbXM7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2tzW3N0YWNrXSkge1xuICAgICAgICAgICAgdGhpcy5zdGFja3Nbc3RhY2tdLnRvYXN0cy5wdXNoKHsgc3RhY2ssIC4uLnJlc3QgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YWNrcy5kZWZhdWx0LnRvYXN0cy5wdXNoKHsgc3RhY2ssIC4uLnJlc3QgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVRvYXN0KHN0YWNrKTtcbiAgICB9XG59XG4iXX0=