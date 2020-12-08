/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/theme.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { css } from 'emotion';
// Default theme
import reset from '@fabula/core/styles/common/reset';
import setBaseTheme from '@fabula/core/styles/methods/misc/setBaseTheme';
import * as i0 from "@angular/core";
export class ThemeService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
    }
    /**
     * @return {?}
     */
    init() {
        document.body.classList.add(css(reset));
        setBaseTheme(this.options);
    }
}
ThemeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['UserOptions',] }] }
];
/** @nocollapse */ ThemeService.ngInjectableDef = i0.defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(i0.inject("UserOptions")); }, token: ThemeService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxLQUFLLE1BQU0sa0NBQWtDLENBQUM7QUFDckQsT0FBTyxZQUFZLE1BQU0sK0NBQStDLENBQUM7O0FBUXpFLE1BQU0sT0FBTyxZQUFZOzs7O0lBQ3ZCLFlBQTJDLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFBSSxDQUFDOzs7O0lBRXJFLElBQUk7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFURixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBRWMsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7O0lBQXJCLCtCQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5cbi8vIERlZmF1bHQgdGhlbWVcbmltcG9ydCByZXNldCBmcm9tICdAZmFidWxhL2NvcmUvc3R5bGVzL2NvbW1vbi9yZXNldCc7XG5pbXBvcnQgc2V0QmFzZVRoZW1lIGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvbWV0aG9kcy9taXNjL3NldEJhc2VUaGVtZSc7XG5cbi8vIE1vZGVsc1xuaW1wb3J0IHsgSVVzZXJPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXItb3B0aW9ucy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ1VzZXJPcHRpb25zJykgcHJpdmF0ZSBvcHRpb25zOiBJVXNlck9wdGlvbnMpIHsgfVxuXG4gIGluaXQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNzcyhyZXNldCkpO1xuICAgIHNldEJhc2VUaGVtZSh0aGlzLm9wdGlvbnMpO1xuICB9XG59XG4iXX0=