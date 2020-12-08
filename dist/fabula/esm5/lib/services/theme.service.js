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
var ThemeService = /** @class */ (function () {
    function ThemeService(options) {
        this.options = options;
    }
    /**
     * @return {?}
     */
    ThemeService.prototype.init = /**
     * @return {?}
     */
    function () {
        document.body.classList.add(css(reset));
        setBaseTheme(this.options);
    };
    ThemeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['UserOptions',] }] }
    ]; };
    /** @nocollapse */ ThemeService.ngInjectableDef = i0.defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(i0.inject("UserOptions")); }, token: ThemeService, providedIn: "root" });
    return ThemeService;
}());
export { ThemeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmYWJ1bGEvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFHOUIsT0FBTyxLQUFLLE1BQU0sa0NBQWtDLENBQUM7QUFDckQsT0FBTyxZQUFZLE1BQU0sK0NBQStDLENBQUM7O0FBS3pFO0lBSUUsc0JBQTJDLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFBSSxDQUFDOzs7O0lBRXJFLDJCQUFJOzs7SUFBSjtRQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQVRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBRWMsTUFBTSxTQUFDLGFBQWE7Ozt1QkFkbkM7Q0FvQkMsQUFWRCxJQVVDO1NBUFksWUFBWTs7Ozs7O0lBQ1gsK0JBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJztcblxuLy8gRGVmYXVsdCB0aGVtZVxuaW1wb3J0IHJlc2V0IGZyb20gJ0BmYWJ1bGEvY29yZS9zdHlsZXMvY29tbW9uL3Jlc2V0JztcbmltcG9ydCBzZXRCYXNlVGhlbWUgZnJvbSAnQGZhYnVsYS9jb3JlL3N0eWxlcy9tZXRob2RzL21pc2Mvc2V0QmFzZVRoZW1lJztcblxuLy8gTW9kZWxzXG5pbXBvcnQgeyBJVXNlck9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdXNlci1vcHRpb25zLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdCgnVXNlck9wdGlvbnMnKSBwcml2YXRlIG9wdGlvbnM6IElVc2VyT3B0aW9ucykgeyB9XG5cbiAgaW5pdCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY3NzKHJlc2V0KSk7XG4gICAgc2V0QmFzZVRoZW1lKHRoaXMub3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==