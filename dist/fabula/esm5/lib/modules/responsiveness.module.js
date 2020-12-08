/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules/responsiveness.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { FabulaService } from '../services/fabula.service';
// @dynamic
var ResponsivenessModule = /** @class */ (function () {
    function ResponsivenessModule() {
    }
    /**
     * @return {?}
     */
    ResponsivenessModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ResponsivenessModule,
            providers: [
                FabulaService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: (/**
                     * @param {?} service
                     * @return {?}
                     */
                    function (service) { return (/**
                     * @return {?}
                     */
                    function () {
                        service.responsiveness = true;
                    }); }),
                    deps: [FabulaService],
                    multi: true
                }
            ]
        };
    };
    ResponsivenessModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return ResponsivenessModule;
}());
export { ResponsivenessModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZW5lc3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZhYnVsYS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvcmVzcG9uc2l2ZW5lc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUczRDtJQUFBO0lBc0JBLENBQUM7Ozs7SUFoQlEsNEJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULGFBQWE7Z0JBQ2I7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVU7Ozs7b0JBQUUsVUFBQyxPQUFzQjs7O29CQUFLO3dCQUN0QyxPQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDaEMsQ0FBQyxJQUFBLENBQUE7b0JBQ0QsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNyQixLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXJCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBa0JELDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZhYnVsYVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWJ1bGEuc2VydmljZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVuZXNzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXNwb25zaXZlbmVzc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBGYWJ1bGFTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlOiBGYWJ1bGFTZXJ2aWNlKSA9PiAoKSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlc3BvbnNpdmVuZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcHM6IFtGYWJ1bGFTZXJ2aWNlXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19